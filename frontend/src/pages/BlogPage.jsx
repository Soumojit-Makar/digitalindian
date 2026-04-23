import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { FileText } from 'lucide-react'
import { blogAPI } from '../services/api'
import { PageHero, BlogCard, LoadingSpinner, EmptyState, CTABanner } from '../components/ui/index.jsx'
import Blog from '../assates/blog.png'
const categories = [
  { value: '', label: 'All' },
  { value: 'gis-technology', label: 'GIS Technology' },
  { value: 'remote-sensing', label: 'Remote Sensing' },
  { value: 'smart-city', label: 'Smart City' },
  { value: 'land-intelligence', label: 'Land Intelligence' },
  { value: 'geo-ai', label: 'GeoAI' },
  { value: 'field-survey', label: 'Field Survey' },
  { value: 'industry-insights', label: 'Industry Insights' },
  { value: 'company-news', label: 'Company News' },
]

export default function BlogPage() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    setLoading(true)
    const params = { limit: 9, page }
    if (category) params.category = category
    blogAPI.getAll(params)
      .then(r => {
        setBlogs(r.data.blogs || [])
        setTotalPages(r.data.pages || 1)
      })
      .finally(() => setLoading(false))
  }, [category, page])

  return (
    <>
      <Helmet>
        <title>GIS Insights & Articles — Digital Indian</title>
        <meta name="description" content="Read Digital Indian's latest articles on GIS technology, remote sensing, smart cities, land intelligence, and spatial AI in India." />
      </Helmet>

      <PageHero
      img={Blog}
        label="Insights"
        title="Perspectives on geospatial intelligence"
        subtitle="Original analysis, technology deep-dives, and domain insights from Digital Indian's specialists."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Insights' }]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(c => (
              <button key={c.value} onClick={() => { setCategory(c.value); setPage(1) }}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  category === c.value
                    ? 'bg-brand-500 text-white'
                    : 'bg-white text-slate-400 hover:bg-white border border-slate-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {loading ? (
            <LoadingSpinner />
          ) : blogs.length === 0 ? (
            <EmptyState
              icon={FileText}
              title="No articles yet"
              description="Check back soon for insights from our GIS team."
            />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map(b => <BlogCard key={b._id} blog={b} />)}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-12">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                    <button key={p} onClick={() => setPage(p)}
                      className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                        p === page ? 'bg-brand-500 text-white' : 'bg-white text-slate-400 hover:bg-white border border-slate-200'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <CTABanner
        title="Stay updated on geospatial intelligence"
        subtitle="Follow Digital Indian for the latest GIS insights, technology updates, and project showcases."
        primaryLabel="Subscribe to Updates"
        primaryTo="/contact"
      />
    </>
  )
}
