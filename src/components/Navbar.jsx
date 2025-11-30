import { useState } from 'react'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4">
        <button
          type="button"
          onClick={() => handleScroll('hero')}
          className="flex items-center gap-3 text-left"
          aria-label="Scroll to hero section"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-sky-500/40 bg-gradient-to-br from-sky-500/20 via-slate-900 to-slate-900 text-sm font-semibold text-sky-200 shadow-sm shadow-sky-900/40">
            AK
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-50 sm:text-base">
              Ajaniya Kamalanthan
            </span>
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-slate-400">
              IT Undergraduate · Data Science
            </span>
          </span>
        </button>
        <div className="flex items-center gap-3 sm:gap-6">
          <ul className="hidden gap-6 text-xs font-medium text-slate-300 sm:flex sm:text-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleScroll(item.id)}
                  className="rounded-full px-3 py-1 transition-colors hover:bg-slate-900 hover:text-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-200 shadow-sm transition hover:border-sky-400 hover:text-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:hidden"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle menu</span>
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-4 rounded-full bg-current" />
              <span className="block h-0.5 w-4 rounded-full bg-current" />
            </span>
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-4 py-3 sm:hidden">
          <ul className="flex flex-col gap-1 text-sm font-medium text-slate-200">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleScroll(item.id)}
                  className="flex w-full items-center rounded-lg px-2 py-2 text-left transition hover:bg-slate-900 hover:text-sky-300"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
