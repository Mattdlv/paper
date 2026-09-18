import { motion } from 'framer-motion'
import { wedding } from '../config/wedding'
import { AnimatedLine } from '../components/AnimatedLine'
import { Countdown } from '../components/Countdown'
import { AddToCalendar } from '../components/AddToCalendar'
import { Folio } from '../components/Folio'
import { staggerContainer, fadeUp } from '../lib/motion'
import { viewportOnce } from '../lib/motion'

export function DateCountdown() {
  return (
    <section
      id="fecha"
      className="relative overflow-hidden bg-[var(--color-olive)] px-6 py-24 text-[var(--color-bone)] sm:px-14 sm:py-32"
    >
      <Folio number="02" label="El tiempo de espera" tone="dark" />

      <motion.div
        className="mx-auto mt-14 flex max-w-3xl flex-col items-start sm:mt-20"
        variants={staggerContainer(0.12, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.h2
          variants={fadeUp}
          className="font-serif text-[length:var(--step-xl)] leading-[0.95] tracking-tight"
        >
          {wedding.event.displayDate}
        </motion.h2>

        <motion.div variants={fadeUp} className="mt-6">
          <AnimatedLine color="var(--color-gold-soft)" width="56px" />
        </motion.div>

        <motion.div variants={fadeUp} className="mt-16 w-full sm:mt-20">
          <Countdown isoDateTime={wedding.event.isoDateTime} tone="dark" align="left" />
        </motion.div>

        <motion.div variants={fadeUp} className="mt-14">
          <AddToCalendar />
        </motion.div>
      </motion.div>
    </section>
  )
}
