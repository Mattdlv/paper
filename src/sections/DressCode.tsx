import { motion } from 'framer-motion'
import { wedding } from '../config/wedding'
import { AnimatedLine } from '../components/AnimatedLine'
import { Folio } from '../components/Folio'
import { staggerContainer, fadeUp, viewportOnce } from '../lib/motion'

const swatchColors: Record<string, string> = {
  'Verde oliva': 'var(--color-olive)',
  Blanco: '#ffffff',
  Beige: '#e8dcc4',
  Lavanda: 'var(--color-lavender)',
}

export function DressCode() {
  return (
    <section id="dress-code" className="relative overflow-hidden px-6 py-24 sm:px-14 sm:py-32">
      <div className="mx-auto grid max-w-4xl gap-16 sm:grid-cols-[1fr_0.7fr] sm:items-center sm:gap-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
        >
          <Folio number="07" label="El código" className="mb-16 sm:mb-20" />

          <motion.h2
            variants={fadeUp}
            className="font-serif text-[length:var(--step-xl)] leading-[0.95] tracking-tight text-[var(--color-text)]"
          >
            Dress code
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-4 font-serif text-[length:var(--step-lg)] text-[var(--color-text)] italic">
            {wedding.dressCode.label}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-7">
            <AnimatedLine width="48px" className="ml-0" />
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10">
            <span className="font-sans text-[0.65rem] tracking-[0.3em] text-[var(--color-olive)] uppercase">
              Colores a evitar
            </span>
            <div className="mt-5 flex flex-wrap items-center gap-6">
              {wedding.dressCode.avoidColors.map((color) => (
                <div key={color} className="flex flex-col items-center gap-2">
                  <span
                    className="relative inline-block h-9 w-9 rounded-full border border-[var(--color-line)]"
                    style={{ backgroundColor: swatchColors[color] ?? 'transparent' }}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background:
                          'linear-gradient(to top right, transparent calc(50% - 1px), var(--color-text) 50%, transparent calc(50% + 1px))',
                      }}
                    />
                  </span>
                  <span className="font-sans text-xs text-[var(--color-text-soft)]">{color}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-8 max-w-xs font-sans text-sm text-[var(--color-text-soft)] italic">
            {wedding.dressCode.note}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: -1, y: 16 }}
          whileInView={{ opacity: 1, rotate: 2, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[260px] bg-[var(--color-paper)] p-2.5 shadow-[0_18px_40px_-24px_rgba(52,54,47,0.35)] sm:mx-0"
        >
          <img
            src="/scroll-world/dresscode.webp"
            alt="Detalle de la tela y el anillo para la fiesta"
            className="aspect-[4/5] w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
