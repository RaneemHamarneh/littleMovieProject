const API_KEY = process.env.PUBLIC_API_KEY
const BASE_URL = process.env.PUBLIC_BASE_URL
import { useEffect } from "react"

export const optionsTrending = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2FhZTlhZGM1MjA3Njk5ZDg1Y2ZmN2Y3YTMyMmI2ZSIsInN1YiI6IjY1NjZkNTIxYThiMmNhMDE0ZDUxYTIwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zm4mNzeuZSUcJFa8tVG6ldeD_8OY37zsxEAB8OKUpZI",
  },
}

export default function ActorsEffectFetching(actors) {
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/person/day?language=en-US&api_key=6caae9adc5207699d85cff7f7a322b6e",
      optionsTrending,
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        return response.json()
      })
      .then((data) => {
        {
          actors(data.results)
        }
      })
      .catch((e) => console.log(e))
  }, [])
}
