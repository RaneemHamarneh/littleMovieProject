import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { getSearchMovies } from "@component/util/requests"
import Link from "next/link"
import Card from "@component/components/Card/Card"

function Search() {
  const router = useRouter()
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const query = router.query.query
        if (query) {
          const results = await getSearchMovies(query)
          setSearchResults(results)
        }
        setLoading(false)
      } catch (error) {
        console.error("Error fetching search results:", error)
        setLoading(false)
      }
    }

    fetchSearchResults()
  }, [router.query.query])

  return (
    <div className="grid grid-cols-5 gap-4 max-w-7xl w-full mx-auto page-container">
      {loading && <p>Loading...</p>}
      {!loading && searchResults.length === 0 && (
        <Link href="/">
          <div className="page-container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center pt-28">
            <div className="w-full flex flex-col items-center relative z-10">
              <h1 className="font-extrabold text-4xl text-center text-cyan-500 leading-tight mt-4 md:text-5xl">
                Sorry, <br />
                Page Not Found
              </h1>
            </div>
          </div>
        </Link>
      )}
      {!loading &&
        searchResults.map((movie) => <Card key={movie.id} movie={movie} />)}
    </div>
  )
}

export default Search
