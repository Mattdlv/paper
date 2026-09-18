import type { Transition, Variants } from 'framer-motion'

/**
 * Motion identity — three constants, applied everywhere instead of ad-hoc
 * curves per component. Entrance decelerates (something arriving deserves a
 * gentle landing), exit accelerates (something leaving shouldn't linger),
 * ambient/looping motion breathes on a sine curve (nothing mechanical).
 */
export const editorialEase: Transition['ease'] = [0.22, 1, 0.36, 1]
export const exitEase: Transition['ease'] = [0.6, 0, 1, 1]
export const ambientEase: Transition['ease'] = 'easeInOut'

/** quick = micro-interactions, standard = reveals, slow = dramatic/hero moments. */
export const durations = {
  quick: 0.3,
  standard: 0.6,
  slow: 1.1,
} as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: editorialEase },
  },
}

export const staggerContainer = (stagger = 0.16, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
})

export const viewportOnce = { once: true, margin: '-10% 0px -10% 0px' }

/** Restrained press feedback for primary buttons — no overshoot, matches the Premium archetype. */
export const tapScale = { scale: 0.97 }
