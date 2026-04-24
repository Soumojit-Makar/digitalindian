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
import GIS_GEOSPATIAL_SERVICES from "../assates/gis-&-geospatial-services.png";
import IT_DIGITAL_SOLUTIONS from "../assates/it-&-digital-solutions.png";
import Approach from "../assates/Approach.png";
import Commitment from "../assates/Commitment.png";
import Vision from "../assates/vision.png";
import Mission from "../assates/mission.png";
import Jun from "../assates/jurn.png";
import CEO from "../assates/ceo.png";
import Manager from "../assates/manager.png"
import ITENG from '../assates/ITENG.png'
import CTO from '../assates/cto.png'
import BusinessHead from '../assates/BUS.png'
const team = [
  {
    name: "S",
    role: "Founder & CEO",
    img: CEO,
    bio: "Leads overall strategy, business growth, and enterprise GIS & IT solutions with extensive industry experience.",
  },
  {
    name: "P",
    role: "Chief Technology Officer (CTO)",
    img: CTO,
    bio: "Drives technology architecture, cloud systems, and scalable enterprise platforms across GIS and IT domains.",
  },
  {
    name: "S",
    role: "Head of GIS & Remote Sensing",
    img: Manager,
    bio: "Expert in spatial data analysis, satellite imagery, and large-scale geospatial project execution.",
  },
  {
    name: "S",
    role: "Head of IT & Engineering",
    img: ITENG,
    bio: "Specialist in full-stack development, Web GIS platforms, and high-performance system integration.",
  },
  {
  name: "J",
  role: "Head of Global Operations",
  img: BusinessHead,
  bio: "Leads global operations, strategic partnerships, and cross-regional execution, ensuring efficient delivery and scalable growth across GIS and IT services.",
}
];

