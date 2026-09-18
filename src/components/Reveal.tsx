import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { editorialEase, fadeUp, viewportOnce } from '../lib/motion'

interface RevealProps {
  children: ReactNode
  variants?: Variants
  delay?: number
  duration?: number
  as?: 'div' | 'span'
  className?: string
}

export function Reveal({
  children,
  variants = fadeUp,
  delay = 0,
  duration = 0.9,
  as = 'div',
  className,
}: RevealProps) {
  const Component = motion[as]

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={{ delay, duration, ease: editorialEase }}
    >
      {children}
    </Component>
  )
}
