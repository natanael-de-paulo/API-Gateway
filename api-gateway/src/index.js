const httpProxy = require('express-http-proxy')
const express = require('express')
const app = express()
const logger = require('morgan')

app.use(logger('dev'))

function selectProxyHost(req) {
  if (req.path.startsWith('/products')) return 'http://localhost:3001/'
  else if (req.path.startsWith('/users')) return 'http://localhost:3002/'
}

app.use((req, res, next) => {
  httpProxy(selectProxyHost(req))(req, res, next)
})

app.get('/', (req, res, next) => {
  res.send('Welcome')
})

app.listen(3000, () => {
  console.log('API Gateway running!')
})
