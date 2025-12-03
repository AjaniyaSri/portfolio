import { motion } from 'framer-motion'
import { MapPin, ArrowDownCircle, Download, Brain, Code2 } from 'lucide-react'
import ajaniya from '../assets/ajaniya.jpg'
const heroStats = [
  {
    label: 'Data & ML',
    value: 'Hands-on projects',
    icon: Brain,
  },
  {
    label: 'Projects',
    value: '4+ academic builds',
    icon: Code2,
  },
  {
    label: 'Focus',
    value: 'Real-world impact',
    icon: Brain,
  },
]

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-8"
      >
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-300/60 bg-slate-900/80 px-4 py-1">
            Data Science Undergraduate · IT
          </span>
          <span className="inline-flex items-center gap-1 text-slate-400">
            <MapPin size={16} />
            Kothalawala, Kaduwela, Sri Lanka
          </span>
        </div>

        <h1
          id="hero-heading"
          className="text-4xl font-semibold leading-tight text-white md:text-5xl"
        >
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-pink-400 to-sky-400 bg-clip-text text-transparent">
            Ajaniya Kamalanthan
          </span>
          , Data Science undergraduate specializing in analytics, machine learning, and data-driven problem-solving.
        </h1>

        <p className="text-lg text-slate-400">
          I like working with data, building simple ML solutions, and turning ideas into clear,
          useful projects.
        </p>

        <div className="flex flex-wrap gap-3">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-400 to-sky-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition-colors duration-200 hover:from-pink-300 hover:to-sky-300"
          >
            <ArrowDownCircle
              size={18}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
            View Projects
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 rounded-full border border-pink-300 bg-slate-900 px-6 py-2.5 text-sm font-semibold text-slate-100 transition-colors duration-200 hover:border-sky-300 hover:text-pink-200"
          >
            <Download
              size={18}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
            Contact Me
          </motion.a>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 rounded-full border border-pink-300 bg-slate-900 px-6 py-2.5 text-sm font-semibold text-slate-200 transition-colors duration-200 hover:border-sky-300 hover:text-pink-200"
          >
            <Download
              size={18}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
            Download Resume
          </motion.a>
        </div>

        <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
          {heroStats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="group relative rounded-2xl border border-slate-800 bg-slate-900 p-4 transition-colors duration-200 hover:border-pink-300/70"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-400 to-sky-400 p-2 shadow-sm">
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">{stat.value}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        whileHover={{ scale: 1.01, rotate: 0 }}
        className="group relative rounded-3xl border border-slate-800 bg-slate-900/80 p-1 shadow-2xl transition-all duration-500"
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-sky-500/20 via-cyan-500/20 to-emerald-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative rounded-3xl bg-slate-950 p-6">
          <div className="relative overflow-hidden rounded-2xl border border-slate-800">
            <motion.img
              src={ajaniya}
              alt="Portrait of Ajaniya Kamalanthan"
              className="h-96 w-full object-cover object-center brightness-110 transition-all duration-500 group-hover:scale-105 group-hover:brightness-115"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-4 left-4 z-10 space-y-1 text-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                Currently exploring
              </p>
              <p className="text-lg font-semibold text-white">
                Machine learning & data visualisation
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-4 text-sm text-slate-200 transition-all duration-300 hover:border-sky-500/60 hover:text-slate-100"
            >
              <p className="text-xs text-slate-400">Current toolkit</p>
              <p className="mt-1 font-semibold text-white">
                Python · JavaScript · ML · Data Visualisation
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-4 text-sm text-slate-200 transition-all duration-300 hover:border-sky-500/60 hover:text-slate-100"
            >
              <p className="text-xs text-slate-400">Interests</p>
              <p className="mt-1 font-semibold text-white">
                Predictive analytics, NLP, and real-time dashboards
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
