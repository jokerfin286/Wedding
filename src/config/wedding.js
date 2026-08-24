/*
  ВСЕ ФОТОГРАФИИ МЕНЯЮТСЯ ЗДЕСЬ.
  Можно указывать как локальный путь:
    /images/hero.jpg
  так и полный внешний URL:
    https://example.com/photo.jpg
*/
export const wedding = {
  couple: {
    groom: 'Александр',
    bride: 'Мария'
  },

  weddingDate: '2027-06-12T16:00:00',
  dateText: '12 июня 2027',

  // ФОТО №1 — главный фон первого экрана
  hero: {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=2400&q=90&auto=format&fit=crop',
    label: 'WEDDING DAY',
    subLabel: 'Приглашение на наш особенный день'
  },

  intro: {
    greeting: 'Дорогие',
    title: 'РОДНЫЕ И БЛИЗКИЕ!',
    text: 'Мы долго мечтали об этом дне и хотим разделить его с самыми дорогими людьми. Будем счастливы видеть вас рядом, когда начнётся наша новая глава.'
  },

  venue: {
    title: 'Место проведения',
    name: 'Усадьба «Лесная»',
    address: 'Минская область, живописный уголок у леса',
    // ФОТО №2 — фотография площадки
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1800&q=85',
    mapUrl: 'https://maps.google.com/'
  },

  music: {
    enabled: true,
    // Сюда можно поставить локальный файл: /music/wedding.mp3
    // или прямую ссылку на MP3.
    src: '/music/wedding.mp3',
    title: 'Our song'
  },

  timeline: [
    { time: '15:30', title: 'Сбор гостей', description: 'Встречаемся, знакомимся и настраиваемся на праздник.' },
    { time: '16:00', title: 'Церемония', description: 'Главный момент нашего дня.' },
    { time: '17:00', title: 'Фотографии', description: 'Прогулка и кадры, которые останутся с нами навсегда.' },
    { time: '18:00', title: 'Праздничный ужин', description: 'Тёплый вечер, музыка, тосты и много любви.' }
  ],

  details: [
    { title: 'Дресс-код', text: 'Будем рады лёгким праздничным образам в природных, спокойных оттенках. Главное — чтобы вам было комфортно.' },
    { title: 'Подарки', text: 'Для нас самый ценный подарок — ваше присутствие. Если захотите порадовать нас, будем благодарны за конверт.' },
    { title: 'Цветы', text: 'Пожалуйста, не переживайте о букетах — мы будем рады вашей улыбке гораздо больше.' },
    { title: 'Трансфер', text: 'Если вам понадобится трансфер, отметьте это в анкете. Мы заранее свяжемся и всё организуем.' }
  ],

  // ФОТО №3, №4, №5 — галерея. Можно вставлять любые URL.
  gallery: [
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=85',
    'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1400&q=85',
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85'
  ],

  rsvp: {
    enabled: true,
    deadline: 'до 20 мая 2027',
    fields: {
      companions: true,
      transfer: true,
      alcohol: true,
      meal: true,
      comment: true
    },
    alcoholOptions: ['Шампанское', 'Белое вино', 'Красное вино', 'Виски', 'Коньяк', 'Безалкогольные напитки'],
    mealOptions: ['Курица', 'Мясо', 'Рыба', 'Вегетарианское']
  },

  contactInformation: 'По всем вопросам мы всегда на связи.',

  theme: {
    background: '#f5f1ea',
    foreground: '#25231f',
    accent: '#9b8066',
    muted: '#756e65',
    border: 'rgba(37,35,31,.14)',
    headingFont: 'Cormorant Garamond, Georgia, serif',
    bodyFont: 'DM Sans, Arial, sans-serif',
    radius: '28px',
    motion: '700ms'
  }
};
