import validator from 'validator'

import { encode, decode } from '../utils/shortener'

import url from '../entities/url'

const { PORT = 8080 } = process.env

const get = (req, res, next) => {
  if (validator.isAlphanumeric(req.params.code)) {
    url.read({ id: decode(req.params.code) })
      .then(([ data ]) => { res.redirect(data.value) })
  } else {
    return next({ status: 400 })
  }
}

const post = async (req, res, next) => {
  if (!validator.isURL(req.body.url)) {
    return next({ status: 400 })
  }
  const doesExist = await url.exists({ value: req.body.url })
  if (doesExist) {
    url.read({ value: req.body.url })
      .then(([{ id }]) => {
        res.json({ url: `http://localhost:${PORT}/${encode(id)}` })
      })
  } else {
    url.write(req.body.url)
      .then(([ id ]) => {
        res.json({ url: `http://localhost:${PORT}/${encode(id)}` })
      })
  }
}

export default { get, post }
