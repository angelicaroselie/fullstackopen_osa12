const express = require('express')
const morgan = require('morgan')
const app = express()


const { requestLogger, unknownEndpoint, errorHandler } = require('./middleware') // require middlewares
const indexRouter = require('./controllers/index') // require index router
const apiRouter = require('./controllers/api') // require api router
const corsMiddleware = require('./middleware/headers')
const path = require('path')

const CLIENT_BUILD_PATH = path.join(__dirname, "dist") // path to build folder

app.use(express.static(CLIENT_BUILD_PATH)) // serve static files from build folder

app.use(corsMiddleware) // cors middleware, that allows cross origin resource sharing

app.use(express.json()) // json parser middleware

app.use(requestLogger) // first middleware, request logger


morgan.token('post-data', (req, res) => { // morgan middleware for logging post requests
  const body = req.body
  let data = { name: body.name, number: body.number } 
  return JSON.stringify(data)
}
)

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :post-data')) // loggin post requests

app.use('', indexRouter) // index router, all routes starting with / are handled by indexRouter
app.use('/api', apiRouter) // api router, all routes starting with /api are handled by apiRouter

app.get('/', (req, res) => { // configure express to serve index.html file from build folder
  res.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'), (error) => {
    res.status(500).send('server error:', error.message)
  })
})

app.use(unknownEndpoint)
app.use(errorHandler) // last middleware, error handler


module.exports = app;