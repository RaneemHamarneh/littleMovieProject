import React from "react"
import { getPopularMovies } from "@component/util/requests"
import Card from "@component/components/Card/Card"

export async function getServerSideProps() {
  const movies = await getPopularMovies()

  return {
    props: {
      movies,
    },
  }
}

function index({ movies }) {
  return (
    <div>
      <div className=" text-gray-200 flex items-center justify-center text-4xl mt-2">
        Popular Movies
      </div>
      <div className="page-container grid grid-cols-5 gap-4 max-w-7xl w-full mx-auto">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default index
