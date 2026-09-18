import { wedding } from '../config/wedding'

const EVENT_DURATION_HOURS = 6

function pad(value: number): string {
  return String(value).padStart(2, '0')
}

function toUtcStamp(date: Date): string {
  return (
    date.getUTCFullYear() +
    pad(date.getUTCMonth() + 1) +
    pad(date.getUTCDate()) +
    'T' +
    pad(date.getUTCHours()) +
    pad(date.getUTCMinutes()) +
    pad(date.getUTCSeconds()) +
    'Z'
  )
}

function getEventRange() {
  const start = new Date(wedding.event.isoDateTime)
  const end = new Date(start.getTime() + EVENT_DURATION_HOURS * 60 * 60 * 1000)
  return { start, end }
}

function getSummary(): string {
  return `Boda de ${wedding.couple.bride} & ${wedding.couple.groom}`
}

function getLocation(): string {
  return `${wedding.ceremony.venue}, ${wedding.ceremony.address}`
}

export function getGoogleCalendarUrl(): string {
  const { start, end } = getEventRange()
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: getSummary(),
    dates: `${toUtcStamp(start)}/${toUtcStamp(end)}`,
    details: wedding.phrase,
    location: getLocation(),
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

export function downloadIcsFile(): void {
  const { start, end } = getEventRange()
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Florencia y Matias//Boda//ES',
    'BEGIN:VEVENT',
    `UID:${Date.now()}@florenciaymatias`,
    `DTSTAMP:${toUtcStamp(new Date())}`,
    `DTSTART:${toUtcStamp(start)}`,
    `DTEND:${toUtcStamp(end)}`,
    `SUMMARY:${getSummary()}`,
    `DESCRIPTION:${wedding.phrase}`,
    `LOCATION:${getLocation()}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ]

  const blob = new Blob([lines.join('\r\n')], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'florencia-y-matias.ics'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
