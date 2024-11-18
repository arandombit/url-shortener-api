import validator from 'validator'

const alphaNumerals = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('')
const base = alphaNumerals.length

export const encode = i => {
  if (i === 0) return alphaNumerals[0]
  let s = ''
  while (i > 0) {
    s += alphaNumerals[i % base]
    i = parseInt(i / base, 10)
  }
  return s.split('').reverse().join('')
}

export const decode = s => {
  if (!validator.isAlphanumeric(s)) {
    throw new Error('Provided string was not alphanumeric')
  }
  let i = 0
  for (let c of s) {
    i = i * base + alphaNumerals.indexOf(c)
  }
  return i
}
