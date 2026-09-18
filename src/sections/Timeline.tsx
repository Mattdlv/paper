import { motion } from 'framer-motion'
import { wedding } from '../config/wedding'
import { AnimatedLine } from '../components/AnimatedLine'
import { Folio } from '../components/Folio'
import { SceneVideoBackground } from '../components/SceneVideoBackground'
import { staggerContainer, fadeUp, viewportOnce } from '../lib/motion'

export function Timeline() {
  return (
    <section id="timeline" className="relative isolate px-6 py-24 sm:px-14 sm:py-32">
      <SceneVideoBackground name="fiesta" scrimOpacity={0.8} />

      <Folio number="06" label="La noche" />

      <div className="mx-auto mt-16 max-w-md sm:mt-24 sm:ml-[10%] sm:max-w-lg">
        <h2 className="font-serif text-[length:var(--step-xl)] leading-[0.95] tracking-tight text-[var(--color-text)]">
          Cómo sigue la noche
        </h2>
        <div className="mt-6">
          <AnimatedLine width="48px" className="ml-0" />
        </div>

        <div className="relative mt-16">
          <motion.span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[4.5rem] w-px origin-top bg-[var(--color-line)] sm:left-24"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.ol
            className="flex flex-col gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer(0.08)}
          >
            {wedding.timeline.map((item) => (
              <motion.li
                key={item.title}
                variants={fadeUp}
                className="grid grid-cols-[4.5rem_1fr] items-start gap-4 sm:grid-cols-[6rem_1fr]"
              >
                <span className="pt-1 text-right font-serif text-[length:var(--step-sm)] tracking-wide text-[var(--color-gold-text)] italic">
                  {item.time || '·'}
                </span>

                <div className="relative pl-6">
                  <span
                    aria-hidden="true"
                    className="absolute top-2.5 -left-[1.6rem] h-[7px] w-[7px] rounded-full bg-[var(--color-olive)] sm:-left-[2.1rem]"
                  />
                  <h3 className="font-serif text-[length:var(--step-md)] text-[var(--color-text)]">{item.title}</h3>
                  <p className="mt-1 font-sans text-sm text-[var(--color-text-soft)]">{item.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  )
}
