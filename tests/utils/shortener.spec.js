import test from 'ava'

import { encode, decode } from '../../src/utils/shortener'

test('ensure decoded encoded integer equals integer', t => {
  for (let i = 0; i < 100_000; ++i) {
    t.assert(decode(encode(i)) === i)
  }
})

test('ensure decoder throws error when not provided alphanumeric string', t => {
  const error = t.throws(() => decode('#0934'))
  t.is(error.message, 'Provided string was not alphanumeric')
})
