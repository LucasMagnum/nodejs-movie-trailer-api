const axios = require('axios')

module.exports = class ViaplayController {
  constructor(apiService, trailerService) {
    this.apiService = apiService
    this.trailerService = trailerService
  }

  async getTrailers(movieURL) {
    const movieId = await this.apiService.getIMDBId(movieURL)
    return await this.trailerService.getTrailers(movieId);
  }
}