const
  express = require('express'),
  moviesRouter = new express.Router(),
  moviesCtrl = require('../controllers/movies')

moviesRouter.route('/')
  .get(moviesCtrl.index)

moviesRouter.route('/search')
  .get(moviesCtrl.search)
  
moviesRouter.route('/:id')
  .get(moviesCtrl.show)


module.exports = moviesRouter