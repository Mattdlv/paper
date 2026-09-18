import { motion } from 'framer-motion'
import { editorialEase, durations, viewportOnce } from '../lib/motion'

interface AnimatedLineProps {
  width?: string
  color?: string
  className?: string
}

/** A hairline rule that draws itself in, like ink under a pen — not a bar that expands from the middle. */
export function AnimatedLine({ width = '48px', color = 'var(--color-gold)', className = '' }: AnimatedLineProps) {
  const w = Number.parseFloat(width) || 48

  return (
    <svg
      aria-hidden="true"
      width={w}
      height="2"
      viewBox={`0 0 ${w} 2`}
      className={`block overflow-visible ${className}`}
    >
      <motion.line
        x1="0"
        y1="1"
        x2={w}
        y2="1"
        stroke={color}
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={viewportOnce}
        transition={{ duration: durations.standard, ease: editorialEase }}
      />
    </svg>
  )
}
