const
  jwt = require('jsonwebtoken'),
  { JWT_SECRET } = process.env

module.exports = {
  generateToken: (user) => {
    const userData = user.toObject()
    delete userData.password
    return jwt.sign(userData, JWT_SECRET)
  }
}