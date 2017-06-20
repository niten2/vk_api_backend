// import { AREAS, COUNTS, FLOORS, CITIES } from "variables"

const AREAS = [
  { value: 'Советский', label: 'Советский' },
  { value: 'Центральный', label: 'Центральный' },
  { value: 'Железнодорожный', label: 'Железнодорожный' },
  { value: 'Октябрьский', label: 'Октябрьский' },
  { value: 'Свердловский', label: 'Свердловский' },
  { value: 'Кировский', label: 'Кировский' },
  { value: 'Ленинский', label: 'Ленинский' },
]

const COUNTS = [
  { value: 'студия', label: 'студия' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5+', label: '5+' },
]

const FLOORS = [
  { value: '1 этаж', label: '1 этаж' },
  { value: '2 этаж', label: '2 этаж' },
]

const CITIES = [
  { value: 'Красноярск', label: 'Красноярск' },
  { value: 'Сосновоборск', label: 'Сосновоборск' },
]

const PRICES = [
  { value: '1 000 000', label: '1 000 000' },
  { value: '1 500 000', label: '1 500 000' },
  { value: '2 000 000', label: '2 000 000' },
  { value: '2 500 000', label: '2 500 000' },
  { value: '3 000 000', label: '3 000 000' },
  { value: '5 000 000', label: '5 000 000' },
  { value: '10 000 000', label: '10 000 000' },
]

const DEADLINES = [
  { value: 'Сдан', label: 'Сдан' },

  { value: '2кв 2016 г.', label: '2кв 2016 г.' },
  { value: '3кв 2016 г.', label: '3кв 2016 г.' },
  { value: '4кв 2016 г.', label: '4кв 2016 г.' },

  { value: '1кв 2016 г.', label: '1кв 2016 г.' },
  { value: '2кв 2016 г.', label: '2кв 2016 г.' },
  { value: '3кв 2016 г.', label: '3кв 2016 г.' },
  { value: '4кв 2016 г.', label: '4кв 2016 г.' },

  { value: '1кв 2017 г.', label: '1кв 2017 г.' },
  { value: '2кв 2017 г.', label: '2кв 2017 г.' },
  { value: '3кв 2017 г.', label: '3кв 2017 г.' },
  { value: '4кв 2017 г.', label: '4кв 2017 г.' },
]

// config
const HEADER_SESSION_TOKEN='user-token'

export {
  AREAS,
  COUNTS,
  FLOORS,
  CITIES,
  PRICES,
  DEADLINES,

  HEADER_SESSION_TOKEN,
}
