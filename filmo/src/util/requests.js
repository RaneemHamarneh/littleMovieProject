const API_KEY = process.env.PUBLIC_API_KEY
const BASE_URL = process.env.PUBLIC_BASE_URL

export const getActors = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWVlOGM2NzlkM2YyM2JhZjMyMzEwMmUyNjM5N2MyMSIsInN1YiI6IjY1NjRkNGI2YTZjMTA0MDBmZWIyMDU1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uTlxggxcCxFuw8DKmmM_JfoxCQyC-Nv1yr7B-D0TsoE",
    },
  }

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/person/day?language=en-US",
      options,
    )
    const data = await response.json()
    return data.results || []
  } catch (error) {
    console.error("Error fetching trending persons:", error)
    return []
  }
}

export async function getGenres() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWVlOGM2NzlkM2YyM2JhZjMyMzEwMmUyNjM5N2MyMSIsInN1YiI6IjY1NjRkNGI2YTZjMTA0MDBmZWIyMDU1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uTlxggxcCxFuw8DKmmM_JfoxCQyC-Nv1yr7B-D0TsoE",
    },
  }

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      options,
    )
    const data = await response.json()
    return data.genres || []
  } catch (error) {
    console.error("Error fetching genres:", error)
    return []
  }
}

export async function getTopRatedMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWVlOGM2NzlkM2YyM2JhZjMyMzEwMmUyNjM5N2MyMSIsInN1YiI6IjY1NjRkNGI2YTZjMTA0MDBmZWIyMDU1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uTlxggxcCxFuw8DKmmM_JfoxCQyC-Nv1yr7B-D0TsoE",
    },
  }

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options,
    )
    const data = await response.json()
    return data.results || []
  } catch (error) {
    console.error("Error fetching genres:", error)
    return []
  }
}

export async function getPopularMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWVlOGM2NzlkM2YyM2JhZjMyMzEwMmUyNjM5N2MyMSIsInN1YiI6IjY1NjRkNGI2YTZjMTA0MDBmZWIyMDU1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uTlxggxcCxFuw8DKmmM_JfoxCQyC-Nv1yr7B-D0TsoE",
    },
  }

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options,
    )
    const data = await response.json()
    return data.results || []
  } catch (error) {
    console.error("Error fetching genres:", error)
    return []
  }
}

export async function getLatestMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWVlOGM2NzlkM2YyM2JhZjMyMzEwMmUyNjM5N2MyMSIsInN1YiI6IjY1NjRkNGI2YTZjMTA0MDBmZWIyMDU1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uTlxggxcCxFuw8DKmmM_JfoxCQyC-Nv1yr7B-D0TsoE",
    },
  }

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/latest",
      options,
    )
    const data = await response.json()
    return data.results || []
  } catch (error) {
    console.error("Error fetching genres:", error)
    return []
  }
}

export async function getNowPlaying() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWVlOGM2NzlkM2YyM2JhZjMyMzEwMmUyNjM5N2MyMSIsInN1YiI6IjY1NjRkNGI2YTZjMTA0MDBmZWIyMDU1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uTlxggxcCxFuw8DKmmM_JfoxCQyC-Nv1yr7B-D0TsoE",
    },
  }

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options,
    )
    const data = await response.json()
    return data.results || []
  } catch (error) {
    console.error("Error fetching genres:", error)
    return []
  }
}

export async function getUpComing() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWVlOGM2NzlkM2YyM2JhZjMyMzEwMmUyNjM5N2MyMSIsInN1YiI6IjY1NjRkNGI2YTZjMTA0MDBmZWIyMDU1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uTlxggxcCxFuw8DKmmM_JfoxCQyC-Nv1yr7B-D0TsoE",
    },
  }

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options,
    )
    const data = await response.json()
    return data.results || []
  } catch (error) {
    console.error("Error fetching genres:", error)
    return []
  }
}

export async function getTrendingMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWVlOGM2NzlkM2YyM2JhZjMyMzEwMmUyNjM5N2MyMSIsInN1YiI6IjY1NjRkNGI2YTZjMTA0MDBmZWIyMDU1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uTlxggxcCxFuw8DKmmM_JfoxCQyC-Nv1yr7B-D0TsoE",
    },
  }

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options,
    )
    const data = await response.json()
    return data.results || []
  } catch (error) {
    console.error("Error fetching genres:", error)
    return []
  }
}

//Maybe useful for later use.

// export const getMovies = async (query) => {
//   const res = await fetch(
//     `${BASE_URL}/search/movie&api_key=${API_KEY}&query=${query}`,
//   )
//   const data = await res.json()
//   return data.results
// }

// export const getMovieDetails = async (id) => {
//   const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
//   const data = await res.json()
//   return data.results
// }

// export const getSimilarMovies = async (id) => {
//   const res = await fetch(`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`)
//   const data = await res.json()
//   return data.results
// }
