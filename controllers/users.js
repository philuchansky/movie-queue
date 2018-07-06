const
  User = require('../models/User.js'),
  { generateToken } = require('../auth.js')

module.exports = {
  index: (req, res) => {
    User.find({}).exec().then(users => {
      res.json(users)
    })
  },

  create: (req, res) => {
    User.create(req.body).then(user => {
      const token = generateToken(user)
      res.json({ success: true, message: "user created, token attached", user, token })
    })
  },

  me: (req, res) => {
    res.json(req.user)
  },

  update: (req, res) => {
    if(!req.body.password) delete req.body.password
    Object.assign(req.user, req.body)
    req.user.save().then(updatedUser => {
      const token = generateToken(updatedUser)
      res.json({ success: true, message: "user updated", token })
    })
  },

  authenticate: (req, res) => {
    User.findOne({ email: req.body.email }).exec().then(user => {
      if(!user || !user.validPassword(req.body.password)) {
        res.json({ success: false, message: "invalid credentials" })
      } else {
        const token = generateToken(user)
        res.json({ success: true, message: "token attached", token })
      }
    })
  }
}