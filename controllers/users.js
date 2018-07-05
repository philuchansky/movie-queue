const User = require('../models/User.js')

module.exports = {
  index: (req, res) => {
    User.find({}).exec().then(users => res.json(users))
  }
}