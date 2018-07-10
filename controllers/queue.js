module.exports = {
  add: (req, res) => {
    const { user } = req
    const queueItem = user.findQueueItem(req.body.TMDB_id)
    if(queueItem) return res.json({ success: false, message: "already in queue" })
    user.queue.push(req.body)
    user.save().then(user => {
      res.json({ success: true, message: "queue item added", queue: user.queue })
    })
  },

  remove: (req, res) => {
    const { user } = req
    const queueItem = user.findQueueItem(req.params.TMDB_id)
    if(!queueItem) return res.json({ success: false, message: 'no queue item to remove' })
    queueItem.remove()
    user.save().then(({ queue }) => {
      res.json({ success: true, message: 'queue item removed', queue })
    })
  }
}