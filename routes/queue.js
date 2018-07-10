const
  express = require('express'),
  queueRouter = new express.Router(),
  queueCtrl = require('../controllers/queue.js'),
  { verifyToken } = require('../auth.js')

queueRouter.use(verifyToken)

queueRouter.post('/', queueCtrl.add)
queueRouter.delete('/:TMDB_id', queueCtrl.remove)

module.exports = queueRouter