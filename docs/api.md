FORMAT: 1A

# Movie Trailer API

# Viaplay [/viaplay]

## POST
Return list of trailers for given list of movies.

    + Request (application/json; charset=utf-8)

            {
                "movies": [
                    "https://content.viaplay.se/pc-se/film/arrival-2016"
                ]
            }


+ Response 200 (application/json; charset=utf-8)

    + Body

            [
                {
                    "movie": "https://content.viaplay.se/pc-se/film/arrival-2016",
                    "trailers": [
                        "https://www.youtube.com/watch?v=AMgyWT075KY"
                    ]
                }
            ]

    + Schema

            {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "movie": { "type": "string" },
                        "trailers": {
                            "type":  "array",
                            "items": { "type": "string" }
                        }
                    },
                    "additionalProperties": false
                }
            }


