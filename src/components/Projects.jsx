import { motion } from 'framer-motion'
import { ExternalLink, Github, Code2, ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import SectionHeader from './SectionHeader'

const fallbackProjectImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='360' viewBox='0 0 600 360'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop stop-color='%232563EB' offset='0%25'/%3E%3Cstop stop-color='%234F46E5' offset='50%25'/%3E%3Cstop stop-color='%230F172A' offset='100%25'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='360' fill='%230F172A'/%3E%3Crect x='40' y='60' width='520' height='240' rx='36' fill='url(%23g)' opacity='0.85'/%3E%3C/svg%3E"

export default function Projects() {
  return (
    <section id="projects" className="space-y-10" aria-labelledby="projects-heading">
      <SectionHeader
        eyebrow="Projects"
        title="Work I’ve done"
        description="A few academic and personal projects where I practised data science and development."
      />

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:border-blue-500/60"
          >
            {/* Image */}
            <div className="relative h-56 w-full overflow-hidden">
              <motion.img
                src={project.image}
                alt={`${project.title} preview`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                onError={(event) => {
                  if (event.currentTarget.dataset.fallbackApplied) return
                  event.currentTarget.dataset.fallbackApplied = 'true'
                  event.currentTarget.src = fallbackProjectImage
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

              {/* Year badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className="flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-100">
                  <Code2 className="h-3 w-3" />
                  {project.year}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative p-6 text-sm text-slate-300">
              <h3 className="text-xl font-semibold leading-tight text-white transition-colors duration-200 group-hover:text-blue-400">
                {project.title}
              </h3>

              {project.role && (
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-blue-400">
                  {project.role}
                </p>
              )}

              <ul className="mt-3 space-y-1.5">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-blue-500 group-hover:bg-indigo-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {project.link && (
                <div className="mt-5 flex flex-wrap gap-3">
                  {/* View Code */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group/btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-2.5 text-xs font-semibold text-white transition-colors duration-200 hover:from-blue-400 hover:to-indigo-500"
                  >
                    <Github
                      size={14}
                      className="transition-transform duration-300 group-hover/btn:rotate-12"
                    />
                    View Code
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all duration-300 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    />
                  </motion.a>

                  {/* Details */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group/btn inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-5 py-2.5 text-xs font-semibold text-slate-200 transition-colors duration-200 hover:border-blue-500 hover:text-blue-400"
                  >
                    <ExternalLink
                      size={14}
                      className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    />
                    Project Details
                  </motion.a>
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
