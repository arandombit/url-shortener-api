import bunyan from 'bunyan'

export default bunyan.createLogger({
  name: 'url-shortener-api',
  streams: [{
    path: 'url-shortener-api.log',
    stream: process.stderr
  }]
})
