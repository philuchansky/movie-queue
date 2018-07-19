import moment from 'moment'

export function tmdbImgUrl(posterPath, size = 'medium') {
  const baseImgUrl = 'https://image.tmdb.org/t/p/'
  const sizes = {
    tiny: 'w92/',
    thumb: 'w185/',
    small: 'w342/',
    medium: 'w500/',
    large: 'w780/',
    original: 'original'
  }
  return baseImgUrl + sizes[size] + posterPath
}

export function formattedDate(releaseDate) {
  return moment(releaseDate).format('MMMM Do YYYY')
}

export function getYear(releaseDate) {
  return (new Date(releaseDate)).getFullYear()
}