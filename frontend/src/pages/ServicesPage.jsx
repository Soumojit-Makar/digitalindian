import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Briefcase } from 'lucide-react'
import { serviceAPI } from '../services/api'
import { PageHero, ServiceCard, LoadingSpinner, EmptyState, CTABanner } from '../components/ui/index.jsx'

export default function ServicesPage() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    serviceAPI.getAll().then(r => setServices(r.data.services || [])).finally(() => setLoading(false))
  }, [])

  return (
    <>
      <Helmet>
        <title>GIS Services — Digital Indian</title>
        <meta name="description" content="Full range of GIS services from Digital Indian: consulting, Web GIS, remote sensing, spatial AI, land records, and urban planning." />
      </Helmet>
      <PageHero label="Services" title="End-to-end geospatial services"
        subtitle="From GIS strategy and consulting to full-stack Web GIS platforms, remote sensing analytics, and spatial AI."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {loading ? <LoadingSpinner /> : services.length === 0
            ? <EmptyState icon={Briefcase} title="Services coming soon" />
            : <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{services.map(s => <ServiceCard key={s._id} service={s} />)}</div>
          }
        </div>
      </section>
      <CTABanner title="Need a custom solution?" subtitle="Tell us your challenge and we'll design the right approach."
        primaryLabel="Discuss Your Requirements" primaryTo="/contact"
      />
    </>
  )
}
