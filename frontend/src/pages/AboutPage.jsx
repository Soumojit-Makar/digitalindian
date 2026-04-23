import { Helmet } from "react-helmet-async";
import {
  Target,
  Eye,
  CheckCircle,
  Globe,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { PageHero, CTABanner, SectionHeader } from "../components/ui/index.jsx";
import LiderShip from "../assates/ar.jpeg";
import About from "../assates/about.jpeg";

const milestones = [
  {
    year: "2015",
    event:
      "Expanded into Web GIS and enterprise mapping platforms for utilities, infrastructure, and governance.",
  },
  {
    year: "2016",
    event:
      "Strengthened GIS capabilities with large-scale spatial data creation and database management solutions.",
  },
  {
    year: "2017",
    event:
      "Delivered multiple government and enterprise GIS projects focused on mapping, land records, and analytics.",
  },
  {
    year: "2018",
    event:
      "Launched remote sensing and land information services for large-scale monitoring and planning projects.",
  },
  {
    year: "2019",
    event:
      "Enhanced spatial analytics and introduced data-driven decision-making solutions for clients.",
  },
  {
    year: "2020",
    event:
      "Expanded into IT services with custom software development, cloud platforms, and mobile applications.",
  },
  {
    year: "2021",
    event:
      "Built scalable web platforms and integrated GIS systems with enterprise applications.",
  },
  {
    year: "2022",
    event:
      "Integrated AI, analytics, and automation into GIS and enterprise digital transformation projects.",
  },
  {
    year: "2023",
    event:
      "Strengthened cloud infrastructure and deployed advanced Web GIS dashboards and analytics platforms.",
  },
  {
    year: "2024",
    event:
      "Positioned as a combined GIS and IT solutions company serving government, enterprises, and digital businesses.",
  },
  {
    year: "2025",
    event:
      "Focused on scalable microservices architecture and high-performance enterprise solutions.",
  },
  {
    year: "2026",
    event:
      "Expanded into advanced GeoAI, microservices-based platforms, and intelligent digital ecosystems for enterprise and government transformation.",
  },
];

const stats = [
  ["150+", "Projects Delivered"],
  ["95+", "Clients Served"],
  ["12+", "Years of Experience"],
  ["GIS + IT", "Integrated Expertise"],
];

const whyChooseUs = [
  "Strong expertise in GIS and IT integration",
  "Proven experience in handling large-scale projects",
  "Skilled and dedicated technical team",
  "Focus on quality, accuracy, and client satisfaction",
  "Commitment to innovation and continuous improvement",
  "Reliable support and future-ready delivery",
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Digital Indian — GIS & IT Solutions Company</title>
        <meta
          name="description"
          content="DigitalIndian Business Solutions Pvt Ltd delivers advanced GIS, geospatial intelligence, software development, cloud solutions, and enterprise digital transformation services."
        />
      </Helmet>

      <PageHero
        label=""
        title="Empowering Decisions with Geospatial Intelligence & Digital Innovation"
        subtitle=""
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About" }]}
        img={About}
      />

      {/* Overview */}
      <section className="py-2 md:py-2 bg-white">
        <div className="max-w-[1450px] mx-auto px-3 sm:px-4">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 items-start">
            <div>
              {/* <p className="section-label">About Us</p> */}
              <h2 className="section-title text-2xl md:text-2xl font-bold mb-4">
                About Us
              </h2>

              <div className="space-y-4 text-slate-600 leading-8">
                <p>
                  DigitalIndian Business Solutions Pvt Ltd is a forward-thinking
                  technology company delivering cutting-edge GIS and IT
                  solutions that empower organizations to operate smarter and
                  scale faster.
                </p>
                <p>
                  At the core of our work lies the seamless integration of
                  geospatial intelligence and digital innovation—transforming
                  complex data into actionable insights and high-performance
                  systems.
                </p>
                <p>
                  From advanced mapping and spatial analytics to custom software
                  and enterprise solutions, we help clients unlock the true
                  value of technology.
                </p>
                <p>
                  Driven by precision, innovation, and a commitment to
                  excellence, we partner with governments and businesses to
                  build intelligent, future-ready ecosystems that enhance
                  efficiency, transparency, and growth.
                </p>
              </div>

              {/* <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50 px-5 py-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
                  Tagline
                </p>
                <p className="mt-2 text-lg font-medium text-slate-800">
                  “Empowering Decisions with Geospatial Intelligence & Digital
                  Innovation.”
                </p>
              </div> */}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-brand-100 bg-brand-50 p-5 text-center"
                >
                  <p className="mb-1 font-display text-3xl md:text-4xl font-bold text-brand-600">
                    {value}
                  </p>
                  <p className="text-sm leading-6 text-slate-600">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-2 md:py-2 pt-6 bg-slate-50">
        <div className="max-w-[1450px] mx-auto px-3 sm:px-4">
          <SectionHeader label="" title="What We Do" center />
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-7">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-100 bg-brand-50">
                  <Globe className="w-5 h-5 text-brand-500" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  GIS & Geospatial Services
                </h3>
              </div>

              <div className="space-y-3">
                {[
                  "High-accuracy mapping and spatial data creation",
                  "Satellite imagery analysis and remote sensing",
                  "Land records digitization and spatial database management",
                  "Web GIS and dashboard development",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-500" />
                    <p className="text-sm leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-7">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-100 bg-brand-50">
                  <Zap className="w-5 h-5 text-brand-500" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  IT & Digital Solutions
                </h3>
              </div>

              <div className="space-y-3">
                {[
                  "Custom software and web application development",
                  "Mobile app development",
                  "Cloud-based solutions and system integration",
                  "Data analytics and automation tools",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-500" />
                    <p className="text-sm leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Foundation */}
      <section className="py-2 md:py-2 pt-6 bg-slate-50">
        <div className="max-w-[1500px] mx-auto px-3 sm:px-4">
          <SectionHeader
            label=""
            title="Mission, Vision, Approach & Commitment"
            center
          />

          <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            <div className="rounded-2xl p-6 bg-white border border-blue-100 hover:shadow-md transition hover:-translate-y-1">
              <Target className="w-6 h-6 mb-4 text-blue-600" />
              <h3 className="font-display text-lg font-bold mb-2 text-slate-900">
                Mission
              </h3>
              <p className="text-sm leading-6 text-slate-600">
                To empower organizations with intelligent geospatial and digital
                solutions that drive efficiency, innovation, and sustainable
                growth.
              </p>
            </div>

            <div className="rounded-2xl p-6 bg-white border border-indigo-100 hover:shadow-md transition hover:-translate-y-1">
              <Eye className="w-6 h-6 mb-4 text-indigo-600" />
              <h3 className="font-display text-lg font-bold mb-2 text-slate-900">
                Vision
              </h3>
              <p className="text-sm leading-6 text-slate-600">
                To be a trusted leader in GIS and IT services, recognized for
                delivering impactful, technology-driven solutions that shape
                smarter communities and businesses.
              </p>
            </div>

            <div className="rounded-2xl p-6 bg-white border border-orange-100 hover:shadow-md transition hover:-translate-y-1">
              <Zap className="w-6 h-6 mb-4 text-orange-500" />
              <h3 className="font-display text-lg font-bold mb-2 text-slate-900">
                Approach
              </h3>
              <ul className="space-y-1 text-sm text-slate-600 leading-6">
                <li>• Understanding unique business challenges</li>
                <li>• Designing scalable and future-ready solutions</li>
                <li>• Ensuring accuracy, quality, and timely delivery</li>
                <li>• Providing continuous support and innovation</li>
              </ul>
            </div>

            <div className="rounded-2xl p-6 bg-white border border-emerald-100 hover:shadow-md transition hover:-translate-y-1">
              <ShieldCheck className="w-6 h-6 mb-4 text-emerald-600" />
              <h3 className="font-display text-lg font-bold mb-2 text-slate-900">
                Commitment
              </h3>
              <p className="text-sm leading-6 text-slate-600">
                We are committed to building solutions that not only solve
                today’s challenges but also prepare organizations for the
                future—leveraging the power of data, location intelligence, and
                technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-2 md:py-2 pt-6 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-3 sm:px-4">
          <SectionHeader label="" title="Our Journey" center />

          <div className="relative mt-8">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-brand-100" />
            <div className="space-y-7">
              {milestones.map(({ year, event }) => (
                <div key={year} className="relative pl-12">
                  <p className="mb-1 font-display font-bold text-brand-600">
                    {year}
                  </p>
                  <p className="text-sm leading-7 text-slate-600">{event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-2 md:py-2 pt-6 bg-white">
        <div className="max-w-[1450px] mx-auto  sm:px-4">
          <SectionHeader label="" title="Why Choose Us" center />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-2 ">
            {whyChooseUs.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-2"
              >
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-500" />
                  <p className="text-sm leading-7 text-slate-600">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-2 md:py-2 bg-white">
        <div className="max-w-[1500px] mx-auto px-3 sm:px-4">
          <SectionHeader
            label=""
            title="The Team Behind Digital Indian"
            center
          />

          <div className="mt-8 flex justify-center">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-6 shadow-sm">
              <img
                src={LiderShip}
                alt="Digital Indian Organisation Structure"
                className="h-auto w-full max-w-5xl rounded-xl object-contain"
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
  );
}
