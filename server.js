require('dotenv').config()
const
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  { PORT, MONGODB_URI } = process.env

mongoose.connect(MONGODB_URI, (err) => {
  console.log(err || "Connected to MongoDB")
})

app.get('/', (req, res) => {
  res.json({ message: "root" })
})

app.listen(PORT, (err) => {
  console.log(err || `Server running on port ${PORT}`)
})