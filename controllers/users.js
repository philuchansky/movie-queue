const
  User = require('../models/User.js'),
  { generateToken } = require('../auth.js')

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
  },

  authenticate: (req, res) => {
    User.findOne({ email: req.body.email }).exec().then(user => {
      if(!user || !user.validPassword(req.body.password)) {
        res.json({ success: false, message: "invalid credentials" })
      } else {
        const token = generateToken(user)
        res.json({ success: true, token })
      }
    })
  }
}