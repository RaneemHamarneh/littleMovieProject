import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { getMoviesByGenre } from "@component/util/requests"
function MoviesByGenre() {
  const router = useRouter()
  const { genreId } = router.query
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      try {
        if (genreId) {
          const fetchedMovies = await getMoviesByGenre(genreId)
          setMovies(fetchedMovies)
        }
      } catch (error) {
        console.error("Error fetching movies by genre:", error)
      }
    }

    fetchMoviesByGenre()
  }, [genreId])

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 max-w-6xl w-full">
        {movies.map((movie) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </div>
    </div>
  )
}

export default MoviesByGenre
