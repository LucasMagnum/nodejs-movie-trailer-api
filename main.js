const express = require('express')
const config = require('./config')
const app = express()

app.post('/viaplay', (req, res) => {
  res.json([
    {
      'movie': 'xxx',
      'trailers': [
        'hausuhaduas'
      ]
    }
  ])
})

app.listen(config.port, () => {
  console.log(`API listening at http://localhost:${config.port}`)
})