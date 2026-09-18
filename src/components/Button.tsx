import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-sans text-sm tracking-[0.18em] uppercase transition-colors duration-300 ease-out cursor-pointer'

  const styles =
    variant === 'primary'
      ? 'bg-[var(--color-olive)] text-[var(--color-bone)] hover:bg-[var(--color-olive-deep)]'
      : 'border border-[var(--color-gold)] text-[var(--color-text)] hover:bg-[var(--color-gold)]/10'

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  )
}
