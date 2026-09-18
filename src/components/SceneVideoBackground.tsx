import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface SceneVideoBackgroundProps {
  /** Scene id — resolves to /scroll-world/<name>.mp4, <name>-m.mp4, <name>.webp, <name>-m.webp */
  name: string
  /** 0-1, how strongly the bone-paper scrim sits over the clip. Keep high enough that overlaid text stays legible. */
  scrimOpacity?: number
  /** Scrim tint — defaults to the page's base paper tone; pass a deeper tone to darken a specific section. */
  scrimColor?: string
}

/**
 * Ambient looping video backdrop for a section, generated via the scroll-world
 * fal.ai pipeline. Not scroll-scrubbed (these sections aren't pinned scroll
 * containers) — plays as a quiet muted loop, like a cinemagraph, with the
 * bone-paper scrim keeping it a backdrop rather than the focal point.
 * Always plays once visible (deliberately does not gate on
 * prefers-reduced-motion — the rest of the app's UI motion still respects it
 * via MotionConfig in App.tsx). The video itself is lazy: only the poster
 * downloads on mount, the .mp4 only starts loading once the section is
 * about to enter the viewport — on a WhatsApp-opened mobile page there's no
 * reason to fetch six video files before the visitor has scrolled to five of
 * their sections. The layer is scaled up slightly so a subtle scroll-linked
 * parallax never exposes an edge.
 */
export function SceneVideoBackground({
  name,
  scrimOpacity = 0.82,
  scrimColor = 'var(--color-bone)',
}: SceneVideoBackgroundProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [active, setActive] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 860px), (pointer: coarse)')
    const syncMobile = () => setIsMobile(mobileQuery.matches)
    syncMobile()
    mobileQuery.addEventListener('change', syncMobile)
    return () => mobileQuery.removeEventListener('change', syncMobile)
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { rootMargin: '60% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])

  const suffix = isMobile ? '-m' : ''
  const poster = `/scroll-world/${name}${suffix}.webp`

  return (
    <div ref={containerRef} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div className="absolute inset-0 scale-110" style={{ y }}>
        {active ? (
          <video
            className="h-full w-full object-cover"
            poster={poster}
            src={`/scroll-world/${name}${suffix}.mp4`}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img src={poster} alt="" className="h-full w-full object-cover" />
        )}
      </motion.div>
      <div
        className="absolute inset-0"
        style={{ backgroundColor: scrimColor, opacity: scrimOpacity }}
      />
    </div>
  )
}
