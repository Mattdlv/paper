import { getGoogleCalendarUrl, downloadIcsFile } from '../lib/calendar'

export function AddToCalendar() {
  const buttonClass =
    'inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-bone)]/50 px-6 py-2.5 font-sans text-[0.65rem] tracking-[0.2em] text-[var(--color-bone)] uppercase transition-colors duration-300 hover:bg-[var(--color-bone)]/10'

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <a href={getGoogleCalendarUrl()} target="_blank" rel="noopener noreferrer" className={buttonClass}>
        Google Calendar
      </a>
      <button type="button" onClick={downloadIcsFile} className={buttonClass}>
        iPhone / Outlook
      </button>
    </div>
  )
}
