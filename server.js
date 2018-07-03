require('dotenv').config()
const
  express = require('express'),
  app = express(),
  { PORT } = process.env

app.get('/', (req, res) => {
  res.json({ message: "root" })
})

app.listen(PORT, (err) => {
  console.log(err || `Server running on port ${PORT}`)
})