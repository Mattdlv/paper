import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { wedding } from '../config/wedding'

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play().catch(() => setIsPlaying(false))
      setIsPlaying(true)
    }
  }

  return (
    <>
      <audio ref={audioRef} src={wedding.music.src} loop preload="none" />
      <motion.button
        type="button"
        onClick={toggle}
        aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
        aria-pressed={isPlaying}
        className="fixed right-5 bottom-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-olive)]/40 bg-[var(--color-bone)]/90 text-[var(--color-olive)] shadow-[0_4px_18px_rgba(52,54,47,0.12)] backdrop-blur-sm transition-colors duration-300 hover:border-[var(--color-olive)]"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <span className="sr-only">{wedding.music.title}</span>
        {isPlaying ? (
          <motion.span
            className="flex items-end gap-[3px]"
            aria-hidden="true"
            animate={{ opacity: 1 }}
          >
            {[0, 1, 2].map((bar) => (
              <motion.span
                key={bar}
                className="w-[3px] rounded-full bg-current"
                animate={{ height: ['6px', '14px', '6px'] }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: bar * 0.15,
                }}
              />
            ))}
          </motion.span>
        ) : (
          <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor" aria-hidden="true">
            <path d="M1 1.2c0-.9.98-1.45 1.74-.97l10.4 6.8a1.15 1.15 0 0 1 0 1.94l-10.4 6.8C1.98 16.25 1 15.7 1 14.8Z" />
          </svg>
        )}
      </motion.button>
    </>
  )
}
