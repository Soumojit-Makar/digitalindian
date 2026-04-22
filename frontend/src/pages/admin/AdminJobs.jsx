import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { toast } from 'react-hot-toast'
import { Plus, Trash2, Eye, EyeOff, Users, ChevronDown, ChevronUp, Save, Loader2, X } from 'lucide-react'
import { jobAPI } from '../../services/api'
import { LoadingSpinner, EmptyState } from '../../components/ui/index.jsx'

const DEPARTMENTS = ['gis-technology','remote-sensing','software-engineering','data-engineering','project-management','business-development','hr-operations']
const TYPES = ['full-time','part-time','contract','internship']

const INIT = { title: '', slug: '', department: 'gis-technology', location: 'Kolkata, India', type: 'full-time', experience: '', description: '', requirements: '', responsibilities: '', isOpen: true }

export default function AdminJobs() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(INIT)
  const [saving, setSaving] = useState(false)

  const load = () => {
    setLoading(true)
    jobAPI.getAll().then(r => setJobs(r.data.jobs || [])).finally(() => setLoading(false))
  }
  useEffect(load, [])

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))

  const handleCreate = async e => {
    e.preventDefault()
    setSaving(true)
    try {
      const payload = {
        ...form,
        requirements: form.requirements.split('\n').map(r => r.trim()).filter(Boolean),
        responsibilities: form.responsibilities.split('\n').map(r => r.trim()).filter(Boolean),
        slug: form.title.toLowerCase().replace(/[^a-z0-9 ]/g,'').replace(/\s+/g,'-'),
      }
      await jobAPI.create(payload)
      toast.success('Job created')
      setShowForm(false)
      setForm(INIT)
      load()
    } catch (err) {
      toast.error(err.response?.data?.message || 'Create failed')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Delete "${title}"?`)) return
    try {
      await jobAPI.delete(id)
      toast.success('Job deleted')
      load()
    } catch { toast.error('Delete failed') }
  }

  const handleToggle = async (j) => {
    try {
      await jobAPI.update(j._id, { isOpen: !j.isOpen })
      toast.success(j.isOpen ? 'Position closed' : 'Position opened')
      load()
    } catch { toast.error('Update failed') }
  }

  return (
    <>
      <Helmet><title>Jobs — Digital Indian Admin</title></Helmet>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display font-bold text-slate-900 text-2xl">Careers / Jobs</h1>
            <p className="text-slate-500 text-sm mt-1">{jobs.length} positions</p>
          </div>
          <button onClick={() => setShowForm(!showForm)} className="btn-primary text-sm py-2.5">
            {showForm ? <><X className="w-4 h-4" />Cancel</> : <><Plus className="w-4 h-4" />New Position</>}
          </button>
        </div>

        {/* Create Form */}
        {showForm && (
          <form onSubmit={handleCreate} className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
            <h2 className="font-semibold text-slate-900">New Job Position</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="form-label-dark">Job Title *</label>
                <input type="text" value={form.title} onChange={set('title')} className="form-input-dark" required />
              </div>
              <div>
                <label className="form-label-dark">Department</label>
                <select value={form.department} onChange={set('department')} className="form-input-dark">
                  {DEPARTMENTS.map(d => <option key={d} value={d} className="bg-white capitalize">{d.replace(/-/g,' ')}</option>)}
                </select>
              </div>
              <div>
                <label className="form-label-dark">Type</label>
                <select value={form.type} onChange={set('type')} className="form-input-dark">
                  {TYPES.map(t => <option key={t} value={t} className="bg-white capitalize">{t.replace(/-/g,' ')}</option>)}
                </select>
              </div>
              <div>
                <label className="form-label-dark">Location</label>
                <input type="text" value={form.location} onChange={set('location')} className="form-input-dark" />
              </div>
              <div>
                <label className="form-label-dark">Experience</label>
                <input type="text" value={form.experience} onChange={set('experience')} placeholder="e.g. 3–5 years" className="form-input-dark" />
              </div>
            </div>
            <div>
              <label className="form-label-dark">Description</label>
              <textarea value={form.description} onChange={set('description')} rows={3} className="form-input-dark resize-none" />
            </div>
            <div>
              <label className="form-label-dark">Responsibilities (one per line)</label>
              <textarea value={form.responsibilities} onChange={set('responsibilities')} rows={4} className="form-input-dark resize-none" />
            </div>
            <div>
              <label className="form-label-dark">Requirements (one per line)</label>
              <textarea value={form.requirements} onChange={set('requirements')} rows={4} className="form-input-dark resize-none" />
            </div>
            <div className="flex gap-3">
              <button type="submit" disabled={saving} className="btn-primary disabled:opacity-60 text-sm">
                {saving ? <><Loader2 className="w-4 h-4 animate-spin" />Creating…</> : <><Save className="w-4 h-4" />Create Position</>}
              </button>
            </div>
          </form>
        )}

        {/* Jobs List */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          {loading ? <LoadingSpinner light /> : jobs.length === 0 ? (
            <EmptyState icon={Users} title="No positions yet" description="Add your first job opening above." />
          ) : (
            <div className="divide-y divide-slate-100">
              {jobs.map(j => (
                <div key={j._id} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-slate-900 font-medium text-sm">{j.title}</p>
                      <span className={`badge text-xs ${j.isOpen ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                        {j.isOpen ? 'Open' : 'Closed'}
                      </span>
                      <span className="badge bg-slate-500/10 text-slate-500 text-xs capitalize">{j.type?.replace(/-/g,' ')}</span>
                    </div>
                    <p className="text-slate-500 text-xs mt-0.5 capitalize">{j.department?.replace(/-/g,' ')} · {j.location} {j.experience && `· ${j.experience}`}</p>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <button onClick={() => handleToggle(j)}
                      className="p-2 rounded-xl hover:bg-slate-50 text-slate-500 hover:text-slate-700 transition-all"
                      title={j.isOpen ? 'Close position' : 'Open position'}
                    >
                      {j.isOpen ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                    <button onClick={() => handleDelete(j._id, j.title)}
                      className="p-2 rounded-xl hover:bg-red-500/10 text-slate-500 hover:text-red-400 transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
