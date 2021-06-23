const express = require('express')
const app = express()

const config = require('./config')

const ViaplayController = require('./controllers/viaplay')
const TMDBService = require('./services/tmdb')
const ViaplayService = require('./services/viaplay')

app.use(express.json());

app.get("/", (request, response) => {
  response.json({
    "project": "Movie Trailer API",
    "endpoints": {
        "viaplay": `/viaplay`,
    },
    "author": "Lucas Magnum",
    "repository": "https://github.com/lucasmagnum/nodejs-movie-trailer-api"
  })

})

app.post('/viaplay', async (request, response) => {
  const movies = request.body?.movies

  if (!movies) {
    return response.status(400).json({
      'error_message': 'Payload must contain `movies` attribute.'
    })
  }

  const viaPlayController = new ViaplayController(
    new ViaplayService(),
    new TMDBService()
  )

  let responseJSON = []

  for (const movieURL of movies) {
    responseJSON.push({
      'movie': movieURL,
      'trailers': await viaPlayController.getTrailers(movieURL)
    })
  }

  return response.json(responseJSON)
})


app.listen(config.port, () => {
  console.log(`API listening at http://localhost:${config.port}`)
})