import { certificates } from '../data/certificates'

export default function Certificates() {
  return (
    <section aria-labelledby="certificates-heading">
      <div className="flex items-baseline justify-between gap-4">
        <h2
          id="certificates-heading"
          className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
        >
          Certificates
        </h2>
        <p className="hidden text-xs font-medium uppercase tracking-[0.18em] text-slate-400 sm:block">
          Continuous Learning
        </p>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {certificates.map((cert) => (
          <article
            key={cert.name}
            className="flex items-start justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200 shadow-sm shadow-slate-950/30"
          >
            <div>
              <h3 className="font-semibold text-slate-100">{cert.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                {cert.issuer}
              </p>
            </div>
            <span className="mt-1 rounded-full bg-slate-800 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-slate-300">
              Cert
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}


