import { useState } from 'react'
import { motion } from 'framer-motion'
import { wedding } from '../config/wedding'
import { Folio } from '../components/Folio'
import { staggerContainer, fadeUp, viewportOnce, tapScale } from '../lib/motion'

export function Gifts() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(wedding.gifts.alias)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="regalos" className="relative px-6 py-24 sm:px-14 sm:py-32">
      <Folio number="08" label="Un gesto" className="sm:ml-auto sm:w-fit" />

      <motion.div
        className="mx-auto mt-16 max-w-md sm:mt-20 sm:mr-[8%] sm:ml-auto sm:text-right"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.12)}
      >
        <motion.p
          variants={fadeUp}
          className="font-serif text-[length:var(--step-lg)] leading-snug text-[var(--color-text)] italic"
        >
          {wedding.gifts.message}
        </motion.p>

        <motion.button
          variants={fadeUp}
          whileTap={tapScale}
          type="button"
          onClick={handleCopy}
          className="group mt-10 inline-flex flex-col items-start gap-1 border-t border-[var(--color-line)] pt-5 text-left sm:items-end sm:text-right"
        >
          <span className="font-sans text-[0.65rem] tracking-[0.3em] text-[var(--color-olive)] uppercase">
            {wedding.gifts.platform}
          </span>
          <span className="font-serif text-[length:var(--step-md)] text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-olive)]">
            {wedding.gifts.alias}
          </span>
          <span className="font-sans text-xs text-[var(--color-text-soft)]">{wedding.gifts.holder}</span>
          <span className="mt-2 font-sans text-[0.65rem] tracking-[0.15em] text-[var(--color-gold-text)] uppercase">
            {copied ? 'Alias copiado' : 'Tocar para copiar'}
          </span>
        </motion.button>
      </motion.div>
    </section>
  )
}
