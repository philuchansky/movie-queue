const
  express = require('express'),
  usersRouter = new express.Router()

usersRouter.get('/', (req, res) => {
  res.json({ message: "users router root." })
})

module.exports = usersRouter