import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, useInView, AnimatePresence } from "framer-motion";
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { serviceAPI, projectAPI, blogAPI } from "../services/api";
import {
  ServiceCard,
  ProjectCard,
  BlogCard,
  LoadingSpinner,
} from "../components/ui/index.jsx";
import EnquiryForm from "../components/forms/EnquiryForm";

import HeroIT from "../assates/hero-it.png";
import HeroGIS from "../assates/hero-gis.png";
// Partner logos
import Accenture from "../assates/Accenture.png";
import Amazon from "../assates/Amazon.png";
import Assocham from "../assates/ASSOCHAM.png";
import AxisBank from "../assates/Axis-Bank.png";
import BajaFinance from "../assates/Baja-Finance.png";
import BandhanBank from "../assates/bandhan-bank-logo.png";
import Capgemini from "../assates/Capgemini.png";
import CII from "../assates/CII.png";
import Citigroup from "../assates/Citigroup.png";
import Cognizant from "../assates/Cognizant.png";
import Deloitte from "../assates/Deloitte.png";
import EY from "../assates/EY.png";
import GoldmanSachs from "../assates/Goldman-Sachs.png";
import Google from "../assates/google-logo.png";
import HCL from "../assates/HCL.png";
import HDFC from "../assates/HDFC.png";
import HSBC from "../assates/HSBC-Holdings.png";
import IBM from "../assates/IBM.png";
import ICICI from "../assates/ICICI-Bank.png";
import Infosys from "../assates/Infosys_Logo.png";
import JioFinancial from "../assates/Jio-Financial-Services.png";
import JPMorgan from "../assates/JPMorgan-Chase.png";
import Kotak from "../assates/Kotak-Mahindra-Bank-Limited.png";
import KPMG from "../assates/KPMG.png";
import Microsoft from "../assates/Microsoft.png";
import MorganStanley from "../assates/Morgan-Stanley.png";
import NASSCOM from "../assates/nasscom.png";
import Oracle from "../assates/Oracle-logo.png";
import PcW from "../assates/PwC.png";
import SkillIndia from "../assates/skill-india.png";
import StartUpindian from "../assates/Startupindian.png";
import TCS from "../assates/TCS.png";
import TechMahindra from "../assates/tech-mahindra.png";
import Wipro from "../assates/Wipro-logo.png";

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

const HERO_IMAGES = [
  {
    image: Accenture,
  },
  {
    image: Amazon,
  },
  {
    image: Assocham,
  },
  {
    image: Capgemini,
  },
  {
    image: CII,
  },
  {
    image: Cognizant,
  },
  {
    image: Google,
  },
  {
    image: HCL,
  },
  {
    image: IBM,
  },
  {
    image: Infosys,
  },
  {
    image: Microsoft,
  },
  {
    image: Oracle,
  },
  {
    image: TCS,
  },
  {
    image: Wipro,
  },
  {
    image: NASSCOM,
  },
  {
    image: SkillIndia,
  },
  {
    image: StartUpindian,
  },
  {
    image: AxisBank,
  },
  {
    image: BajaFinance,
  },
  {
    image: BandhanBank,
  },
  {
    image: Citigroup,
  },
  {
    image: Deloitte,
  },
  {
    image: EY,
  },
  {
    image: GoldmanSachs,
  },
  {
    image: HDFC,
  },
  {
    image: HSBC,
  },
  {
    image: ICICI,
  },
  {
    image: JioFinancial,
  },
  {
    image: JPMorgan,
  },
  {
    image: Kotak,
  },
  {
    image: KPMG,
  },
  {
    image: MorganStanley,
  },
  {
    image: PcW,
  },
  {
    image: TechMahindra,
  },
];
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

const heroSlides = [
  {
    id: 1,
    image: HeroIT,
    // badge: "Digital Transformation & Software Engineering",
    title: "Smart IT Solutions",
    highlight: "For Modern Businesses.",
    description:
      "We build scalable software platforms, cloud-enabled systems, enterprise applications, and AI-powered digital products that accelerate growth.",
    // primaryBtn: "Request a Demo",
    // secondaryBtn: "View Projects",
    // primaryLink: "/contact",
    // secondaryLink: "/projects",
  },
  {
    id: 2,
    image: HeroGIS,
    // badge: "Geospatial Intelligence & Mapping Solutions",
    title: "Advanced GIS & Geospatial Solutions",
    highlight: "For Modern India.",
    description:
      "Digital Indian helps government, utilities, infrastructure, and enterprise teams turn spatial data into decisions using GIS, remote sensing, Web GIS, and geospatial analytics.",
    // primaryBtn: "Explore Services",
    // secondaryBtn: "Contact Us",
    // primaryLink: "/services",
    // secondaryLink: "/contact",
  },
];

