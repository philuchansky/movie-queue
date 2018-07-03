require('dotenv').config()
const { PORT, MONGODB_URI } = process.env
const
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  moviesRouter = require('./routes/movies.js')

mongoose.connect(MONGODB_URI, (err) => {
  console.log(err || "Connected to MongoDB")
})

app.get('/', (req, res) => {
  res.json({ message: "root" })
})

app.use('/api/movies', moviesRouter)

app.listen(PORT, (err) => {
  console.log(err || `Server running on port ${PORT}`)
})