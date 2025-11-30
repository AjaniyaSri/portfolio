export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <header className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-300">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-sm text-slate-400 sm:text-base">{description}</p>
      )}
    </header>
  )
}


