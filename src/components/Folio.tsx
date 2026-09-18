interface FolioProps {
  /** Chapter number, e.g. "01" */
  number: string
  /** Chapter label, sentence case — not a decorative eyebrow, real wayfinding. */
  label: string
  tone?: 'light' | 'dark'
  className?: string
}

/**
 * Editorial folio mark (page number + chapter name), the way a printed book
 * or magazine spread identifies itself. Replaces the repeated
 * uppercase-tracked "eyebrow above every heading" — this is real sequence
 * information (the wedding day genuinely is chronological), not decoration.
 */
export function Folio({ number, label, tone = 'light', className = '' }: FolioProps) {
  const ink = tone === 'light' ? 'var(--color-text-soft)' : 'rgba(244, 240, 230, 0.75)'
  const numberInk = tone === 'light' ? 'var(--color-gold-text)' : 'var(--color-gold-soft)'

  return (
    <div className={`flex items-baseline gap-2.5 font-sans text-xs ${className}`} style={{ color: ink }}>
      <span className="font-serif text-base italic" style={{ color: numberInk }}>
        {number}
      </span>
      <span aria-hidden="true" className="h-px w-4" style={{ background: 'currentColor', opacity: 0.5 }} />
      <span>{label}</span>
    </div>
  )
}
