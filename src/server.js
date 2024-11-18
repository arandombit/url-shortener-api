import cors from 'cors'
import express from 'express'
import helmet from 'helmet'

import logger from './utils/logger'
import stackTraceMask from './utils/stackTraceMask'

import url from './resources/url'

const { PORT = 80 } = process.env

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/:code', url.get)
app.post('/', url.post)

app.use((req, res, next) => next({ status: 404 }))
app.use(stackTraceMask(logger))

app.listen(PORT, () => console.log('Server listening on port:', PORT))
