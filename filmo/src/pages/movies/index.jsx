import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { getMoviesByGenre } from "@component/util/requests"
import Card from "@component/components/Card/Card" // Update the path to your Card component

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
      <div className=" page-container grid grid-cols-5 gap-4 max-w-7xl w-full mx-auto no-scrollbar">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Movies
