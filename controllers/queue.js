module.exports = {
  add: (req, res) => {
    const { user } = req
    if(!user.queue.find((qi) => qi.TMDB_id === req.body.TMDB_id)) {
      user.queue.push(req.body)
      user.save().then(user => {
        res.json({ success: true, message: "queue item added", queue: user.queue })
      })
    } else {
      res.json({ success: false, message: "already in queue" })
    }
  }
}