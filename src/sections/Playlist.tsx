import { motion } from 'framer-motion'
import { wedding } from '../config/wedding'
import { AnimatedLine } from '../components/AnimatedLine'
import { Folio } from '../components/Folio'
import { staggerContainer, fadeUp, viewportOnce } from '../lib/motion'

function SpotifyMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm5.5 17.3a.75.75 0 0 1-1.03.25c-2.82-1.72-6.37-2.11-10.55-1.16a.75.75 0 1 1-.33-1.46c4.58-1.04 8.5-.59 11.66 1.34.36.22.47.68.25 1.03Zm1.47-3.27a.94.94 0 0 1-1.29.31c-3.23-1.98-8.15-2.56-11.97-1.4a.94.94 0 1 1-.55-1.8c4.36-1.32 9.78-.68 13.5 1.6.44.27.58.85.31 1.29Zm.13-3.4c-3.87-2.3-10.26-2.51-13.96-1.39a1.13 1.13 0 1 1-.66-2.16c4.25-1.29 11.32-1.04 15.78 1.6a1.13 1.13 0 1 1-1.16 1.95Z" />
    </svg>
  )
}

export function Playlist() {
  return (
    <section id="playlist" className="relative overflow-hidden px-6 py-24 sm:px-14 sm:py-32">
      <Folio number="09" label="La música" />

      <motion.div
        className="mx-auto mt-16 max-w-md sm:mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.12)}
      >
        <motion.h2
          variants={fadeUp}
          className="font-serif text-[length:var(--step-xl)] leading-[0.95] tracking-tight text-[var(--color-lavender)]"
        >
          Sumá tu canción
        </motion.h2>

        <motion.div variants={fadeUp} className="mt-6">
          <AnimatedLine width="48px" color="var(--color-lavender)" className="ml-0" />
        </motion.div>

        <motion.p variants={fadeUp} className="mt-6 max-w-xs font-sans text-sm text-[var(--color-text-soft)]">
          {wedding.playlist.message}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10">
          <a
            href={wedding.playlist.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[var(--color-olive)] px-8 py-3.5 font-sans text-xs tracking-[0.2em] text-[var(--color-bone)] uppercase transition-colors duration-300 hover:bg-[var(--color-olive-deep)]"
          >
            <SpotifyMark />
            Abrir playlist en Spotify
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