export default function HomePage() {
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    Promise.allSettled([
      serviceAPI.getAll(),
      projectAPI.getAll({ featured: true, limit: 6 }),
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const activeSlide = heroSlides[currentSlide];

  return (
    <>
      <Helmet>
        <title>Digital Indian — IT, GIS & Digital Solutions</title>
        <meta
          name="description"
          content="Digital Indian delivers IT services, software development, GIS, geospatial intelligence, cloud solutions, AI systems, Web GIS, remote sensing, and enterprise digital transformation solutions."
        />
      </Helmet>

      {/* HERO CAROUSEL */}
      <section className="relative pt-24 pb-2 md:pb-2 min-h-[520px] flex items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${activeSlide.image})`,
            }}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Overlay */}
        {/* Overlay */}
        <div className="absolute inset-0 z-[1] bg-black/30" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-r " />

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-6 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20    transition hover:bg-gray-700"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 text-slate-100 " />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-6 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20  transition hover:bg-gray-700"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 text-slate-100" />
        </button>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.55 }}
              >
                {/* <span className="mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-md">
                  {activeSlide.badge}
                </span> */}

                <h1 className="mb-5 font-display text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-lg">
                  {activeSlide.title}
                  <br />
                  <span className="text-teal-300">{activeSlide.highlight}</span>
                </h1>

                <p className="mb-8 max-w-xl text-lg leading-relaxed text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.6)]">
                  {activeSlide.description}
                </p>

                {/* <div className="mb-10 flex flex-wrap gap-3">
                  <Link
                    to={activeSlide.primaryLink}
                    className="btn-primary px-7 py-3"
                  >
                    {activeSlide.primaryBtn} <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    to={activeSlide.secondaryLink}
                    className="rounded-xl border border-white/30 bg-white/10 px-7 py-3 text-white transition hover:bg-white/20"
                  >
                    {activeSlide.secondaryBtn}
                  </Link>
                </div> */}

                <div className="grid grid-cols-2 gap-6 border-t border-white/20 pt-8 sm:grid-cols-4">
                  {stats.map(({ val, suf, label }) => (
                    <div key={label}>
                      <p className="font-display text-3xl font-bold text-white">
                        <Counter end={val} suffix={suf} />
                      </p>
                      <p className="mt-1 text-xs text-white/80">{label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="hidden lg:block" />
          </div>

          {/* Dots */}
          <div className="mt-10 flex items-center justify-center gap-3">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-10 bg-white"
                    : "w-3 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TECH STRIP */}
      {/* TECH STRIP - PREMIUM MARQUEE */}
      <section className="bg-white py-8 relative z-10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

            <div className="marquee-track flex w-max items-center gap-6">
              {[...HERO_IMAGES, ...HERO_IMAGES].map((item, index) => (
                <div
                  key={index}
                  className="flex h-20 w-40 flex-shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white px-5 shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <img
                    src={item.image}
                    alt={`Partner logo ${index + 1}`}
                    className="max-h-12 max-w-full object-contain grayscale transition duration-300 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label">Our Services</p>
              <h2 className="section-title">What we deliver</h2>
            </div>
            <Link
              to="/services"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 sm:mt-0"
            >
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service._id} service={service} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SECTORS */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <p className="section-label">Sectors</p>
            <h2 className="section-title">Industries we serve</h2>
            <p className="section-sub mx-auto mt-3">
              Industry-focused expertise across IT systems, GIS platforms, cloud
              solutions, and enterprise transformation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5">
            {sectors.map(({ label, icon: Icon }) => (
              <Link
                key={label}
                to="/industries"
                className="group flex flex-col items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-4 text-center transition-all hover:border-brand-200 hover:shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 transition-colors group-hover:bg-brand-500">
                  <Icon className="h-5 w-5 text-brand-500 transition-colors group-hover:text-white" />
                </div>
                <span className="text-xs font-medium text-slate-600 transition-colors group-hover:text-brand-600">
                  {label}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link to="/industries" className="btn-outline">
              Explore Industries
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      {projects.length > 0 && (
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="section-label">Case Studies</p>
                <h2 className="section-title">Our work</h2>
              </div>
              <Link
                to="/projects"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 sm:mt-0"
              >
                All projects <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PROCESS */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <p className="section-label">How We Work</p>
            <h2 className="section-title">Our delivery process</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {process.map(({ n, title, desc }) => (
              <div key={n} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 font-display text-xl font-bold text-white shadow-sm">
                  {n}
                </div>
                <h4 className="mb-1.5 font-display font-semibold text-slate-900">
                  {title}
                </h4>
                <p className="text-xs leading-relaxed text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      {blogs.length > 0 && (
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="section-label">Insights</p>
                <h2 className="section-title">From our team</h2>
              </div>
              <Link
                to="/insights"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 sm:mt-0"
              >
                All articles <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CONTACT */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <div>
              <p className="section-label">Get in Touch</p>
              <h2 className="section-title mb-4">Start your project</h2>
              <p className="mb-8 leading-relaxed text-slate-500">
                Tell us about your IT, software, cloud, AI, or geospatial
                challenge. Our team will review your requirement and respond
                within 1–2 business days.
              </p>

              <div className="mb-8 space-y-2.5">
                {[
                  "Custom Software & Web Platforms",
                  "Cloud, DevOps & System Modernization",
                  "GIS, Mapping & Spatial Intelligence",
                  "Enterprise, Government & Commercial Solutions",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-accent-500" />
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
                    className="rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <p className="font-display text-2xl font-bold text-brand-600">
                      {value}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="mb-1 text-lg font-bold text-slate-900 font-display">
                Send an Enquiry
              </h3>
              <p className="mb-6 text-sm text-slate-400">
                We respond within 1–2 business days.
              </p>
              <EnquiryForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER BRIDGE CTA */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 py-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-100px] top-[-80px] h-64 w-64 rounded-full bg-brand-500/10 blur-3xl" />
          <div className="absolute bottom-[-100px] right-[-80px] h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
            Ready to work with us
          </span>

          <h2 className="mb-4 font-display text-3xl font-bold leading-tight text-white md:text-4xl">
            Let’s build your next
            <span className="text-brand-400"> digital solution</span>
          </h2>

          <p className="mx-auto mb-8 max-w-2xl leading-7 text-slate-400">
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
              <ArrowRight className="h-4 w-4" />
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
