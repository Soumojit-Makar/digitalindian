import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Target, Eye, CheckCircle } from 'lucide-react'
import { PageHero, CTABanner, SectionHeader } from '../components/ui/index.jsx'

const values = [
  { title: 'Precision First',      desc: 'Every map and dataset upholds the accuracy standards that real decisions demand.' },
  { title: 'Client-Centred',       desc: 'We understand your domain before designing any solution.' },
  { title: 'National Purpose',     desc: 'Our work supports India\'s infrastructure, planning, and governance goals.' },
  { title: 'Knowledge Transfer',   desc: 'We build in-house GIS capability within your organisation.' },
  { title: 'Quality Assured',      desc: 'ISO-aligned workflows and structured QA on every engagement.' },
  { title: 'Long-Term Partner',    desc: 'We build relationships — not one-off deliverables.' },
]

const team = [
  { name: 'Arjun Bose',        role: 'Founder & CEO',          bio: '18+ years in GIS consulting and geospatial project delivery.' },
  { name: 'Priya Chatterjee',  role: 'Head of Remote Sensing',  bio: 'Specialist in multi-spectral analysis and agricultural GIS.' },
  { name: 'Rahul Sharma',      role: 'Head of Engineering',     bio: 'Expert in Web GIS, spatial databases, and cloud architecture.' },
  { name: 'Anjali Dey',        role: 'Head of GeoAI',           bio: 'Machine learning researcher focused on spatial AI.' },
]

const milestones = [
  { year: '2012', event: 'Founded in Kolkata — first cadastral mapping project for West Bengal government.' },
  { year: '2015', event: 'Launched Web GIS division; delivered first enterprise platform for a utility company.' },
  { year: '2018', event: 'Started remote sensing practice; first large-scale agricultural monitoring project.' },
  { year: '2020', event: 'GeoAI team established; deep learning integrated into satellite image processing.' },
  { year: '2022', event: 'Reached 100+ projects across 8 states; offices in Hyderabad and Delhi.' },
  { year: '2024', event: 'Mobile GIS platform launched; 500K+ hectares mapped nationwide.' },
]

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Digital Indian — GIS Company</title>
        <meta name="description" content="About Digital Indian — our mission, team, and 12-year journey building GIS solutions for India." />
      </Helmet>

      <PageHero label="About" title="India's dedicated GIS partner"
        subtitle="Founded in Kolkata, we have spent over a decade building geospatial systems for government, infrastructure, and enterprise."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label">Our Story</p>
              <h2 className="section-title mb-5">A GIS-first organisation</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>Digital Indian was built on one conviction: India's organisations needed a GIS partner who understood both the technology and the domain.</p>
                <p>Starting with state government cadastral projects in West Bengal, we have grown into a national geospatial consultancy — Web GIS, remote sensing, mobile field solutions, land information systems, and spatial AI.</p>
                <p>Our 80+ person team serves government departments, infrastructure companies, utilities, and development organisations across India.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[['150+','Projects Delivered'],['80+','Government Clients'],['12+','Years in GIS'],['8','States Covered']].map(([v,l]) => (
                <div key={l} className="p-6 bg-brand-50 border border-brand-100 rounded-xl text-center">
                  <p className="font-display font-bold text-4xl text-brand-600 mb-1">{v}</p>
                  <p className="text-sm text-slate-600">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <div className="w-11 h-11 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center mb-5">
                <Target className="w-5 h-5 text-brand-500" />
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-900 mb-3">Mission</h3>
              <p className="text-slate-600 leading-relaxed">To empower India's government bodies and enterprises with geospatial intelligence that enables faster, more accurate, and more confident decisions.</p>
            </div>
            <div className="bg-brand-600 rounded-xl p-8">
              <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center mb-5">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-3">Vision</h3>
              <p className="text-brand-100 leading-relaxed">A future where every Indian organisation has access to location intelligence that drives operational efficiency, transparent governance, and sustainable development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeader label="Our Journey" title="12 years of geospatial impact" center />
          <div className="relative mt-10">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-brand-100" />
            <div className="space-y-8">
              {milestones.map(({ year, event }) => (
                <div key={year} className="flex gap-6 pl-10 relative">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {year.slice(2)}
                  </div>
                  <div>
                    <p className="font-display font-bold text-brand-600 mb-1">{year}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader label="Values" title="What guides every project" center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            {values.map(({ title, desc }) => (
              <div key={title} className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-slate-900 mb-1">{title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader label="Leadership" title="The team behind Digital Indian" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map(({ name, role, bio }) => (
              <div key={name} className="bg-white border border-slate-200 rounded-xl p-5 text-center">
                <div className="w-14 h-14 rounded-full bg-brand-500 flex items-center justify-center mx-auto mb-4 text-white font-display font-bold text-xl">
                  {name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-display font-semibold text-slate-900">{name}</h3>
                <p className="text-brand-600 text-xs font-semibold mb-2">{role}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Work with India's GIS specialists" subtitle="Let's discuss your location data challenge."
        primaryLabel="Get in Touch" primaryTo="/contact" secondaryLabel="Our Services" secondaryTo="/services"
      />
    </>
  )
}
