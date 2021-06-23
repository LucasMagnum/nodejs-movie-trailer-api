const axios = require('axios')
const config = require('../config')


module.exports = class TMDBService {
  constructor() {
    this.apiKey = config.tmdbAPIKey
    this.apiURL = config.tmdbAPIURL
  }

  async getTrailers(movieId) {
    const videos = await this.get(movieId)

    if (!videos) {
      return []
    }

    let results = []

    const videosList = videos.data.results

    for (const video of videosList) {
      results.push(`https://www.youtube.com/watch?v=${video.key}`)
    }

    return results
  }

  async get(movieId) {
    try {
      return await axios.get(`${this.apiURL}/movie/${movieId}/videos?api_key=${this.apiKey}`)
    } catch (err) {
      return
    }
  }

}