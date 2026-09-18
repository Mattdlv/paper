import { motion } from 'framer-motion'
import { tapScale } from '../lib/motion'

interface MapButtonProps {
  href: string
  label?: string
}

export function MapButton({ href, label = 'Cómo llegar' }: MapButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileTap={tapScale}
      className="group inline-flex items-center gap-3 rounded-full border border-[var(--color-olive)] px-7 py-3 font-sans text-xs tracking-[0.25em] text-[var(--color-olive)] uppercase transition-colors duration-300 hover:bg-[var(--color-olive)] hover:text-[var(--color-bone)]"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        aria-hidden="true"
      >
        <path
          d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="9.5" r="2.4" />
      </svg>
      {label}
    </motion.a>
  )
}
