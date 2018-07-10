const QueueItem = require('../models/QueueItem.js')

module.exports = {
  index: (req, res) => {
    QueueItem.find({ user: req.user }).exec()
      .then(queueItems => res.json(queueItems))
  },

  create: (req, res) => {
    QueueItem.create({ user: req.user, ...req.body })
      .then(queueItem => res.json({ success: true, message: 'queue item added', queueItem }))
      .catch(err => {
        if(err.code === 11000) res.json({ success: false, message: 'queue item already exists.' })
        else res.json({ success: false, message: 'there was a problem.' })
      })
  },

  destroy: (req, res) => {
    res.json({ message: 'deleting queue item' })
  }
}