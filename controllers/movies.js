const
  { OMDB_API_KEY } = process.env,
  cheerio = require('cheerio'),
  axios = require('axios'),
  apiClient = axios.create()

module.exports = {
  index: (req, res) => {
    apiClient({ method: 'get', url: 'https://www.fandango.com' }).then(({ data }) => {
      const $ = cheerio.load(data)
      const featuredMovies = []
      $('#homeMovieCarousel li').each(function (i, el) {
        const movie = {
          title: $(this).text().trim().split('\n').shift().replace(/ *\([^)]*\) */g, ""),
          img: $(this).find('img').attr('src').replace("//", "http://")
        }
        featuredMovies.push(movie)
      })
      res.json(featuredMovies)
    })
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