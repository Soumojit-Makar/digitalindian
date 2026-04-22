import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  MapPin,
  Globe,
  Satellite,
  Shield,
  Activity,
  Database,
  Award,
  TrendingUp,
  Building2,
  Layers,
  Zap,
} from "lucide-react";
import { serviceAPI, projectAPI, blogAPI } from "../services/api";
import {
  ServiceCard,
  ProjectCard,
  BlogCard,
  LoadingSpinner,
} from "../components/ui/index.jsx";
import EnquiryForm from "../components/forms/EnquiryForm";

function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let current = 0;
    const step = end / 80;

    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { val: 150, suf: "+", label: "Projects Delivered", icon: TrendingUp },
  { val: 95, suf: "+", label: "Enterprise & Govt Clients", icon: Building2 },
  { val: 12, suf: "+", label: "Years of Experience", icon: Award },
  { val: 25, suf: "+", label: "Solutions & Services", icon: Layers },
];

const sectors = [
  { label: "Government", icon: Shield },
  { label: "Enterprise IT", icon: Database },
  { label: "Urban Planning", icon: Building2 },
  { label: "Infrastructure", icon: Zap },
  { label: "Utilities", icon: Activity },
  { label: "Logistics", icon: Globe },
  { label: "Land & Property", icon: Layers },
  { label: "Agriculture", icon: MapPin },
  { label: "Environment", icon: Satellite },
  { label: "AI & Analytics", icon: TrendingUp },
];

const process = [
  {
    n: "1",
    title: "Discovery",
    desc: "We understand your business goals, workflows, and technical requirements.",
  },
  {
    n: "2",
    title: "Planning",
    desc: "We define the right roadmap, architecture, and delivery model.",
  },
  {
    n: "3",
    title: "Development",
    desc: "We build software, platforms, GIS systems, and integrations using agile delivery.",
  },
  {
    n: "4",
    title: "Deployment",
    desc: "We launch, test, train teams, and ensure smooth implementation.",
  },
  {
    n: "5",
    title: "Support",
    desc: "We provide ongoing maintenance, upgrades, and scale support.",
  },
];

