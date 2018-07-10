const
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs')

const queueItemSchema = new mongoose.Schema({
  TMDB_id: Number,
  poster_path: String
})

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  queue: [queueItemSchema]
})

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password)
}

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

userSchema.methods.findQueueItem = function(TMDB_id) {
  return this.queue.find((q) => q.TMDB_id == TMDB_id) || null
}

userSchema.pre('save', function(next) {
  if(this.isModified('password')) this.password = this.generateHash(this.password)
  next()
})

const User = mongoose.model('User', userSchema)
module.exports = User