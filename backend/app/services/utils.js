export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min
