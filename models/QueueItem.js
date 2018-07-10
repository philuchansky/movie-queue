const
  mongoose = require('mongoose'),
  queueItemSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    TMDB_id: Number,
    poster_path: String
  }, { timestamps: true })

const QueueItem = mongoose.model('QueueItem', queueItemSchema)
module.exports = QueueItem