import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { getMoviesByGenre } from "@component/util/requests"
function Movies() {
  const router = useRouter()
  const [movies, setMovies] = useState([])

  useEffect(() => {
    // fetches movies based on the genre query parameter
    async function fetchMovies() {
      // Get the genre ID from the query parameter
      const genreId = router.query.genre
      if (genreId) {
        const fetchedMovies = await getMoviesByGenre(genreId)
        setMovies(fetchedMovies)
      }
    }

    fetchMovies()
  }, [router.query.genre])

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

export default Movies
