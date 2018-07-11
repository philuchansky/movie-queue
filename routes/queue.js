const
  express = require('express'),
  queueRouter = new express.Router(),
  queueCtrl = require('../controllers/queue.js'),
  { verifyToken } = require('../auth.js')

queueRouter.use(verifyToken)

queueRouter.route('/')
  .get(queueCtrl.index)
  .post(queueCtrl.create)

queueRouter.delete('/:TMDB_id', queueCtrl.destroy)

module.exports = queueRouter