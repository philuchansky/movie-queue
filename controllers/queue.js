const
  User = require('../models/User.js')

module.exports = {
  add: (req, res) => {
    res.json(req.user)
  }
}