import React from "react"
import { getNowPlaying } from "@component/util/requests"
import Card from "@component/components/Card/Card"

export async function getServerSideProps() {
  const movies = await getNowPlaying()

  return {
    props: {
      movies,
    },
  }
}

function Index({ movies }) {
  return (
    <div>
      <div className="grid grid-cols-5 gap-4 max-w-7xl w-full mx-auto page-container">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Index
