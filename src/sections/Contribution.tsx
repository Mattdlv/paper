import { useState } from 'react'
import { motion } from 'framer-motion'
import { wedding } from '../config/wedding'
import { AnimatedLine } from '../components/AnimatedLine'
import { Folio } from '../components/Folio'
import { staggerContainer, fadeUp, viewportOnce, tapScale } from '../lib/motion'

const prices = [
  { label: 'Adulto', value: wedding.contribution.adultPrice },
  { label: 'Kids', value: wedding.contribution.kidsPrice },
]

export function Contribution() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(wedding.contribution.alias)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="tarjeta" className="relative px-6 py-24 sm:px-14 sm:py-32">
      <Folio number="04" label="La tarjeta" />

      <motion.div
        className="mx-auto mt-16 max-w-md sm:mt-20 sm:ml-[8%]"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.1)}
      >
        <motion.h2
          variants={fadeUp}
          className="font-serif text-[length:var(--step-xl)] leading-[0.95] tracking-tight text-[var(--color-text)]"
        >
          Valor por persona
        </motion.h2>

        <motion.div variants={fadeUp} className="mt-6">
          <AnimatedLine width="48px" className="ml-0" />
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 flex items-baseline gap-10">
          {prices.map((price) => (
            <div key={price.label}>
              <span className="font-sans text-[0.65rem] tracking-[0.3em] text-[var(--color-olive)] uppercase">
                {price.label}
              </span>
              <p className="mt-1 font-serif text-[length:var(--step-lg)] text-[var(--color-gold-text)]">
                {price.value}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.p variants={fadeUp} className="mt-8 max-w-xs font-sans text-sm text-[var(--color-text-soft)]">
          {wedding.contribution.message}
        </motion.p>

        <motion.button
          variants={fadeUp}
          whileTap={tapScale}
          type="button"
          onClick={handleCopy}
          className="group mt-10 flex flex-col items-start gap-1 border-t border-[var(--color-line)] pt-5 text-left"
        >
          <span className="font-sans text-[0.65rem] tracking-[0.3em] text-[var(--color-olive)] uppercase">
            {wedding.contribution.platform}
          </span>
          <span className="font-serif text-[length:var(--step-md)] text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-olive)]">
            {wedding.contribution.alias}
          </span>
          <span className="font-sans text-xs text-[var(--color-text-soft)]">{wedding.contribution.holder}</span>
          <span className="mt-2 font-sans text-[0.65rem] tracking-[0.15em] text-[var(--color-gold-text)] uppercase">
            {copied ? 'Alias copiado' : 'Tocar para copiar'}
          </span>
        </motion.button>
      </motion.div>
    </section>
  )
}
