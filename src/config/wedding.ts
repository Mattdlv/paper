export const wedding = {
  couple: {
    bride: 'Florencia',
    groom: 'Matias',
    initials: 'F & M',
  },

  event: {
    date: '2026-12-04',
    isoDateTime: '2026-12-04T19:30:00-03:00',
    displayDate: '04 de Diciembre, 2026',
    time: '19:30hs',
  },

  ceremony: {
    name: 'MiniGolf',
    venue: 'Minigolf La Rioja Eventos',
    address: 'F5302 La Rioja',
    date: '04/12/26',
    time: '19:30hs',
    mapUrl: 'https://share.google/piirBHClJQuM3cMqc',
    instagram: 'minigolflarioja',
  },

  timeline: [
    {
      time: '19:30',
      title: 'Ceremonia',
      description: 'Inicio del evento',
    },
    {
      time: '',
      title: 'Recepción',
      description: 'Bienvenida y brindis',
    },
    {
      time: '',
      title: 'Cena y Baile',
      description: 'Diversión y celebración',
    },
    {
      time: '03:00',
      title: 'Mesa Dulce',
      description: 'Cierre con dulzura',
    },
  ],

  dressCode: {
    label: 'Elegante Sport',
    avoidColors: ['Verde oliva', 'Blanco', 'Beige', 'Lavanda'],
    note: 'Estos colores están reservados para la fiesta — ¡gracias por respetarlos!',
  },

  contribution: {
    message: 'El valor de la tarjeta incluye la cena y la celebración. Se abona por transferencia.',
    adultPrice: '$65.000',
    kidsPrice: '$45.000',
    alias: 'mf.tarjeta',
    holder: 'Maria Florencia Ponce',
    platform: 'Mercado Pago',
  },

  gifts: {
    message:
      'Si además quieren tener un gesto con nosotros, nos pueden hacer un regalo. Y si tienen ganas de algo más especial, escribannos por privado y lo charlamos con gusto.',
    alias: 'mf.regalo',
    holder: 'De la Vega Cervantes Matias',
    platform: 'Lemon',
  },

  // TODO: reemplazar por el audio real de fondo del sitio.
  music: {
    src: '/audio/track.mp3',
    title: 'Nuestra canción',
  },

  playlist: {
    url: 'https://open.spotify.com/playlist/5gQbQTXRewEyyVpdkwqyJ2?si=GpoWifeDRleLz_s7Fc-hHA',
    message: 'Ayudanos a armar la playlist de la fiesta. Sumá esa canción que no puede faltar.',
  },

  menu: {
    style: 'Finger Food',
    adult: {
      price: '$65.000',
      items: [
        'Bruschettas en variedad',
        'Escabeches',
        'Empanadas criollas',
        'Empanadas de jamón y queso',
        'Empanadas árabes',
        'Tacos mixtos',
        'Ensalada César',
        'Tabla de fiambres',
        'Cazuela de bondiola al disco',
        'Kebabs',
        'Panes artesanales',
      ],
      dessert: 'Copa helada Minigolf',
      drinks: 'Línea Coca-Cola, soda, agua mineral',
    },
    kids: {
      price: '$45.000',
      items: ['Empanadas de jamón y queso', 'Lomito o milanesa con papas fritas'],
      dessert: 'Postre helado',
      drinks: 'Línea Coca-Cola, agua mineral',
    },
  },

  phrase: 'Dos historias, un mismo camino.',
} as const

export type Wedding = typeof wedding
