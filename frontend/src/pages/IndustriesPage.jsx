import { Helmet } from 'react-helmet-async'
import { Building2, Tractor, Leaf, Zap, Truck, MapPin, Shield, Globe, Mountain, CheckCircle } from 'lucide-react'
import { PageHero, CTABanner } from '../components/ui/index.jsx'

const industries = [
  { icon: Building2, title: 'Urban Planning & Smart City', useCases: ['Master Plan GIS', 'Zoning & Land Use', 'Infrastructure Inventory', 'Citizen Portals', 'Traffic Analysis'], desc: 'Data-driven master planning, zoning management, and smart city decision support.',image: "https://cdn-icons-png.flaticon.com/512/190/190411.png"},
  { icon: Zap, title: 'Engineering & Construction', useCases: ['Site Selection', 'Corridor Planning', 'Progress Monitoring', 'BIM-GIS Integration', 'Environmental GIS'], desc: 'Site suitability, corridor analysis, and construction progress monitoring.',image: "https://cdn-icons-png.flaticon.com/512/190/190411.png" },
  { icon: Tractor, title: 'Agriculture', useCases: ['Crop Health Monitoring', 'Yield Prediction', 'Soil Analysis', 'Flood Risk', 'Subsidy Verification'], desc: 'Satellite-powered crop monitoring and yield prediction.',image: "https://cdn-icons-png.flaticon.com/512/190/190411.png" },
  { icon: Leaf, title: 'Environment', useCases: ['Deforestation Tracking', 'Watershed GIS', 'Biodiversity Mapping', 'Pollution Monitoring', 'Carbon GIS'], desc: 'Deforestation tracking, watershed analysis, and environmental impact assessment.',image: "https://cdn-icons-png.flaticon.com/512/190/190411.png" },
  { icon: Zap, title: 'Utilities & Energy', useCases: ['Network Digitization', 'Asset Management', 'Fault Analysis', 'Renewable Planning', 'Demand Forecasting'], desc: 'Precision GIS for electricity, water, gas, and telecom networks.',image: "https://cdn-icons-png.flaticon.com/512/190/190411.png" },
  { icon: Truck, title: 'Transportation', useCases: ['Road Surveys', 'Transit GIS', 'Freight Analysis', 'Accident Mapping', 'Port & Rail GIS'], desc: 'Route optimization, road condition assessment, and transit GIS.',image: "https://cdn-icons-png.flaticon.com/512/190/190411.png" },
  { icon: MapPin, title: 'Land & Property', useCases: ['Cadastral Digitization', 'Land Records', 'Property Valuation', 'Encroachment Detection', 'Land Acquisition'], desc: 'Land records modernization, cadastral mapping, and property valuation.',image: "https://cdn-icons-png.flaticon.com/512/190/190411.png" },
  { icon: Shield, title: 'Disaster Management', useCases: ['Risk Zone Mapping', 'Emergency Response', 'Flood Modeling', 'Damage Assessment', 'Evacuation Routes'], desc: 'Risk mapping, emergency response GIS, and post-disaster damage assessment.',image: "https://cdn-icons-png.flaticon.com/512/190/190411.png" },
  { icon: Globe, title: 'Government & Public Sector', useCases: ['Scheme Monitoring', 'Public Asset GIS', 'Panchayat GIS', 'Census Analysis', 'Policy Mapping'], desc: 'Citizen services, public infrastructure GIS, and scheme monitoring.',image: "https://cdn-icons-png.flaticon.com/512/190/190411.png" },
  { icon: Mountain, title: 'Mining & Natural Resources', useCases: ['Concession Mapping', 'Exploration GIS', 'Environmental Compliance', 'Overburden Analysis', 'Reclamation Tracking'], desc: 'Concession mapping, exploration support, and environmental compliance.',image: "https://cdn-icons-png.flaticon.com/512/190/190411.png" },
]

export default function IndustriesPage() {
  return (
    <>
      <Helmet><title>Industries — Digital Indian GIS</title></Helmet>
      <PageHero label="Industries" title="Deep expertise across 10 sectors"
        subtitle="We bring sector-specific GIS knowledge — not generic implementations — to every engagement."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Industries' }]}
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map(({ image, title, desc, useCases }) => (
              <div
                key={title}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-brand-200 transition-all duration-300"
              >

                {/* Image Section */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Title on Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-lg font-bold leading-tight">
                      {title}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5">
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {useCases.map((u) => (
                      <span
                        key={u}
                        className="text-xs px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full"
                      >
                        {u}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner title="Don't see your sector?" subtitle="We work across many more domains. Reach out to discuss your requirements."
        primaryLabel="Talk to Our Team" primaryTo="/contact"
      />
    </>
  )
}