export default function HomePage() {
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.allSettled([
      serviceAPI.getAll(),
      projectAPI.getAll({ featured: true, limit: 3 }),
      blogAPI.getAll({ featured: true, limit: 3 }),
    ])
      .then(([servicesRes, projectsRes, blogsRes]) => {
        if (servicesRes.status === "fulfilled") {
          setServices(servicesRes.value.data.services?.slice(0, 6) || []);
        }
        if (projectsRes.status === "fulfilled") {
          setProjects(projectsRes.value.data.projects || []);
        }
        if (blogsRes.status === "fulfilled") {
          setBlogs(blogsRes.value.data.blogs || []);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Helmet>
        <title>Digital Indian — IT, GIS & Digital Solutions</title>
        <meta
          name="description"
          content="Digital Indian delivers IT services, software development, GIS, geospatial intelligence, cloud solutions, AI systems, Web GIS, remote sensing, and enterprise digital transformation solutions."
        />
      </Helmet>

      {/* HERO */}
      <section className="bg-white pt-24 pb-14 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <span className="inline-block text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 border border-brand-100 px-3 py-1 rounded-full mb-5">
                ISO 9001:2015 Certified GIS & IT Company
              </span>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-5">
                Smart IT and
                <br />
                Geospatial Solutions
                <br />
                <span className="text-brand-500">for modern India.</span>
              </h1>

              <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-xl">
                Digital Indian helps businesses, government, and enterprises
                build modern software platforms, cloud-enabled systems, GIS
                applications, AI-powered tools, and digital infrastructure that
                turn data into decisions.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link to="/contact" className="btn-primary px-7 py-3">
                  Request a Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/projects" className="btn-outline px-7 py-3">
                  View Projects
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-100">
                {stats.map(({ val, suf, label }) => (
                  <div key={label}>
                    <p className="font-display text-3xl font-bold text-brand-600">
                      <Counter end={val} suffix={suf} />
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="hidden lg:block"
            >
              <div className="rounded-3xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 overflow-hidden shadow-sm">
                <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-slate-400 ml-2">
                    Digital Indian GIS Platform
                  </span>
                </div>

                <div className="p-4">
                  <svg
                    viewBox="0 0 420 260"
                    className="w-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {[0, 42, 84, 126, 168, 210, 252, 294, 336, 378, 420].map(
                      (x) => (
                        <line
                          key={`v${x}`}
                          x1={x}
                          y1="0"
                          x2={x}
                          y2="260"
                          stroke="#e2e8f0"
                          strokeWidth="1"
                        />
                      ),
                    )}
                    {[0, 52, 104, 156, 208, 260].map((y) => (
                      <line
                        key={`h${y}`}
                        x1="0"
                        y1={y}
                        x2="420"
                        y2={y}
                        stroke="#e2e8f0"
                        strokeWidth="1"
                      />
                    ))}

                    <polygon
                      points="50,30 160,20 220,70 200,140 120,160 50,120"
                      fill="#ddeeff"
                      stroke="#0077e6"
                      strokeWidth="1.5"
                      strokeOpacity="0.6"
                    />
                    <polygon
                      points="230,30 360,25 400,100 370,160 280,170 220,110"
                      fill="#d0f5f1"
                      stroke="#00a896"
                      strokeWidth="1.5"
                      strokeOpacity="0.6"
                    />
                    <polygon
                      points="70,175 190,165 230,230 150,255 60,240"
                      fill="#ddeeff"
                      stroke="#0077e6"
                      strokeWidth="1"
                      strokeOpacity="0.4"
                    />

                    <path
                      d="M 0,130 Q 100,110 210,130 Q 310,150 420,130"
                      stroke="#0077e6"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.5"
                    />
                    <path
                      d="M 210,0 Q 200,65 210,130 Q 220,195 210,260"
                      stroke="#00a896"
                      strokeWidth="1.5"
                      fill="none"
                      opacity="0.4"
                    />

                    {[
                      [110, 90],
                      [295, 90],
                      [150, 205],
                      [330, 110],
                      [210, 130],
                    ].map(([cx, cy], i) => (
                      <g key={i}>
                        <circle
                          cx={cx}
                          cy={cy}
                          r="10"
                          fill="rgba(0,119,230,0.12)"
                        />
                        <circle
                          cx={cx}
                          cy={cy}
                          r="5"
                          fill="rgba(0,119,230,0.4)"
                        />
                        <circle cx={cx} cy={cy} r="3" fill="#0077e6" />
                      </g>
                    ))}

                    <circle cx="210" cy="130" r="5" fill="#0077e6" />
                    <circle
                      cx="210"
                      cy="130"
                      r="15"
                      fill="none"
                      stroke="#0077e6"
                      strokeWidth="1.5"
                      opacity="0.5"
                    >
                      <animate
                        attributeName="r"
                        from="10"
                        to="25"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        from="0.6"
                        to="0"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </svg>
                </div>

                <div className="grid grid-cols-3 divide-x divide-slate-200 border-t border-slate-200">
                  {[
                    ["Layers", "48"],
                    ["Parcels", "1.2M"],
                    ["Updates", "Live"],
                  ].map(([label, value]) => (
                    <div key={label} className="px-4 py-3 text-center bg-white">
                      <p className="font-display font-bold text-brand-600 text-xl">
                        {value}
                      </p>
                      <p className="text-xs text-slate-400">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TECH STRIP */}
      <section className="bg-slate-50 border-y border-slate-100 py-5">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-xs text-slate-400 font-semibold uppercase tracking-widest mb-4">
            Technologies We Work With
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {[
              "React.js",
              "Node.js",
              "MongoDB",
              "PostgreSQL",
              "AWS",
              "Docker",
              "Esri ArcGIS",
              "QGIS",
              "Mapbox GL",
              "PostGIS",
              "GeoServer",
              "Google Earth Engine",
            ].map((tech) => (
              <span key={tech} className="text-sm text-slate-500 font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10">
            <div>
              <p className="section-label">Our Services</p>
              <h2 className="section-title">What we deliver</h2>
            </div>
            <Link
              to="/services"
              className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              All services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service) => (
                <ServiceCard key={service._id} service={service} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SECTORS */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="section-label">Sectors</p>
            <h2 className="section-title">Industries we serve</h2>
            <p className="section-sub mx-auto mt-3">
              Industry-focused expertise across IT systems, GIS platforms, cloud
              solutions, and enterprise transformation.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
            {sectors.map(({ label, icon: Icon }) => (
              <Link
                key={label}
                to="/industries"
                className="flex flex-col items-center gap-2.5 p-4 bg-white border border-slate-200 rounded-xl hover:border-brand-200 hover:shadow-sm transition-all text-center group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center group-hover:bg-brand-500 transition-colors">
                  <Icon className="w-5 h-5 text-brand-500 group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs text-slate-600 font-medium group-hover:text-brand-600 transition-colors">
                  {label}
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link to="/industries" className="btn-outline">
              Explore Industries
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      {projects.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10">
              <div>
                <p className="section-label">Case Studies</p>
                <h2 className="section-title">Our work</h2>
              </div>
              <Link
                to="/projects"
                className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                All projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PROCESS */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-label">How We Work</p>
            <h2 className="section-title">Our delivery process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map(({ n, title, desc }) => (
              <div key={n} className="text-center">
                <div className="w-14 h-14 rounded-full bg-brand-500 text-white flex items-center justify-center mx-auto mb-4 font-display font-bold text-xl shadow-sm">
                  {n}
                </div>
                <h4 className="font-display font-semibold text-slate-900 mb-1.5">
                  {title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      {blogs.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10">
              <div>
                <p className="section-label">Insights</p>
                <h2 className="section-title">From our team</h2>
              </div>
              <Link
                to="/insights"
                className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                All articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {blogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CONTACT */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="section-label">Get in Touch</p>
              <h2 className="section-title mb-4">Start your project</h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Tell us about your IT, software, cloud, AI, or geospatial
                challenge. Our team will review your requirement and respond
                within 1–2 business days.
              </p>

              <div className="space-y-2.5 mb-8">
                {[
                  "Custom Software & Web Platforms",
                  "Cloud, DevOps & System Modernization",
                  "GIS, Mapping & Spatial Intelligence",
                  "Enterprise, Government & Commercial Solutions",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  ["1–2 Days", "Response time"],
                  ["94%", "On-time delivery"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="p-4 bg-white border border-slate-200 rounded-xl"
                  >
                    <p className="font-display font-bold text-2xl text-brand-600">
                      {value}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
              <h3 className="font-display font-bold text-slate-900 text-lg mb-1">
                Send an Enquiry
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                We respond within 1–2 business days.
              </p>
              <EnquiryForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER BRIDGE CTA */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 py-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-100px] top-[-80px] h-64 w-64 rounded-full bg-brand-500/10 blur-3xl" />
          <div className="absolute right-[-80px] bottom-[-100px] h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300 mb-5">
            Ready to work with us
          </span>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">
            Let’s build your next
            <span className="text-brand-400"> digital solution</span>
          </h2>

          <p className="max-w-2xl mx-auto text-slate-400 leading-7 mb-8">
            From enterprise GIS platforms to software systems, cloud solutions,
            and AI-driven workflows — Digital Indian helps organisations scale
            with confidence.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-700"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
