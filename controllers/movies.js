const
  { OMDB_API_KEY } = process.env,
  cheerio = require('cheerio'),
  axios = require('axios'),
  apiClient = axios.create()

module.exports = {
  index: (req, res) => {
    apiClient ({ method: 'get', url: 'https://www.fandango.com' }).then(({ data }) => {
      const $ = cheerio.load(data)
      const featuredMovies = []
      $('#homeMovieCarousel li').each(function (i, el) {
        const movie = {
          title: $(this).text().trim().split('\n').shift().replace(/ *\([^)]*\) */g, ""),
          img: $(this).find('img').attr('src').replace("//", "")
        }
        featuredMovies.push(movie)
      })
      res.json(featuredMovies)
    })
  }
}