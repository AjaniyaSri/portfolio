import { ExternalLink } from 'lucide-react'
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
            className="group flex items-start justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200 shadow-sm shadow-slate-950/30 transition-colors duration-200 hover:border-blue-500/60"
          >
            <div>
              <h3 className="font-semibold text-slate-100">{cert.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                {cert.issuer}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-slate-200 transition-colors duration-200 hover:border-blue-500 hover:text-blue-400"
                >
                  View
                  <ExternalLink size={12} />
                </a>
              )}

              
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
