const QueueItem = require('../models/QueueItem.js')

module.exports = {
  index: (req, res) => {
    QueueItem.find({ user: req.user }).select('-user').exec()
      .then(queueItems => res.json(queueItems))
  },

  create: (req, res) => {
    QueueItem.create({ user: req.user._id, ...req.body })
      .then(queueItem => res.json({ success: true, message: 'queue item added', queueItem }))
      .catch(err => {
        if(err.code === 11000) res.status(409).json({ success: false, message: 'queue item already exists' })
        else res.status(403).json({ success: false, message: 'there was a problem' })
      })
  },

  destroy: (req, res) => {
    QueueItem.findOneAndRemove({ TMDB_id: req.params.TMDB_id }).select('-user').exec()
      .then(queueItem => {
        if(!queueItem) return res.status(409).json({ success: false, message: 'no queue item to remove' })
        res.json({ success: true, message: 'queue item removed', queueItem })
      })
  }
}