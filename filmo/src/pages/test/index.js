import React from "react"
import {
  getTrendingMovies,
  getActors,
  getGenres,
  getTopRatedMovies,
  getPopularMovies,
  getLatestMovies,
  getNowPlaying,
  getUpComing,
} from "@component/util/requests"

export async function getServerSideProps() {
  const movies = await getTrendingMovies()
  const actors = await getActors()
  const genres = await getGenres()
  const topMovies = await getTopRatedMovies()
  const popularMovies = await getPopularMovies()
  const latestMovies = await getLatestMovies()
  const nowPlayingMovies = await getNowPlaying()
  const upComingMovies = await getUpComing()

  return {
    props: {
      movies,
      actors,
      genres,
      topMovies,
      popularMovies,
      latestMovies,
      nowPlayingMovies,
      upComingMovies,
    },
  }
}

function index({ nowPlayingMovies }) {
  return (
    <div>
      {/* <div className="grid grid-cols-4 gap-4 max-w-6xl w-full">
        {genres.map((genre) => (
          <div key={genre.id}>{genre.name}</div>
        ))}
      </div> */}
      {/* <div className="grid grid-cols-4 gap-4 max-w-6xl w-full">
        {actors.map((actor) => (
          <div key={actor.id}>{actor.name}</div>
        ))}
      </div> */}
      <div className="grid grid-cols-4 gap-4 max-w-6xl w-full">
        {nowPlayingMovies.map((nowPlayingMovie) => (
          <div key={nowPlayingMovie.id}>{nowPlayingMovie.title}</div>
        ))}
      </div>
    </div>
  )
}

export default index
