const User = require('../models/User.js')

module.exports = {
  index: (req, res) => {
    User.find({}).exec().then(users => res.json(users))
  },

  create: (req, res) => {
    User.create(req.body).then(user => res.json({
      success: true,
      message: "user created",
      user
    }))
  }
}