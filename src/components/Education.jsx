export default function Education() {
  return (
    <section aria-labelledby="education-heading">
      <div className="flex items-baseline justify-between gap-4">
        <h2
          id="education-heading"
          className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
        >
          Education
        </h2>
        <p className="hidden text-xs font-medium uppercase tracking-[0.18em] text-slate-400 sm:block">
          My Academic Journey
        </p>
      </div>
      <ol className="mt-6 space-y-6 border-l border-slate-800 pl-5 text-sm sm:text-base">
        <li className="relative">
          <div className="absolute -left-[9px] mt-1 h-3 w-3 rounded-full border border-sky-400 bg-slate-950" />
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 shadow-sm shadow-slate-950/40">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="font-semibold text-slate-100">
                  BSc (Hons) in Information Technology Specialising in Data Science
                </h3>
                <p className="text-sm text-slate-400">
                  Sri Lanka Institute of Information Technology (SLIIT)
                </p>
              </div>
              <div className="text-right text-xs font-medium uppercase tracking-wide text-sky-300">
                <p>2023 – Present</p>
                <p className="mt-0.5 text-[0.65rem] text-slate-400">Undergraduate</p>
              </div>
            </div>
            <div className="mt-3 grid gap-3 text-sm text-slate-300 sm:grid-cols-[1.1fr,1.3fr]">
              <div>
                <p className="font-medium text-slate-100">Current CGPA: 2.95</p>
                <p className="mt-1 text-slate-400">
                  Completed the Higher Diploma in Information Technology as part of the programme.
                </p>
              </div>
              <div className="rounded-xl border border-slate-700/70 bg-slate-950/60 p-3 text-xs sm:text-sm">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Focus Areas
                </p>
                <p className="mt-1 text-slate-200">
                  Data science fundamentals, statistics, machine learning, programming and
                  databases.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="relative">
          <div className="absolute -left-[9px] mt-1 h-3 w-3 rounded-full border border-slate-600 bg-slate-950" />
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="font-semibold text-slate-100">
                  G.C.E. Advanced Level – Physical Science Stream
                </h3>
                <p className="text-sm text-slate-400">BT/Valaichenai Hindu College</p>
              </div>
              <p className="text-xs font-medium uppercase tracking-wide text-sky-300">
                2021 (2022)
              </p>
            </div>
            <ul className="mt-3 grid gap-2 text-sm text-slate-300 sm:grid-cols-3">
              <li>Combined Maths – C</li>
              <li>Physics – C</li>
              <li>Chemistry – C</li>
            </ul>
          </div>
        </li>
      </ol>
    </section>
  )
}


