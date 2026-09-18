import { motion } from 'framer-motion'
import { wedding } from '../config/wedding'
import { Reveal } from '../components/Reveal'
import { AnimatedLine } from '../components/AnimatedLine'
import { Folio } from '../components/Folio'
import { SceneVideoBackground } from '../components/SceneVideoBackground'

export function Closing() {
  return (
    <section className="relative isolate flex flex-col items-center overflow-hidden bg-[var(--color-bone-deep)] px-6 py-24 text-center sm:py-32">
      <SceneVideoBackground name="cierre" scrimOpacity={0.72} scrimColor="var(--color-bone-deep)" />

      <Folio number="10" label="Hasta pronto" />

      <div className="mt-16 flex flex-col items-center sm:mt-20">
        <Reveal>
          <motion.img
            src="/logo-fm.webp"
            alt={`${wedding.couple.bride} & ${wedding.couple.groom}`}
            className="h-32 w-auto sm:h-36"
            style={{
              filter:
                'drop-shadow(0 3px 7px rgba(52, 54, 47, 0.36)) drop-shadow(0 14px 26px rgba(52, 54, 47, 0.38))',
            }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />
        </Reveal>

        <Reveal delay={0.2} className="mt-6">
          <p className="max-w-xs font-serif text-[length:var(--step-md)] text-[var(--color-text)] italic">
            Los esperamos con todo el amor.
          </p>
        </Reveal>

        <div className="mt-8">
          <AnimatedLine width="48px" />
        </div>

        <Reveal delay={0.3} className="mt-8">
          <p className="font-sans text-xs tracking-[0.3em] text-[var(--color-text-soft)] uppercase">
            {wedding.couple.bride} &amp; {wedding.couple.groom} · {wedding.event.displayDate}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
