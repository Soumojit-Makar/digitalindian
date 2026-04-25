import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, MapPin } from "lucide-react";
import logo from "../../assates/digitalindan-logo.png";
const services = [
  { label: "GIS Consulting", to: "/services/gis-consulting" },
  { label: "Web GIS Solutions", to: "/services/web-gis-solutions" },
  { label: "Mobile GIS", to: "/services/mobile-gis-solutions" },
  { label: "Remote Sensing", to: "/services/remote-sensing-image-analysis" },
  {
    label: "Geospatial Data Eng.",
    to: "/services/geospatial-data-engineering",
  },
  { label: "Urban Planning GIS", to: "/services/urban-planning-gis-solutions" },
  { label: "GeoAI / Spatial AI", to: "/services/geoai-spatial-intelligence" },
  { label: "Utility Mapping", to: "/services/utility-infrastructure-mapping" },
  { label: "Land Info Systems", to: "/services/land-information-systems" },
  { label: "Survey Digitization", to: "/services/survey-data-digitization" },
  { label: "Enterprise GIS Audit", to: "/services/enterprise-gis-audit" },
  { label: "GIS Implementation", to: "/services/gis-implementation-upgrade" },
  { label: "Full Stack Development", to: "/services/full-stack-development" },
  { label: "Mobile App Development", to: "/services/mobile-app-development" },
  {label:'Custom Software Development', to: '/services/custom-software-development'},
  {label:'Cloud & DevOps Solutions', to:'/services/cloud-devops-solutions'},
  {label:'AI & Data Solutions', to:'/services/ai-data-solutions'},
  {label:'Enterprise Web Solutions', to:'/services/enterprise-web-solutions'}
];

const links = [
  { label: "Home", to: "/", end: true },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services", dropdown: services },
  // { label: "Industries", to: "/industries" },
  { label: "Case Studies", to: "/projects" },
  { label: "Insights", to: "/insights" },
  { label: "Careers", to: "/careers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? "shadow-md" : "shadow-sm border-b border-slate-100"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-23">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Digital Indian Logo" className="w-auto h-20" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropOpen(true)}
                  onMouseLeave={() => setDropOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      pathname.startsWith("/services")
                        ? "text-brand-600 bg-brand-50"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${dropOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {dropOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden"
                      >
                        <div className="p-1.5">
                          {services.map((s) => (
                            <Link
                              key={s.to}
                              to={s.to}
                              className="block px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                            >
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "text-brand-600 bg-brand-50"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="btn-primary text-sm px-4 py-2">
              Contact Us
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 bg-white border-l border-slate-200 overflow-y-auto no-scrollbar"
            >
              <div className="flex items-center justify-between px-4 py-4 border-b border-slate-100">
                <span className="font-display font-bold text-slate-900">
                  Menu
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="p-3 space-y-0.5">
                {links.map((link) =>
                  link.dropdown ? (
                    <div key={link.label}>
                      <p className="px-3 pt-4 pb-1 text-xs font-bold text-brand-600 uppercase tracking-widest">
                        Services
                      </p>
                      {services.map((s) => (
                        <Link
                          key={s.to}
                          to={s.to}
                          className="block px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      end={link.end}
                      className={({ isActive }) =>
                        `block px-3 py-2.5 rounded-lg text-sm font-medium ${isActive ? "text-brand-600 bg-brand-50" : "text-slate-700 hover:bg-slate-50"}`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ),
                )}
                <div className="pt-3 mt-2 border-t border-slate-100">
                  <Link
                    to="/contact"
                    className="btn-primary w-full justify-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
