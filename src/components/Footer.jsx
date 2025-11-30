import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail, Code2, Sparkles } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/AjaniyaSri',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ajaniyakamalanathan',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:ajaniyaje23@gmail.com',
    icon: Mail,
  },
]

const techStack = ['React', 'Vite', 'Tailwind CSS', 'Framer Motion']

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-slate-800 bg-slate-950/90 py-8">
      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-pink-300" />
            <h3 className="text-lg font-semibold text-white">Connect with me</h3>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 p-3 shadow-sm transition-colors duration-200 hover:border-pink-300/80"
                  aria-label={social.name}
                >
                  <Icon className="h-5 w-5 text-pink-300" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-900/90 px-2 py-1 text-xs text-slate-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {social.name}
                  </span>
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="text-xs text-slate-400">Built with</span>
          {techStack.map((tech, idx) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
              className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-2 text-center text-sm text-slate-400"
        >
          <div className="flex items-center gap-2">
            <span>© {year} Ajaniya Kamalanthan</span>
            <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />
          </div>
          <p className="text-xs text-slate-500">
            Crafted with care using modern web tools and a focus on clean, readable design.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
