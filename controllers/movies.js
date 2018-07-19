const
  { TMDB_API_KEY } = process.env,
  axios = require('axios'),
  _ = require('lodash')
  apiClient = axios.create({ baseURL: 'https://api.themoviedb.org/3' })

module.exports = {
  index: (req, res) => {
    apiClient.get(`/movie/now_playing?api_key=${TMDB_API_KEY}`)
      .then(({ data: { results } }) => res.json(results))
      .catch(({ response: { data } }) => res.json(data))
  },

  show: (req, res) => {
    const getMovie = apiClient.get(`/movie/${req.params.id}?api_key=${TMDB_API_KEY}`)
    const getMovieRecommendations = apiClient.get(`/movie/${req.params.id}/recommendations?api_key=${TMDB_API_KEY}`)
    const getMovieCredits = apiClient.get(`/movie/${req.params.id}/credits?api_key=${TMDB_API_KEY}`)
    const getMovieVideos = apiClient.get(`/movie/${req.params.id}/videos?api_key=${TMDB_API_KEY}`)

    Promise.all([getMovie, getMovieRecommendations, getMovieCredits, getMovieVideos])
    .then(([ movie, recommendations, credits, videos ]) => {
      
      const formattedRecommendations = recommendations.data.results.map(({ title, id, poster_path }) => (
        { title, id, poster_path }
      ))
      const { cast, crew } = credits.data
      const trailer = videos.data.results.find(v => v.type === "Trailer")
      res.json({
        ...movie.data,
        recommendations: formattedRecommendations,
        cast: cast.slice(0, 5),
        crew: crew.slice(0, 5),
        trailer: trailer || null
      })
    })
    // .catch(({ response: { data } }) => res.json(data))
  },

  search: (req, res) => {
    apiClient.get(`/search/movie?api_key=${TMDB_API_KEY}&query=${req.query.term}`)
    .then(({ data }) => {
      const pathsToInclude = ['id', 'title', 'poster_path', 'release_date']
      const formattedResults = data.results.map(r => _.pick(r, pathsToInclude))
      res.json(formattedResults)
    })
    .catch(({ response: { data } }) => res.json(data))
  }
}