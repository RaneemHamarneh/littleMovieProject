import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import {
  getGenres,
  getTopRatedMovies,
  getPopularMovies,
  getLatestMovies,
  getNowPlaying,
  getUpComing,
} from "@component/util/requests"

function Navbar() {
  const router = useRouter()
  const [showGenres, setShowGenres] = useState(false)
  const [showMovies, setShowMovies] = useState(false)
  const [genres, setGenres] = useState([])
  const [movieCategories, setMovieCategories] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedGenres = await getGenres()
        setGenres(fetchedGenres)

        const topRated = await getTopRatedMovies()
        const popular = await getPopularMovies()
        const latest = await getLatestMovies()
        const nowPlaying = await getNowPlaying()
        const upcoming = await getUpComing()

        setMovieCategories([
          { title: "Top Rated", data: topRated },
          { title: "Popular", data: popular },
          { title: "Latest", data: latest },
          { title: "Now Playing", data: nowPlaying },
          { title: "Upcoming", data: upcoming },
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
    setShowGenres(false) // Hide genres dropdown after selection
  }

  const navigateToMovieCategory = (category) => {
    router.push(`/movies/${category.toLowerCase().replace(" ", "-")}`)
    setShowMovies(false) // Hide movies dropdown after category selection
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
        <span className="text-white cursor-pointer" onClick={toggleMovies}>
          <span>Movies</span>
          {showMovies && (
            <div
              className="absolute bg-black shadow-md mt-3 rounded-lg max-h-60 w-15 right-[260px] overflow-hidden"
              onWheel={(e) => {
                const container = e.currentTarget
                container.scrollTop += e.deltaY
              }}
            >
              <div className="p-2" style={{ marginRight: "-16px" }}>
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
        <span className="text-white">|</span>
        <a className="text-white cursor-pointer ml-auto">
          <span>Search</span>
        </a>
      </div>
      <button className="ml-auto">button</button>
    </div>
  )
}

export default Navbar
