import { Helmet } from 'react-helmet-async'
import { Building2, Tractor, Leaf, Zap, Truck, MapPin, Shield, Globe, Mountain, CheckCircle } from 'lucide-react'
import { PageHero, CTABanner } from '../components/ui/index.jsx'

const industries = [
  { icon: Building2, title: 'Urban Planning & Smart City', useCases: ['Master Plan GIS','Zoning & Land Use','Infrastructure Inventory','Citizen Portals','Traffic Analysis'], desc: 'Data-driven master planning, zoning management, and smart city decision support.' },
  { icon: Zap, title: 'Engineering & Construction', useCases: ['Site Selection','Corridor Planning','Progress Monitoring','BIM-GIS Integration','Environmental GIS'], desc: 'Site suitability, corridor analysis, and construction progress monitoring.' },
  { icon: Tractor, title: 'Agriculture', useCases: ['Crop Health Monitoring','Yield Prediction','Soil Analysis','Flood Risk','Subsidy Verification'], desc: 'Satellite-powered crop monitoring and yield prediction.' },
  { icon: Leaf, title: 'Environment', useCases: ['Deforestation Tracking','Watershed GIS','Biodiversity Mapping','Pollution Monitoring','Carbon GIS'], desc: 'Deforestation tracking, watershed analysis, and environmental impact assessment.' },
  { icon: Zap, title: 'Utilities & Energy', useCases: ['Network Digitization','Asset Management','Fault Analysis','Renewable Planning','Demand Forecasting'], desc: 'Precision GIS for electricity, water, gas, and telecom networks.' },
  { icon: Truck, title: 'Transportation', useCases: ['Road Surveys','Transit GIS','Freight Analysis','Accident Mapping','Port & Rail GIS'], desc: 'Route optimization, road condition assessment, and transit GIS.' },
  { icon: MapPin, title: 'Land & Property', useCases: ['Cadastral Digitization','Land Records','Property Valuation','Encroachment Detection','Land Acquisition'], desc: 'Land records modernization, cadastral mapping, and property valuation.' },
  { icon: Shield, title: 'Disaster Management', useCases: ['Risk Zone Mapping','Emergency Response','Flood Modeling','Damage Assessment','Evacuation Routes'], desc: 'Risk mapping, emergency response GIS, and post-disaster damage assessment.' },
  { icon: Globe, title: 'Government & Public Sector', useCases: ['Scheme Monitoring','Public Asset GIS','Panchayat GIS','Census Analysis','Policy Mapping'], desc: 'Citizen services, public infrastructure GIS, and scheme monitoring.' },
  { icon: Mountain, title: 'Mining & Natural Resources', useCases: ['Concession Mapping','Exploration GIS','Environmental Compliance','Overburden Analysis','Reclamation Tracking'], desc: 'Concession mapping, exploration support, and environmental compliance.' },
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
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map(({ icon: Icon, title, desc, useCases }) => (
              <div key={title} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-brand-200 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-brand-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-slate-900 text-lg mb-1">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {useCases.map(u => (
                        <span key={u} className="text-xs px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">{u}</span>
                      ))}
                    </div>
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
