const
  { OMDB_API_KEY, TMDB_API_KEY, TMDB_ACCESS_TOKEN } = process.env,
  cheerio = require('cheerio'),
  axios = require('axios'),
  apiClient = axios.create({ baseURL: 'https://api.themoviedb.org/3' })

module.exports = {
  index: (req, res) => {
    apiClient.get(`/movie/now_playing?api_key=${TMDB_API_KEY}`)
      .then(({ data: { results } }) => res.json(results))
      .catch(({ response: { data } }) => res.json(data))
  },

  show: (req, res) => {
    const apiUrl = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${req.params.title}`
    apiClient({ method: 'get', url: apiUrl}).then(({ data }) => {
      res.json(data)
    })
  },

  search: (req, res) => {
    const apiUrl = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${req.query.q}&type=movie`
    apiClient({ method: 'get', url: apiUrl}).then(({ data }) => {
      res.json({
        total: data.totalResults,
        results: data.Search
      })
    })
  }
}