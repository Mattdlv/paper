import { motion } from 'framer-motion'
import { wedding } from '../config/wedding'
import { AnimatedLine } from '../components/AnimatedLine'
import { MapButton } from '../components/MapButton'
import { Folio } from '../components/Folio'
import { SceneVideoBackground } from '../components/SceneVideoBackground'
import { staggerContainer, fadeUp, viewportOnce } from '../lib/motion'

const details = [
  { label: 'Lugar', value: wedding.ceremony.venue },
  { label: 'Dirección', value: wedding.ceremony.address },
  { label: 'Fecha', value: wedding.ceremony.date },
  { label: 'Hora', value: wedding.ceremony.time },
]

export function Ceremony() {
  return (
    <section id="ceremonia" className="relative isolate overflow-hidden px-6 py-24 sm:px-14 sm:py-32">
      <SceneVideoBackground name="ceremonia" scrimOpacity={0.76} />

      <Folio number="03" label="La ceremonia y la fiesta" />

      <div className="mx-auto mt-16 grid max-w-4xl gap-14 sm:mt-24 sm:grid-cols-[1.1fr_0.9fr] sm:gap-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="flex flex-col"
        >
          <motion.h2
            variants={fadeUp}
            className="font-serif text-[length:var(--step-xl)] leading-[0.92] tracking-tight text-[var(--color-text)]"
          >
            Ceremonia
            <br />
            <span className="italic">&amp; celebración</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 font-serif text-[length:var(--step-lg)] text-[var(--color-lavender)] italic"
          >
            {wedding.ceremony.name}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8">
            <AnimatedLine width="48px" />
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08, 0.15)}
          className="flex flex-col gap-6 sm:pt-3"
        >
          {details.map((detail) => (
            <motion.div key={detail.label} variants={fadeUp}>
              <span className="font-sans text-[0.65rem] tracking-[0.3em] text-[var(--color-olive)] uppercase">
                {detail.label}
              </span>
              <p className="mt-1 font-sans text-base text-[var(--color-text)]">{detail.value}</p>
            </motion.div>
          ))}

          <motion.div variants={fadeUp} className="mt-2 flex flex-col items-start gap-5">
            <MapButton href={wedding.ceremony.mapUrl} />
            <a
              href={`https://instagram.com/${wedding.ceremony.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs tracking-[0.2em] text-[var(--color-text-soft)] uppercase transition-colors duration-300 hover:text-[var(--color-olive)]"
            >
              @{wedding.ceremony.instagram}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
