import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  MapPin as MapPinIcon,
  Globe,
  Smartphone,
  Satellite,
  Database,
  Building2,
  Brain,
  Zap,
  FileText,
  ScanLine,
  ClipboardCheck,
  Settings,
} from "lucide-react";

/* ── SectionHeader ─────────────────────────────────────────────────── */
export function SectionHeader({ label, title, subtitle, center = false }) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      {label && <p className={`section-label ${center ? "" : ""}`}>{label}</p>}
      <h2 className="section-title mb-3">{title}</h2>
      {subtitle && (
        <p className={`section-sub ${center ? "mx-auto" : ""}`}>{subtitle}</p>
      )}
    </div>
  );
}

/* ── PageHero ───────────────────────────────────────────────────────── */
export function PageHero({ label, title, subtitle, breadcrumb, img }) {
  return (
    <section
      className="relative overflow-hidden border-b border-brand-100 pt-24 pb-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: img ? `url(${img})` : 'none',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-white/85" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {breadcrumb && (
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-600 mb-5">
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <span>/</span>}
                {b.to ? (
                  <Link to={b.to} className="hover:text-brand-600 transition-colors">
                    {b.label}
                  </Link>
                ) : (
                  <span>{b.label}</span>
                )}
              </span>
            ))}
          </div>
        )}

        {label && <p className="section-label">{label}</p>}

        <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-3 max-w-4xl leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}

/* ── CTABanner ─────────────────────────────────────────────────────── */
export function CTABanner({
  title,
  subtitle,
  primaryLabel = "Contact Us",
  primaryTo = "/contact",
  secondaryLabel,
  secondaryTo,
}) {
  return (
    <section className="bg-brand-600 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
          {title}
        </h2>
        {subtitle && (
          <p className="text-brand-100 text-lg mb-8 max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to={primaryTo}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-white text-brand-700 font-semibold rounded-lg hover:bg-brand-50 transition-colors text-sm"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryTo && (
            <Link
              to={secondaryTo}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 border border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── ServiceCard ───────────────────────────────────────────────────── */
export function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.slug}`} className="card  group block">
      <img
        src={service.icon}
        alt={service.title}
        className="w-full object-cover h-auto"
      />
      <div className="p-6">
        <h3 className="font-display font-semibold text-slate-900  group-hover:text-brand-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
          {service.summary}
        </p>
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 group-hover:gap-2 transition-all">
          Learn more <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  );
}

/* ── ProjectCard ───────────────────────────────────────────────────── */
export function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="card group block overflow-hidden"
    >
      <div className="aspect-video overflow-hidden bg-slate-100 relative">
        {project.heroImage ? (
          <img
            src={project.heroImage}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-300">
            <MapPinIcon className="w-10 h-10" />
          </div>
        )}
        <div className="absolute top-2 left-2">
          <span className="badge-blue capitalize">
            {project.category?.replace(/-/g, " ")}
          </span>
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs text-slate-400 mb-1">
          {project.client} · {project.year}
        </p>
        <h3 className="font-display font-semibold text-slate-900 text-sm leading-snug mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">
          {project.title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
          {project.shortDescription}
        </p>
        {project.outcomes?.[0] && (
          <div className="mt-3 pt-3 border-t border-slate-100 flex items-start gap-2">
            <CheckCircle className="w-3.5 h-3.5 text-accent-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-accent-700">{project.outcomes[0]}</p>
          </div>
        )}
      </div>
    </Link>
  );
}

/* ── BlogCard ──────────────────────────────────────────────────────── */
export function BlogCard({ blog }) {
  const date = blog.publishedAt
    ? new Date(blog.publishedAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "";
  return (
    <Link
      to={`/insights/${blog.slug}`}
      className="card group block overflow-hidden"
    >
      <div className="aspect-video overflow-hidden bg-slate-100">
        {blog.coverImage ? (
          <img
            src={blog.coverImage}
            alt={blog.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-200 font-display font-bold text-4xl">
            GIS
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
          <span>{date}</span>
          <span>·</span>
          <span>{blog.readTime} min read</span>
        </div>
        <h3 className="font-display font-semibold text-slate-900 text-sm leading-snug mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
          {blog.excerpt}
        </p>
      </div>
    </Link>
  );
}

/* ── Spinner / Empty ───────────────────────────────────────────────── */
export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="w-8 h-8 border-2 border-slate-200 border-t-brand-500 rounded-full animate-spin" />
    </div>
  );
}

export function EmptyState({ icon: Icon, title, description, action }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center px-4">
      {Icon && (
        <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
          <Icon className="w-7 h-7 text-slate-400" />
        </div>
      )}
      <h3 className="font-display font-semibold text-slate-900 text-lg mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-slate-500 text-sm max-w-xs mb-5">{description}</p>
      )}
      {action}
    </div>
  );
}

/* ── Icon helper ───────────────────────────────────────────────────── */
const iconMap = {
  MapPin: MapPinIcon,
  Globe,
  Smartphone,
  Satellite,
  Database,
  Building2,
  Brain,
  Zap,
  FileText,
  ScanLine,
  ClipboardCheck,
  Settings,
};
function ServiceIcon({ name, className }) {
  const Icon = iconMap[name] || MapPinIcon;
  return <Icon className={className} />;
}
