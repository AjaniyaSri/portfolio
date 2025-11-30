export default function About() {
  return (
    <section aria-labelledby="about-heading">
      <div className="flex items-baseline justify-between gap-4">
        <h2
          id="about-heading"
          className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
        >
          About Me
        </h2>
        <p className="hidden text-xs font-medium uppercase tracking-[0.18em] text-slate-400 sm:block">
          Who I Am &amp; How I Work
        </p>
      </div>
      <div className="mt-4 grid gap-5 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-300 sm:grid-cols-[1.8fr,1.2fr] sm:text-base sm:p-7">
        <div className="space-y-3 leading-relaxed">
          <p>
            I am a self-motivated, adaptable team player and enthusiastic Information Technology
            undergraduate specializing in Data Science. I enjoy working with data, building
            intelligent systems and collaborating with others to deliver meaningful solutions.
          </p>
          <p>
            With strong interpersonal skills and the resilience to work in challenging environments,
            I am driven to contribute towards common goals while continuously improving my technical
            and professional skills.
          </p>
        </div>
        <div className="space-y-3 rounded-2xl border border-slate-700/70 bg-slate-950/60 p-4 text-xs sm:text-sm">
          <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
            Snapshot
          </h3>
          <dl className="mt-2 space-y-2">
            <div className="flex items-start justify-between gap-3">
              <dt className="text-slate-400">Current Role</dt>
              <dd className="text-right text-slate-100">
                IT Undergraduate
                <span className="block text-sky-300">Data Science Specialization</span>
              </dd>
            </div>
            <div className="flex items-start justify-between gap-3">
              <dt className="text-slate-400">Strengths</dt>
              <dd className="text-right">
                Teamwork, communication, problem solving and resilience.
              </dd>
            </div>
            <div className="flex items-start justify-between gap-3">
              <dt className="text-slate-400">What I&apos;m Looking For</dt>
              <dd className="text-right">
                Opportunities to apply data science in real projects and grow as a professional.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
