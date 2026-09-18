import { AnimatePresence, motion } from 'framer-motion'
import { wedding } from '../config/wedding'
import { AnimatedLine } from '../components/AnimatedLine'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'
import { SceneVideoBackground } from '../components/SceneVideoBackground'
import { editorialEase, exitEase, durations, tapScale } from '../lib/motion'

interface OpeningProps {
  isOpen: boolean
  onOpen: () => void
}

export function Opening({ isOpen, onOpen }: OpeningProps) {
  useLockBodyScroll(!isOpen)

  return (
    <AnimatePresence>
      {!isOpen ? (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--color-bone-deep)] px-6"
          initial={{ opacity: 1, scale: 1 }}
          exit={{
            clipPath: 'circle(0% at 50% 50%)',
            scale: 1.06,
            transition: { duration: 1.3, ease: exitEase },
          }}
          style={{ clipPath: 'circle(150% at 50% 50%)' }}
        >
          <SceneVideoBackground name="apertura" scrimColor="var(--color-bone-deep)" />

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: editorialEase }}
          >
            <motion.img
              src="/logo-fm.webp"
              alt={`${wedding.couple.bride} & ${wedding.couple.groom}`}
              className="h-60 w-auto sm:h-80"
              style={{
                filter:
                  'drop-shadow(0 3px 8px rgba(52, 54, 47, 0.38)) drop-shadow(0 20px 40px rgba(52, 54, 47, 0.4))',
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          <h1 className="sr-only">
            {wedding.couple.bride} &amp; {wedding.couple.groom}
          </h1>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durations.standard, delay: 0.7, ease: editorialEase }}
          >
            <AnimatedLine width="64px" />
          </motion.div>

          <motion.p
            className="mt-6 max-w-xs text-center font-sans text-sm tracking-[0.08em] text-[var(--color-text-soft)] italic"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durations.standard, delay: 0.85, ease: editorialEase }}
          >
            {wedding.phrase}
          </motion.p>

          <motion.button
            type="button"
            onClick={onOpen}
            whileTap={tapScale}
            className="mt-14 inline-flex items-center gap-3 rounded-full border border-[var(--color-olive)] px-9 py-3.5 font-sans text-xs tracking-[0.32em] text-[var(--color-olive)] uppercase transition-colors duration-300 hover:bg-[var(--color-olive)] hover:text-[var(--color-bone)]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease: editorialEase }}
          >
            Abrir Invitación
          </motion.button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
