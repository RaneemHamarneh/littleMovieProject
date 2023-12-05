// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
import { NextResponse } from "next/server"

async function fetchMovies() {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWVlOGM2NzlkM2YyM2JhZjMyMzEwMmUyNjM5N2MyMSIsInN1YiI6IjY1NjRkNGI2YTZjMTA0MDBmZWIyMDU1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uTlxggxcCxFuw8DKmmM_JfoxCQyC-Nv1yr7B-D0TsoE",
      },
    },
  )
  const movies = await response.json()
  return movies
}

export default async function GET(request) {
  const movies = await fetchMovies()
  return NextResponse.json(movies)
}
