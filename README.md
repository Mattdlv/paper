# Florencia & Matias — Invitación de boda

Invitación web animada, mobile-first, construida con React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion.

## Desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura

```
src/
├── components/   componentes reutilizables (Button, Reveal, Countdown, etc.)
├── sections/     una sección por bloque de la invitación (Hero, Ceremony, Menu, etc.)
├── config/       wedding.ts — toda la información del evento en un solo lugar
├── hooks/        useCountdown, useLockBodyScroll
├── lib/          sistema de animación (motion.ts)
└── styles/       tokens.css — paleta, tipografía, spacing, motion
```

Toda la información de la boda (fecha, ceremonia, menú, dress code, etc.) vive en
[`src/config/wedding.ts`](src/config/wedding.ts) — para actualizar contenido, editar solo ese archivo.

## Pendiente

- Canción de fondo real en `public/audio/track.mp3` (el reproductor ya está armado en `src/components/MusicPlayer.tsx`)
- Confirmar que la playlist de Spotify esté marcada como colaborativa para que los invitados puedan sumar canciones
- Una vez desplegado el sitio: agregar `og:url` y `og:image` en `index.html` con el dominio final y una foto de la pareja, para que la vista previa en WhatsApp se vea completa
