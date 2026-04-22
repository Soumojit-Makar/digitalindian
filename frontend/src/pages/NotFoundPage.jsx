import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { MapPin, Home, ArrowLeft } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <>
      <Helmet><title>404 — Digital Indian</title></Helmet>
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-2xl bg-brand-100 flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-8 h-8 text-brand-500" />
          </div>
          <p className="text-8xl font-bold text-slate-100 mb-2 font-display">404</p>
          <h2 className="font-display font-bold text-slate-900 text-2xl mb-3">Page not found</h2>
          <p className="text-slate-500 mb-8">The page you're looking for has drifted off the map.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className="btn-primary"><Home className="w-4 h-4" /> Back to Home</Link>
            <button onClick={() => window.history.back()} className="btn-outline"><ArrowLeft className="w-4 h-4" /> Go Back</button>
          </div>
        </div>
      </div>
    </>
  )
}
