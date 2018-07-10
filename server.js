require('dotenv').config()
const { PORT, MONGODB_URI } = process.env
const
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  logger = require('morgan'),
  moviesRouter = require('./routes/movies.js'),
  usersRouter = require('./routes/users.js'),
  queueRouter = require('./routes/queue.js')

mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
  console.log(err || "Connected to MongoDB")
})

app.use(logger('dev'))
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: "root" })
})

app.use('/api/movies', moviesRouter)
app.use('/api/users', usersRouter)
app.use('/api/queue', queueRouter)

app.listen(PORT, (err) => {
  console.log(err || `Server running on port ${PORT}`)
})