const axios = require('axios')

module.exports = class ViaplayService {
    async getIMDBId(movieURL) {
      const moviePayload = await this.get(movieURL)

      if (!moviePayload) {
        return
      }

      const product = moviePayload.data['_embedded']['viaplay:blocks'][0]
      const content = product['_embedded']['viaplay:product'].content
      const imdb = content.imdb

      return imdb.id
    }

    async get(movieURL) {
      try {
        return await axios.get(movieURL)
      } catch (err) {
        return
      }
    }
}