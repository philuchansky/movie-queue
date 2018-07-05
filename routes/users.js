const
  express = require('express'),
  usersRouter = new express.Router(),
  usersCtrl = require('../controllers/users.js')

usersRouter.get('/', usersCtrl.index)

module.exports = usersRouter