const
  express = require('express'),
  usersRouter = new express.Router(),
  usersCtrl = require('../controllers/users.js'),
  { verifyToken } = require('../auth.js')

usersRouter.route('/')
  .get(usersCtrl.index)
  .post(usersCtrl.create)

usersRouter.post('/authenticate', usersCtrl.authenticate)

usersRouter.use(verifyToken)

usersRouter.route('/me')
  .get(usersCtrl.me)
  .patch(usersCtrl.update)

module.exports = usersRouter