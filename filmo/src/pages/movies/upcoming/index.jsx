import React from "react"
import { getUpComing } from "@component/util/requests"
import Card from "@component/components/Card/Card"

export async function getServerSideProps() {
  const movies = await getUpComing()

  return {
    props: {
      movies,
    },
  }
}

function index({ movies }) {
  return (
    <div>
      <div className="page-container grid grid-cols-5 gap-4 max-w-7xl w-full mx-auto">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default index
