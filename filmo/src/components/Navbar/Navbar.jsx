import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { getGenres, getSearchMovies } from "@component/util/requests"

function Navbar() {
  const router = useRouter()
  const [showGenres, setShowGenres] = useState(false)
  const [showMovies, setShowMovies] = useState(false)
  const [genres, setGenres] = useState([])
  const [movieCategories, setMovieCategories] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedGenres = await getGenres()
        setGenres(fetchedGenres)

        setMovieCategories([
          { title: "Top Rated" },
          { title: "Popular" },
          { title: "Latest" },
          { title: "Now Playing" },
          { title: "Upcoming" },
        ])
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [])

  const toggleGenres = () => {
    setShowGenres(!showGenres)
  }

  const toggleMovies = () => {
    setShowMovies(!showMovies)
  }

  const navigateToMoviesByGenre = (genreId) => {
    router.push(`/movies?genre=${genreId}`)
    setShowGenres(false)
  }

  const navigateToMovieCategory = (category) => {
    router.push(`/movies/${category.toLowerCase().replace(" ", "-")}`)
    setShowMovies(false)
  }

  const handleSearch = async () => {
    try {
      // Check if the search query is not empty
      if (searchQuery.trim() !== "") {
        const searchResults = await getSearchMovies(searchQuery)

        // Redirect to search results page and pass search query as query param
        router.push(`/search?query=${encodeURIComponent(searchQuery)}`)

        // Log the search results for reference
        console.log("Search Results:", searchResults)

        // Clear search query after redirecting
        setSearchQuery("")
      }
    } catch (error) {
      console.error("Error fetching search results:", error)
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="sticky bg-[#000] top-0 z-[1000] flex items-center px-8 h-[72px]">
      <Link href="/">
        <img
          src="/images/White logo - no background.png"
          style={{ minWidth: "160px", maxWidth: "160px", height: "auto" }}
          alt="Logo"
          className="cursor-pointer select-none"
        />
      </Link>
      <div className="select-none ml-10 flex items-center space-x-4 md:space-x-8 lg:space-x-12 tracking-wide relative">
        <span className="text-white cursor-pointer" onClick={toggleGenres}>
          <span>Genres</span>
          {showGenres && (
            <div
              className="absolute bg-black shadow-md mt-3 rounded-lg max-h-60 w-15 left-[-40px] overflow-hidden"
              onWheel={(e) => {
                const container = e.currentTarget
                container.scrollTop += e.deltaY
              }}
            >
              <div className="p-2" style={{ marginRight: "-16px" }}>
                {genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="block px-4 py-2 text-white hover:bg-gray-700 cursor-pointer"
                    onClick={() => navigateToMoviesByGenre(genre.id)}
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </span>
        <span className="text-white">|</span>
        <span
          className="text-white cursor-pointer"
          onClick={toggleMovies}
          style={{ position: "relative" }}
        >
          <span>Movies</span>
          {showMovies && (
            <div
              className="absolute bg-black shadow-md mt-3 rounded-lg w-36"
              style={{ top: "100%", right: -50 }}
              onWheel={(e) => {
                const container = e.currentTarget
                container.scrollTop += e.deltaY
              }}
            >
              <div className="p-2">
                {movieCategories.map((category, index) => (
                  <span
                    key={index}
                    className="block px-4 py-2 text-white hover:bg-gray-700 cursor-pointer"
                    onClick={() => navigateToMovieCategory(category.title)}
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            </div>
          )}
        </span>

        {/* Retain other Navbar items */}
        <span className="text-white">|</span>
        <span
          className="text-white cursor-pointer"
          onClick={() => router.push("/actors")}
        >
          Actors
        </span>
      </div>
      {/* Search Input Field */}
      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        className="bg-gray-200 px-3 py-1 rounded-md ml-auto"
      />
      {/* Search Button */}
      <button className="text-white cursor-pointer" onClick={handleSearch}>
        Search
      </button>
    </div>
  )
}

export default Navbar
