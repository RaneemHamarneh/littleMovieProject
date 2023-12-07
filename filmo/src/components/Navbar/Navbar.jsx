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
      if (searchQuery.trim() !== "") {
        const searchResults = await getSearchMovies(searchQuery)

        router.push(`/search?query=${encodeURIComponent(searchQuery)}`)

        console.log("Search Results:", searchResults)

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
    <div className="sticky bg-cyan-700 top-0 z-[1000] flex items-center px-8 h-[72px] md:backdrop-blur-lg bg-opacity-80 ">
      <Link href="/">
        <img
          src="/images/White logo - no background.png"
          style={{ minWidth: "160px", maxWidth: "160px", height: "auto" }}
          alt="Logo"
          className="cursor-pointer select-none"
        />
      </Link>
      <div className="select-none ml-10 flex items-center space-x-4 md:space-x-8 lg:space-x-12 tracking-wide relative">
        <span className="text-gray-200 cursor-pointer" onClick={toggleGenres}>
          <span>Genres</span>
          {showGenres && (
            <div
              className="absolute bg-cyan-700 shadow-md mt-3 rounded-lg max-h-60 w-15 left-[-40px] overflow-hidden"
              onWheel={(e) => {
                const container = e.currentTarget
                container.scrollTop += e.deltaY
              }}
            >
              <div className="p-2" style={{ marginRight: "-16px" }}>
                {genres.map((genre) => (
                  <span
                    key={genre.id}
                    className=" block px-4 py-2 text-gray-200 hover:bg-cyan-900 cursor-pointer "
                    onClick={() => navigateToMoviesByGenre(genre.id)}
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </span>
        <span className="text-gray-200">|</span>
        <span
          className="text-gray-200 cursor-pointer"
          onClick={toggleMovies}
          style={{ position: "relative" }}
        >
          <span>Movies</span>
          {showMovies && (
            <div
              className="absolute bg-cyan-700 shadow-md mt-3 rounded-lg w-36"
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
                    className="block px-4 py-2 text-gray-200 hover:bg-cyan-900 cursor-pointer"
                    onClick={() => navigateToMovieCategory(category.title)}
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            </div>
          )}
        </span>

        <span className="text-gray-200">|</span>
        <span
          className="text-gray-200 cursor-pointer"
          onClick={() => router.push("/actors")}
        >
          Actors
        </span>
      </div>
      <input
        type="text"
        placeholder="Search on FILMO"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        className="bg-gray-200 px-3 py-1 rounded-md ml-auto"
      />
      <button
        className="text-gray-200 cursor-pointer mx-2"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  )
}

export default Navbar
