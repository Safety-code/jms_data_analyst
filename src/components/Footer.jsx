import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <footer className="w-full py-14 mt-auto">
      <div className="page-shell">
        <div className="glass-panel grid gap-16 rounded-3xl px-8 py-10 mb-12 md:grid-cols-2 md:px-10">
          <div className="space-y-6">
            <h2 className="font-headline-lg text-[42px] font-extrabold leading-tight text-on-surface md:text-[48px]">Get in Touch</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Have a complex dataset that needs decoding or a predictive model that needs building?
              Let's discuss how we can turn your data into actionable insights.
            </p>
            <div className="flex items-center gap-2 text-on-surface-variant font-label-caps text-label-caps">
              <span className="material-symbols-outlined text-primary text-[22px]">mail</span>
              safetmens98@gmail.com.com
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <label className="font-label-caps text-label-caps text-on-surface-variant ml-1" htmlFor="footer-name">
                  Name
                </label>
                <input
                  type="text"
                  id="footer-name"
                  placeholder="Joseph Mensah"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full rounded-2xl border border-white/70 bg-white/70 px-4 py-3 font-body-md text-body-md text-on-surface transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-label-caps text-label-caps text-on-surface-variant ml-1" htmlFor="footer-email">
                  Email
                </label>
                <input
                  type="email"
                  id="footer-email"
                  placeholder="safetmens98@gmail.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full rounded-2xl border border-white/70 bg-white/70 px-4 py-3 font-body-md text-body-md text-on-surface transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="font-label-caps text-label-caps text-on-surface-variant ml-1" htmlFor="footer-message">
                Message
              </label>
              <textarea
                id="footer-message"
                rows="4"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full rounded-2xl border border-white/70 bg-white/70 px-4 py-3 font-body-md text-body-md text-on-surface transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              className="vibrant-button w-full rounded-2xl px-8 py-4 font-label-caps text-label-caps text-white transition-all duration-200 md:w-auto"
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/70 pt-8 md:flex-row md:items-center md:justify-between">
          <Link to="/" className="font-label-caps text-label-caps text-primary transition-colors hover:text-secondary">
            Joseph Mensah
          </Link>
          <div className="font-data-mono text-data-mono text-on-surface text-center">
            © 2026 Data Analyst Portfolio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
