import { AnimatePresence, motion } from 'framer-motion'
import { useCountdown } from '../hooks/useCountdown'

interface CountdownProps {
  isoDateTime: string
  tone?: 'light' | 'dark'
  align?: 'center' | 'left'
}

const units: Array<{ key: 'days' | 'hours' | 'minutes' | 'seconds'; label: string }> = [
  { key: 'days', label: 'Días' },
  { key: 'hours', label: 'Horas' },
  { key: 'minutes', label: 'Minutos' },
  { key: 'seconds', label: 'Segundos' },
]

function Digit({ value }: { value: number }) {
  const display = String(value).padStart(2, '0')

  return (
    <span className="relative inline-flex h-[1em] overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={display}
          initial={{ y: '40%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-40%', opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {display}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export function Countdown({ isoDateTime, tone = 'light', align = 'center' }: CountdownProps) {
  const time = useCountdown(isoDateTime)
  const numberColor = tone === 'light' ? 'var(--color-text)' : 'var(--color-bone)'
  const labelColor = tone === 'light' ? 'var(--color-text-soft)' : 'rgba(244, 240, 230, 0.75)'
  const justify = align === 'left' ? 'justify-start' : 'justify-center'

  return (
    <div className={`flex items-start ${justify} gap-4 sm:gap-8`}>
      {units.map((unit, index) => (
        <div key={unit.key} className="flex items-start gap-4 sm:gap-8">
          <div className="flex flex-col items-center gap-2">
            <span
              className="font-serif text-[length:var(--step-xl)] leading-none tabular-nums"
              style={{ color: numberColor }}
            >
              <Digit value={time[unit.key]} />
            </span>
            <span
              className="font-sans text-[0.6rem] tracking-[0.25em] uppercase sm:text-xs"
              style={{ color: labelColor }}
            >
              {unit.label}
            </span>
          </div>
          {index < units.length - 1 ? (
            <span
              aria-hidden="true"
              className="mt-2 font-serif text-[length:var(--step-lg)] text-[var(--color-gold)]"
            >
              ·
            </span>
          ) : null}
        </div>
      ))}
    </div>
  )
}
