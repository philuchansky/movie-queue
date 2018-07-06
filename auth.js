const
  jwt = require('jsonwebtoken'),
  User = require('./models/User.js'),
  { JWT_SECRET } = process.env

module.exports = {
  generateToken: (user) => {
    const userData = user.toObject()
    delete userData.password
    return jwt.sign(userData, JWT_SECRET)
  },

  verifyToken: (req, res, next) => {
    const token = req.get('token')
    if(!token) return res.json({ success: false, message: "no token provided" })
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if(err) return res.json({ success: false, message: "invalid token" })
      User.findById(decoded._id).exec().then(user => {
        if(!user) return res.json({ success: false, message: "invalid token" })
        req.user = user
        next()
      })
    })
  }
}