import { useState } from 'react'
import { MotionConfig } from 'framer-motion'
import { Opening } from './sections/Opening'
import { Hero } from './sections/Hero'
import { DateCountdown } from './sections/DateCountdown'
import { Ceremony } from './sections/Ceremony'
import { Contribution } from './sections/Contribution'
import { Menu } from './sections/Menu'
import { Timeline } from './sections/Timeline'
import { DressCode } from './sections/DressCode'
import { Gifts } from './sections/Gifts'
import { Playlist } from './sections/Playlist'
import { Closing } from './sections/Closing'
import { MusicPlayer } from './components/MusicPlayer'
import { ScrollProgress } from './components/ScrollProgress'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MotionConfig reducedMotion="never">
      <main className="bg-[var(--color-bone)]">
        <Opening isOpen={isOpen} onOpen={() => setIsOpen(true)} />

        {isOpen ? (
          <>
            <ScrollProgress />
            <MusicPlayer />
          </>
        ) : null}

        <Hero />
        <DateCountdown />
        <Ceremony />
        <Contribution />
        <Menu />
        <Timeline />
        <DressCode />
        <Gifts />
        <Playlist />
        <Closing />
      </main>
    </MotionConfig>
  )
}

export default App
