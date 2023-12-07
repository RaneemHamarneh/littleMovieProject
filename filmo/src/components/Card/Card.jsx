import Link from "next/link"
import getMovieDetails from "@component/util/requests"

function Card({ movie }) {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face"
  const DEFAULT_IMAGE_URL = "https://i.imgur.com/wjVuAGb.png"

  return (
    <div className="text-white">
      <Link className="text-decoration-none" href={"/movies/" + movie.id}>
        <div
          className=" shadow-xl p-2 mb-5 bg-black 
          rounded-lg border border-sky-700/95"
          style={{ width: "15rem" }}
        >
          <img
            src={
              movie.poster_path
                ? IMAGE_BASE_URL + movie.poster_path
                : DEFAULT_IMAGE_URL
            }
            alt=""
            className="rounded-lg mb-4"
          />
          <div className="card-body" style={{ height: "210px" }}>
            <h5
              className="card-title"
              style={{ height: "50px", fontWeight: "bold" }}
            >
              {movie.title}
            </h5>
            <div
              className="bg-light p-2 rounded mt-2"
              style={{ maxHeight: "150px", overflowY: "hidden" }}
            >
              <p className="card-text mb-0">{movie.overview}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card
