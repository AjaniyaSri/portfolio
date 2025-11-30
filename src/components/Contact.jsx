import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react'
import SectionHeader from './SectionHeader'

const contactInfo = [
  {
    label: 'Email',
    value: 'ajaniyaje23@gmail.com',
    href: 'mailto:ajaniyaje23@gmail.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'github.com/AjaniyaSri',
    href: 'https://github.com/AjaniyaSri',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ajaniyakamalanathan',
    href: 'https://www.linkedin.com/in/ajaniyakamalanathan',
    icon: Linkedin,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isSubmitting) return

    const trimmed = Object.fromEntries(
      Object.entries(form).map(([key, value]) => [key, value.trim()]),
    )

    if (Object.values(trimmed).some((value) => value === '')) {
      setStatus({ type: 'error', message: 'Please fill in every field before sending.' })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: 'idle', message: '' })

    // No backend yet – just log data
    console.log('Contact form submitted:', trimmed)
    setTimeout(() => {
      setStatus({ type: 'success', message: 'Thanks! Your message has been recorded.' })
      setForm({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 600)
  }

  return (
    <section id="contact" className="space-y-10" aria-labelledby="contact-heading">
      <SectionHeader
        eyebrow="Contact"
        title="Let’s get in touch"
        description="Send me a short message about internships, projects or any questions."
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-6"
          onSubmit={handleSubmit}
          aria-label="Contact form"
        >
          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-r from-pink-400/15 to-sky-400/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-400 to-sky-400 p-2 shadow-sm">
                <Send className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Send a message</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-slate-300">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 transition-all duration-200 focus:border-pink-400/70 focus:bg-slate-950/80 focus:outline-none focus:ring-2 focus:ring-pink-400/20"
                />
              </label>
              <label className="text-sm text-slate-300">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 transition-all duration-200 focus:border-pink-400/70 focus:bg-slate-950/80 focus:outline-none focus:ring-2 focus:ring-pink-400/20"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm text-slate-300">
              Message
              <textarea
                rows="5"
                name="message"
                placeholder="Tell me a bit about your idea or question..."
                value={form.message}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 transition-all duration-200 focus:border-pink-400/70 focus:bg-slate-950/80 focus:outline-none focus:ring-2 focus:ring-pink-400/20"
              />
            </label>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-400 to-sky-400 px-4 py-3 text-sm font-semibold text-slate-950 shadow-sm transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60 hover:from-pink-300 hover:to-sky-300"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </motion.button>
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 flex items-center gap-2 rounded-xl border px-4 py-3 text-sm ${
                  status.type === 'success'
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                    : 'border-rose-500/30 bg-rose-500/10 text-rose-400'
                }`}
              >
                {status.type === 'success' ? (
                  <CheckCircle2 size={18} />
                ) : (
                  <AlertCircle size={18} />
                )}
                <p>{status.message}</p>
              </motion.div>
            )}
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-6"
        >
          <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-gradient-to-r from-pink-400/15 to-sky-400/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-400 to-sky-400 p-2 shadow-sm">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Reach me directly</h3>
            </div>
            <p className="mb-6 text-slate-400">
              Prefer direct outreach? Drop an email or connect via GitHub / LinkedIn.
            </p>
            <ul className="space-y-3">
              {contactInfo.map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    whileHover={{ x: 4 }}
                  >
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group/item flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4 transition-all duration-200 hover:border-violet-500/60"
                    >
                      <div className="flex items-center justify-center rounded-xl bg-slate-800 p-2.5">
                        <Icon className="h-5 w-5 text-violet-300" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-slate-400">{item.label}</p>
                        <p className="mt-1 text-base font-semibold text-white group-hover/item:text-violet-300">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  </motion.li>
                )
              })}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
