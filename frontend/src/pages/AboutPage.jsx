import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Target, Eye, CheckCircle } from 'lucide-react'
import { PageHero, CTABanner, SectionHeader } from '../components/ui/index.jsx'
import LiderShip from "../assates/ar.jpeg"
const values = [
  {
    title: 'Innovation with Purpose',
    desc: 'We design GIS and IT solutions that solve real business, governance, and operational challenges.',
  },
  {
    title: 'Client-Centred Thinking',
    desc: 'We understand your domain, workflows, and goals before building any solution.',
  },
  {
    title: 'Precision & Performance',
    desc: 'From spatial datasets to enterprise software, we focus on accuracy, speed, and reliability.',
  },
  {
    title: 'Technology for Growth',
    desc: 'We help organisations modernise with scalable digital platforms, automation, and intelligence.',
  },
  {
    title: 'Quality Assured',
    desc: 'Structured QA, testing, and delivery standards are applied across GIS and IT projects.',
  },
  {
    title: 'Long-Term Partnership',
    desc: 'We build lasting client relationships through dependable support and continuous improvement.',
  },
]

const team = [
  {
    name: 'Arjun Bose',
    role: 'Founder & CEO',
    bio: 'Leads Digital Indian with deep experience in geospatial strategy, enterprise transformation, and technology consulting.',
  },
  {
    name: 'Priya Chatterjee',
    role: 'Head of GIS & Remote Sensing',
    bio: 'Specialist in satellite analysis, land information systems, and geospatial project delivery.',
  },
  {
    name: 'Rahul Sharma',
    role: 'Head of Engineering',
    bio: 'Expert in full stack platforms, Web GIS architecture, cloud systems, and enterprise application engineering.',
  },
  {
    name: 'Anjali Dey',
    role: 'Head of AI & Data Solutions',
    bio: 'Focuses on GeoAI, analytics, automation, and intelligent decision-support systems.',
  },
]

const milestones = [
  {
    year: '2012',
    event: 'Founded in Kolkata with an early focus on cadastral mapping and geospatial consulting projects.',
  },
  {
    year: '2015',
    event: 'Expanded into Web GIS and enterprise mapping platforms for utilities, infrastructure, and governance.',
  },
  {
    year: '2018',
    event: 'Launched remote sensing and land information services for large-scale monitoring and planning projects.',
  },
  {
    year: '2020',
    event: 'Entered broader IT services with custom software development, cloud platforms, and mobile solutions.',
  },
  {
    year: '2022',
    event: 'Integrated AI, analytics, and automation into both GIS and enterprise digital transformation projects.',
  },
  {
    year: '2024',
    event: 'Positioned as a combined GIS and IT solutions company serving government, enterprises, and growing digital businesses.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Digital Indian — GIS & IT Solutions Company</title>
        <meta
          name="description"
          content="Learn about Digital Indian — a GIS and IT solutions company delivering geospatial systems, enterprise software, cloud platforms, AI, and digital transformation services."
        />
      </Helmet>

      <PageHero
        label="About"
        title="India’s trusted GIS and IT solutions partner"
        subtitle="From geospatial intelligence to full-scale digital platforms, we help organisations build smarter systems, stronger operations, and future-ready technology."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label">Our Story</p>
              <h2 className="section-title mb-5">Built at the intersection of GIS and IT</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Digital Indian was founded with a strong geospatial vision: to help organisations use
                  location intelligence for better planning, governance, and operations.
                </p>
                <p>
                  Over time, we expanded beyond GIS into wider IT services, enabling clients to not only
                  map and analyse their data, but also build the digital systems needed to act on it.
                  Today, we deliver GIS platforms, enterprise software, mobile applications, cloud
                  solutions, data systems, and AI-powered tools.
                </p>
                <p>
                  Our team works with government departments, infrastructure organisations, utilities,
                  enterprises, and modern digital businesses that need both domain intelligence and
                  dependable technology execution.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                ['150+', 'Projects Delivered'],
                ['80+', 'Clients Served'],
                ['12+', 'Years of Experience'],
                ['GIS + IT', 'Integrated Expertise'],
              ].map(([v, l]) => (
                <div
                  key={l}
                  className="p-6 bg-brand-50 border border-brand-100 rounded-xl text-center"
                >
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
              <p className="text-slate-600 leading-relaxed">
                To empower organisations with GIS and IT solutions that improve decision-making,
                operational efficiency, service delivery, and long-term digital growth.
              </p>
            </div>

            <div className="bg-brand-600 rounded-xl p-8">
              <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center mb-5">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-3">Vision</h3>
              <p className="text-brand-100 leading-relaxed">
                A future where every organisation can combine location intelligence, enterprise
                technology, and data-driven innovation to operate smarter and grow sustainably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeader label="Our Journey" title="From geospatial roots to digital transformation" center />
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

      {/* What We Do */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader label="Capabilities" title="What we deliver across GIS and IT" center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            {[
              'Web GIS and enterprise mapping platforms',
              'Remote sensing and spatial analytics',
              'Land information and utility mapping systems',
              'Full stack web and mobile app development',
              'Cloud, DevOps, and scalable backend solutions',
              'AI, GeoAI, and data intelligence platforms',
            ].map((item) => (
              <div key={item} className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader label="Values" title="What guides every engagement" center />
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
     <section className="py-20 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <SectionHeader 
      label="Leadership" 
      title="The team behind Digital Indian" 
      center 
    />

    <div className="mt-10 flex justify-center">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-4 md:p-6">

        <img
          src={LiderShip}
          alt="Digital Indian Organisation Structure"
          className="w-full max-w-5xl h-auto object-contain rounded-xl"
        />

      </div>
    </div>
  </div>
</section>

      <CTABanner
        title="Let’s build with GIS intelligence and IT innovation"
        subtitle="From mapping systems to enterprise platforms, we’re ready to support your next digital initiative."
        primaryLabel="Get in Touch"
        primaryTo="/contact"
        secondaryLabel="Our Services"
        secondaryTo="/services"
      />
    </>
  )
}