# Movie Trailer API

![Continuos Integration](https://github.com/LucasMagnum/nodejs-movie-trailer-api/workflows/Node.js%20CI/badge.svg)


This is an example of application using NodeJS to return movie trailers for different streaming services.


## API

The documentation is available [here](./docs/api.md).

## Quick Start
    * Clone this project
    * Run `npm install`
    * Run `TMDB_API_KEY=<key here> TMDB_API_URL=https://api.themoviedb.org/3 npm start`
    * Access `http://localhost:3000/`

## Testing

This project uses Dredd as a testing tool, it reads the documentation in docs/api.md and run it against the project.

    npm test