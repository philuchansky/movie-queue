const
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs')

const releaseSchema = new mongoose.Schema({
  TMDB_id: Number,
  poster_path: String
})

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  queue: [releaseSchema]
})

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password)
}

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

userSchema.pre('save', function(next) {
  if(this.isModified('password')) this.password = this.generateHash(this.password)
  next()
})

const User = mongoose.model('User', userSchema)
module.exports = User