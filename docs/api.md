FORMAT: 1A

# Movie Trailer API

# Viaplay [/viaplay]

## List of trailers [POST]
Return list of trailers for a given list of movies.

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

## Invalid Payload [POST]
Return an error when a movies list is not given

+ Response 400 (application/json; charset=utf-8)

    + Body

            {
                "error_message": "Payload must contain `movies` attribute.",
            }

    + Schema

            {
                "type": "object",
                "properties": {
                    "error_message": { "type": "string" }
                },
                "additionalProperties": false
            }
