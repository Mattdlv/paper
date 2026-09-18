import { motion } from 'framer-motion'
import { wedding } from '../config/wedding'
import { AnimatedLine } from '../components/AnimatedLine'
import { Folio } from '../components/Folio'
import { SceneVideoBackground } from '../components/SceneVideoBackground'
import { staggerContainer, fadeUp, editorialEase, durations, ambientEase } from '../lib/motion'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden px-6 py-12 sm:px-14 sm:py-14"
    >
      <SceneVideoBackground name="historia" scrimOpacity={0.74} />

      <Folio number="01" label="La apertura" className="relative z-10" />

      <motion.div
        className="relative z-10 mt-auto flex max-w-xl flex-col self-start pb-10 text-left sm:pb-16"
        variants={staggerContainer(0.16, 0.15)}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={fadeUp}
          className="font-serif text-base text-[var(--color-olive)] italic"
        >
          Nos casamos
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="mt-3 font-serif text-[length:var(--step-2xl)] leading-[0.88] tracking-tight text-[var(--color-text)]"
        >
          {wedding.couple.bride}
          <motion.span
            className="mx-1 inline-block font-script text-[0.55em] text-[var(--color-gold)] sm:mx-2"
            initial={{ opacity: 0, rotate: -6 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: editorialEase }}
          >
            &amp;
          </motion.span>
          {wedding.couple.groom}
        </motion.h1>

        <motion.div variants={fadeUp} className="mt-7">
          <AnimatedLine width="56px" className="ml-0" />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-7 font-serif text-[length:var(--step-md)] tracking-wide text-[var(--color-text)] italic"
        >
          {wedding.event.displayDate}
        </motion.p>

        <motion.p variants={fadeUp} className="mt-3 max-w-sm font-sans text-sm text-[var(--color-text-soft)]">
          {wedding.phrase}
        </motion.p>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute right-6 bottom-10 sm:right-14"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: durations.standard, delay: 1.5, ease: editorialEase }}
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: ambientEase }}
          className="block h-10 w-px"
          style={{ background: 'var(--color-olive)', opacity: 0.5 }}
        />
      </motion.div>
    </section>
  )
}
