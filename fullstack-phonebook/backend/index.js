const http = require('http'); // http module for creating server and connecting client to server
const cors = require('cors') // cors module for cross origin resource sharing
const mongoose = require('mongoose') // mongoose module for connecting to mongodb
const app = require('./app')
const { MONGODB_URI, PORT, ALLOWED_ORIGINS } = require('./utils/config')


mongoose.connect(MONGODB_URI)
.then(_result => {
  console.log('connected to MongoDB')
})
.catch((error) => {
  console.log('error connecting to MongoDB:', error.message)
})

app.use(cors({
  origin: ALLOWED_ORIGINS,
}))


const server = http.createServer(app) // create server with app.js
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})



