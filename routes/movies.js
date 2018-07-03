const
  express = require('express'),
  moviesRouter = new express.Router(),
  moviesCtrl = require('../controllers/movies')

moviesRouter.route('/')
  .get(moviesCtrl.index)

module.exports = moviesRouter