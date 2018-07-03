const
  express = require('express'),
  moviesRouter = new express.Router()

moviesRouter.route('/')
  .get((req, res) => {
    res.json({ message: 'movies root.' })
  })

module.exports = moviesRouter