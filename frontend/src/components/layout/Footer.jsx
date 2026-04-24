import { Link } from "react-router-dom";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Youtube,
  Globe,
  MonitorSmartphone,
  Cloud,
  Brain,
  ArrowRight,
} from "lucide-react";
import logo from "../../assates/digitalindan-logo.png";

const services = [
  ["GIS Consulting", "/services/gis-consulting"],
  ["Web GIS Solutions", "/services/web-gis-solutions"],
  ["Remote Sensing & Image Analysis", "/services/remote-sensing-image-analysis"],
  ["GeoAI / Spatial Intelligence", "/services/geoai-spatial-intelligence"],
  ["Full Stack Development", "/services/full-stack-development"],
  ["Mobile App Development", "/services/mobile-app-development"],
];

const solutions = [
  ["Custom Software Development", "/services/custom-software-development", MonitorSmartphone],
  ["Cloud & DevOps Solutions", "/services/cloud-devops-solutions", Cloud],
  ["AI & Data Solutions", "/services/ai-data-solutions", Brain],
  ["Enterprise Web Solutions", "/services/enterprise-web-solutions", Globe],
];

const company = [
  ["About Us", "/about"],
  ["Industries", "/industries"],
  ["Projects", "/projects"],
  ["Insights", "/insights"],
  ["Careers", "/careers"],
  ["Contact", "/contact"],
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
  { icon: Youtube, href: "https://www.youtube.com/", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-60 w-60 rounded-full bg-brand-600/10 blur-3xl" />
        <div className="absolute right-[-120px] bottom-[-120px] h-60 w-60 rounded-full bg-accent-500/10 blur-3xl" />
      </div>

      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 pt-8 pb-5">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Link
                to="/"
                className="inline-flex rounded-xl bg-white p-2 shadow-lg shadow-black/20"
              >
                <img
                  src={logo}
                  alt="Digital Indian Logo"
                  className="h-12 w-auto object-contain"
                />
              </Link>

              <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
                Empowering businesses with advanced IT solutions, AI innovation,
                software development, cloud services, and geospatial intelligence
                to drive digital transformation across India.
              </p>

              <div className="mt-4 flex items-center gap-2">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/40 hover:bg-brand-500 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>

              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-900/30"
              >
                Get a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                <div>
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-white">
                    Services
                  </h4>
                  <ul className="space-y-2">
                    {services.map(([label, to]) => (
                      <li key={to}>
                        <Link
                          to={to}
                          className="text-sm leading-5 text-slate-400 transition-colors hover:text-white"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        to="/services"
                        className="inline-flex items-center gap-2 text-sm font-medium text-brand-400 transition-colors hover:text-brand-300"
                      >
                        View all
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-white">
                    Solutions
                  </h4>
                  <ul className="space-y-2">
                    {solutions.map(([label, to, Icon]) => (
                      <li key={to}>
                        <Link
                          to={to}
                          className="group flex items-start gap-2 text-sm leading-5 text-slate-400 transition-colors hover:text-white"
                        >
                          <Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400 group-hover:text-brand-300" />
                          <span>{label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-white">
                    Company
                  </h4>
                  <ul className="space-y-2">
                    {company.map(([label, to]) => (
                      <li key={to}>
                        <Link
                          to={to}
                          className="text-sm leading-5 text-slate-400 transition-colors hover:text-white"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-white">
                    Contact
                  </h4>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm leading-6 text-slate-400">
                      <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-brand-400" />
                      <span>
                        Digital Indian EN-9, Sector V, Salt Lake
                        <br />
                        Kolkata – 700091, India
                      </span>
                    </li>

                    <li>
                      <a
                        href="mailto:info@digitalindian.co.in"
                        className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                      >
                        <Mail className="h-4 w-4 flex-shrink-0 text-brand-400" />
                        info@digitalindian.co.in
                      </a>
                    </li>

                    <li>
                      <a
                        href="tel:+919830640814"
                        className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                      >
                        <Phone className="h-4 w-4 flex-shrink-0 text-brand-400" />
                        9830640814 | 7908735132
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="mt-4 flex flex-col gap-3 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Digital Indian Pvt. Ltd. All rights
              reserved.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/privacy" className="transition-colors hover:text-slate-300">
                Privacy
              </Link>
              <Link to="/terms" className="transition-colors hover:text-slate-300">
                Terms
              </Link>
              <Link to="/admin/login" className="transition-colors hover:text-slate-300">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}