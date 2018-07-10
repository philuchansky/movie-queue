const
  mongoose = require('mongoose'),
  queueItemSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    TMDB_id: { type: Number, required: true },
    poster_path: { type: String, default: null }
  }, { timestamps: true })

queueItemSchema.index({ user: 1, TMDB_id: 1 }, { unique: true })

const QueueItem = mongoose.model('QueueItem', queueItemSchema)
module.exports = QueueItem