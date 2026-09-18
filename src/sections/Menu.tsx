import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { wedding } from '../config/wedding'
import { AnimatedLine } from '../components/AnimatedLine'
import { Folio } from '../components/Folio'
import { editorialEase, staggerContainer, fadeUp } from '../lib/motion'

type MenuTab = 'adult' | 'kids'

const tabs: Array<{ key: MenuTab; label: string }> = [
  { key: 'adult', label: 'Menú adulto' },
  { key: 'kids', label: 'Menú kids' },
]

export function Menu() {
  const [active, setActive] = useState<MenuTab>('adult')
  const selection = wedding.menu[active]

  return (
    <section id="menu" className="relative px-6 py-24 sm:px-14 sm:py-32">
      <Folio number="05" label="La experiencia gastronómica" />

      <div className="mx-auto mt-16 grid max-w-4xl gap-12 sm:mt-24 sm:grid-cols-[0.8fr_1.2fr] sm:gap-16">
        <div className="flex flex-col">
          <h2 className="font-serif text-[length:var(--step-xl)] leading-[0.95] tracking-tight text-[var(--color-text)]">
            El menú
          </h2>
          <div className="mt-6">
            <AnimatedLine width="48px" className="ml-0" />
          </div>
          <p className="mt-6 max-w-[22ch] font-sans text-sm text-[var(--color-text-soft)] italic">
            {wedding.menu.style}
          </p>

          <div className="mt-10 flex flex-col items-start gap-3">
            {tabs.map((tab) => {
              const isActive = tab.key === active
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActive(tab.key)}
                  aria-pressed={isActive}
                  className="relative font-serif text-[length:var(--step-md)] transition-colors duration-300"
                  style={{ color: isActive ? 'var(--color-text)' : 'var(--color-text-soft)' }}
                >
                  {tab.label}
                  {isActive ? (
                    <motion.span
                      layoutId="menu-tab-underline"
                      className="absolute right-0 -bottom-1 left-0 h-px bg-[var(--color-gold)]"
                      transition={{ duration: 0.4, ease: editorialEase }}
                    />
                  ) : null}
                </button>
              )
            })}
          </div>

          <span className="mt-8 font-serif text-[length:var(--step-lg)] text-[var(--color-gold-text)] italic">
            {selection.price}
            <span className="ml-1 font-sans text-xs text-[var(--color-text-soft)] not-italic">/ persona</span>
          </span>
        </div>

        <div className="relative sm:pt-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={staggerContainer(0.06)}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.25 } }}
            >
              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-x-6 gap-y-3">
                {selection.items.map((item) => (
                  <span
                    key={item}
                    className="font-serif text-[length:var(--step-sm)] leading-snug text-[var(--color-text)] italic sm:text-[length:var(--step-md)]"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-6 border-t border-[var(--color-line)] pt-8">
                <div>
                  <span className="font-sans text-[0.65rem] tracking-[0.3em] text-[var(--color-olive)] uppercase">
                    Postre
                  </span>
                  <p className="mt-1 font-serif text-[length:var(--step-sm)] text-[var(--color-text)]">
                    {selection.dessert}
                  </p>
                </div>
                <div>
                  <span className="font-sans text-[0.65rem] tracking-[0.3em] text-[var(--color-olive)] uppercase">
                    Bebidas
                  </span>
                  <p className="mt-1 font-sans text-sm text-[var(--color-text-soft)]">{selection.drinks}</p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
