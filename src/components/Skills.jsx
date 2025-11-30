import { motion } from 'framer-motion'
import { Code2, Database, Brain, Wrench, Users, CheckCircle2, Sparkles } from 'lucide-react'
import SectionHeader from './SectionHeader'

const skillGroups = [
  {
    title: 'Data & Machine Learning',
    icon: Brain,
    gradient: 'from-violet-500 via-sky-500 to-cyan-500',
    borderGradient: 'from-violet-500/40 to-sky-500/40',
    items: [
      'Data Modeling',
      'Machine Learning',
      'Deep Learning',
      'Data Visualization',
      'NLP & Text Analysis',
      'Model Training & Fine-tuning',
      'Feature Engineering',
      'ETL & Data Warehousing',
    ],
  },
  {
    title: 'Programming & Frameworks',
    icon: Code2,
    gradient: 'from-violet-500 via-sky-500 to-cyan-500',
    borderGradient: 'from-violet-500/40 to-sky-500/40',
    items: [
      'Python',
      'JavaScript',
      'R',
      'TensorFlow / Keras',
      'PyTorch',
      'Spark / Spark MLlib',
      'Flask',
      'Django',
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    gradient: 'from-violet-500 via-sky-500 to-cyan-500',
    borderGradient: 'from-violet-500/40 to-sky-500/40',
    items: ['SQL Server (PL/SQL)', 'MySQL', 'Oracle (ORDB)', 'SQLite', 'PostgreSQL'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    gradient: 'from-violet-500 via-sky-500 to-cyan-500',
    borderGradient: 'from-violet-500/40 to-sky-500/40',
    items: [
      'Power BI',
      'Excel & Data Reporting',
      'AWS & Azure (basics)',
      'Hadoop',
      'Jupyter / Google Colab',
      'VS Code · PyCharm · R Studio',
    ],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    gradient: 'from-violet-500 via-sky-500 to-cyan-500',
    borderGradient: 'from-violet-500/40 to-sky-500/40',
    items: [
      'Communication & Teamwork',
      'Problem Solving',
      'Fast Learning',
      'Time Management',
      'Analytical & Logical Thinking',
      'Collaboration & Leadership',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="space-y-10" aria-labelledby="skills-heading">
      <SectionHeader
        eyebrow="Skills"
        title="Modern data and engineering toolkit"
        description="A balanced set of data, machine learning, programming and collaboration skills used across academic and personal projects."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = group.icon
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-6 backdrop-blur transition-all duration-300"
            >
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${group.borderGradient} opacity-0 transition-opacity duration-300 group-hover:opacity-15`}
              />
              <div className="relative mb-6 flex items-center gap-3">
                <div
                  className={`flex items-center justify-center rounded-2xl bg-gradient-to-br ${group.gradient} p-3 shadow-lg`}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              </div>
              <div className="relative grid gap-3">
                {group.items.map((item, itemIndex) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.15 + itemIndex * 0.05,
                    }}
                    whileHover={{ x: 4 }}
                  className="group/item flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 transition-all duration-200 hover:border-sky-500/50 hover:bg-slate-900/80"
                  >
                    <CheckCircle2
                      className="h-4 w-4 flex-shrink-0 text-transparent transition-colors duration-200 group-hover/item:text-emerald-400"
                      strokeWidth={2.5}
                    />
                    <span className="text-sm font-medium text-slate-300 group-hover/item:text-white">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="pointer-events-none absolute -right-4 -top-4 opacity-0 transition-opacity duration-300 group-hover:opacity-30">
                <Sparkles className={`h-24 w-24 bg-gradient-to-br ${group.gradient} bg-clip-text text-transparent`} strokeWidth={1} />
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