const testimonials = [
  {
    name: "Rajiv Mehta",
    role: "Project Director · Infrastructure & Urban Planning",
    text: "Digital Indian delivered highly accurate GIS mapping and spatial analytics for our infrastructure project. Their ability to handle large-scale geospatial data and provide actionable insights significantly improved our planning and execution efficiency.",
  },
  {
    name: "Ananya Roy",
    role: "Senior Manager · Government GIS Program",
    text: "Their expertise in land records digitization and Web GIS platforms helped us modernize our entire system. The dashboards were intuitive, scalable, and extremely reliable for decision-making at multiple administrative levels.",
  },
  {
    name: "Vikram Singh",
    role: "CTO · Enterprise Technology Solutions",
    text: "We partnered with Digital Indian for integrating GIS with our enterprise applications. Their team delivered a robust, cloud-based solution with seamless performance and excellent scalability and high availability.",
  },
];

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
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition">
              {/* Image Section */}
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={GIS_GEOSPATIAL_SERVICES}
                  alt="GIS Services"
                  className="w-full h-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-7">
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                  GIS & Geospatial Services
                </h3>

                <div className="space-y-3">
                  {[
                    "High-accuracy mapping and spatial data creation",
                    "Satellite imagery analysis and remote sensing",
                    "Land records digitization and spatial database management",
                    "Web GIS and dashboard development",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 text-accent-500" />
                      <p className="text-lg leading-7 text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition">
              {/* Image Section */}
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={IT_DIGITAL_SOLUTIONS}
                  alt="IT Solutions"
                  className="w-full h-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-7">
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                  IT & Digital Solutions
                </h3>

                <div className="space-y-3">
                  {[
                    "Custom software and web application development",
                    "Mobile app development",
                    "Cloud-based solutions and system integration",
                    "Data analytics and automation tools",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 text-accent-500" />
                      <p className="text-lg leading-7 text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
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
            <div className="rounded-2xl p-2 bg-white border border-blue-100 hover:shadow-md transition hover:-translate-y-1">
              <div className=" w-full overflow-hidden">
                <img
                  src={Mission}
                  alt="Mission"
                  className="w-full h-full object-cover transition duration-500 hover:scale-105 rounded-lg"
                />
              </div>

              <h3 className="font-display text-xl font-bold mb-2 text-slate-900 text-center">
                Mission
              </h3>
              <p className="text-lg leading-6 text-slate-600">
                To empower organizations with intelligent geospatial and digital
                solutions that drive efficiency, innovation, and sustainable
                growth.
              </p>
            </div>

            <div className="rounded-2xl p-2 bg-white border border-indigo-100 hover:shadow-md transition hover:-translate-y-1">
              <div className=" w-full overflow-hidden">
                <img
                  src={Vision}
                  alt="Vision"
                  className="w-full h-full object-cover transition duration-500 hover:scale-105  rounded-lg"
                />
              </div>

              <h3 className="font-display text-xl font-bold mb-2 text-slate-900  text-center">
                Vision
              </h3>
              <p className="text-lg leading-6 text-slate-600">
                To be a trusted leader in GIS and IT services, recognized for
                delivering impactful, technology-driven solutions that shape
                smarter communities and businesses.
              </p>
            </div>

            <div className="rounded-2xl p-2 bg-white border border-orange-100 hover:shadow-md transition hover:-translate-y-1">
              <div className=" w-full overflow-hidden">
                <img
                  src={Approach}
                  alt="Approach"
                  className="w-full h-full object-cover transition duration-500 hover:scale-105  rounded-lg"
                />
              </div>

              <h3 className="font-display text-xl font-bold mb-2 text-slate-900  text-center">
                Approach
              </h3>
              <p className="text-lg leading-6 text-slate-600">
                Understanding unique business challenges. Designing scalable and
                future-ready solutions. Ensuring accuracy, quality, and timely
                delivery. Providing continuous support and innovation.
              </p>
            </div>

            <div className="rounded-2xl p-2 bg-white border border-emerald-100 hover:shadow-md transition hover:-translate-y-1">
              <div className=" w-full overflow-hidden">
                <img
                  src={Commitment}
                  alt="Commitment"
                  className="w-full h-full object-cover transition duration-500 hover:scale-105 rounded-lg"
                />
              </div>

              <h3 className="font-display text-xl font-bold mb-2 text-slate-900 text-center">
                Commitment
              </h3>
              <p className="text-lg leading-6 text-slate-600">
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
      {/* Journey */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <img
              src={Jun}
              alt="Journey Infographic"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      {/* Why Choose Us → Now Testimonials */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-[1450px] mx-auto px-3 sm:px-4">
          <SectionHeader label="" title="Why Choose Us" center />

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Stars */}
                <div className="text-yellow-400 text-lg mb-4 tracking-widest">
                  ★★★★★
                </div>

                {/* Text */}
                <p className="text-base leading-7 text-slate-600 italic">
                  "{item.text}"
                </p>

                {/* Divider */}
                <div className="my-5 h-px bg-slate-100" />

                {/* User */}
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-semibold">
                    {item.name[0]}
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {item.name}
                    </h4>
                    <p className="text-sm text-slate-400">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
     <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <SectionHeader
      label="Leadership"
      title="The team behind Digital Indian"
    />

    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {team.map(({ name, role, bio, img }) => (
        <div
          key={name}
          className="group relative rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
        >
          {/* IMAGE / AVATAR */}
          {img ? (
            <img
              src={img}
              alt={name}
              className="w-60 h-48 object-cover group-hover:scale-110 transition duration-500"
            />
          ) : (
            <div className="w-60 h-48 flex items-center justify-center bg-brand-500 text-white text-4xl font-bold">
              {name.charAt(0)}
            </div>
          )}

          {/* OVERLAY (HOVER) */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center px-4">
            <h3 className="text-white font-semibold text-lg mb-1">
              {name}
            </h3>
            <p className="text-brand-300 text-xs font-semibold mb-2">
              {role}
            </p>
            <p className="text-white/80 text-xs leading-relaxed">
              {bio}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Leadership */}
      {/* <section className="py-2 md:py-2 bg-white">
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map(({ name, role }) => {
              <div
                key={name}
                className="bg-white border border-slate-200 rounded-xl p-5 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-brand-500 flex items-center justify-center mx-auto mb-4 text-white font-display font-bold text-xl">
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="font-display font-semibold text-slate-900">
                  {name}
                </h3>
                <p className="text-brand-600 text-xs font-semibold mb-2">
                  {role}
                </p>
              </div>;
            })}
          </div>
        </div>
      </section> */}

      {/* <CTABanner
        title="Let’s build with GIS intelligence and IT innovation"
        subtitle="From mapping systems to enterprise platforms, we’re ready to support your next digital initiative."
        primaryLabel="Get in Touch"
        primaryTo="/contact"
        secondaryLabel="Our Services"
        secondaryTo="/services"
      /> */}
    </>
  );
}
