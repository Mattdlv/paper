import { useEffect, useState } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  isPast: boolean
}

function getTimeLeft(target: number): TimeLeft {
  const diff = Math.max(0, target - Date.now())

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isPast: diff <= 0,
  }
}

export function useCountdown(isoDateTime: string): TimeLeft {
  const target = new Date(isoDateTime).getTime()
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(target))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(target))
    }, 1000)

    return () => clearInterval(interval)
  }, [target])

  return timeLeft
}
