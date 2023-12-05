import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { getSearchMovies } from "@component/util/requests"

function Search() {
  const router = useRouter()
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    // Fetch search results based on query param
    const fetchSearchResults = async () => {
      try {
        const query = router.query.query // Get the search query from the URL
        if (query) {
          const results = await getSearchMovies(query)
          setSearchResults(results)
        }
      } catch (error) {
        console.error("Error fetching search results:", error)
      }
    }

    fetchSearchResults()
  }, [router.query.query])

  return (
    <div className="grid grid-cols-4 gap-4 max-w-6xl w-full">
      {searchResults.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  )
}

export default Search
