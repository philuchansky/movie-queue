module.exports = {
  add: (req, res) => {
    const { user } = req
    const queueItemIndex = user.queue.findIndex((qi) => qi.TMDB_id === req.body.TMDB_id)
    if(queueItemIndex === -1) {
      user.queue.push(req.body)
      user.save().then(user => {
        res.json({ success: true, message: "queue item added", queue: user.queue })
      })
    } else {
      res.json({ success: false, message: "already in queue" })
    }
  },

  remove: (req, res) => {
    const { user } = req
    const queueItem = user.queue.find((qi) => qi.TMDB_id == req.params.TMDB_id)
    if(queueItem) {
      queueItem.remove()
      user.save().then(({ queue }) => {
        res.json({ success: true, message: 'queue item removed', queue })
      })
    } else res.json({ success: false, message: 'no queue item to remove' })
  }
}