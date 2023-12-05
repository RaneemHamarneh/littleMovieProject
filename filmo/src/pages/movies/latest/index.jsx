import React from "react"
import { getLatestMovies } from "@component/util/requests"

export async function getServerSideProps() {
  const movies = await getLatestMovies()

  return {
    props: {
      movies,
    },
  }
}

function index({ movies }) {
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

export default index
