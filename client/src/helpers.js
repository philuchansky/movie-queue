export function posterUrl(posterPath, size = 'medium') {
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