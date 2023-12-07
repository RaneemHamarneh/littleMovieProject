import React from "react"
import Head from "next/head"
import Link from "next/link"
const API_KEY = process.env.PUBLIC_API_KEY
const BASE_URL = process.env.PUBLIC_BASE_URL

export const getServerSideProps = async (context) => {
  const { movieId } = context.params

  const res1 = await fetch(
    `${BASE_URL}/movie/${movieId}?language=en-US&api_key=${API_KEY}`,
  )
  const movie = await res1.json()

  const res2 = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`,
  )
  const movieCredits = await res2.json()

  const res3 = await fetch(
    `${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}`,
  )
  const relatedMovies = await res3.json()

  const res4 = await fetch(
    `${BASE_URL}/movie/${movieId}/videos?language=en-US&api_key=${API_KEY}`,
  )
  const movieTrailer = await res4.json()
  return {
    props: {
      movie,
      movieCredits,
      relatedMovies,
      movieTrailer,
    },
  }
}

const MovieDetails = ({ movie, movieCredits, relatedMovies, movieTrailer }) => {
  return (
    <>
      <Head>
        <title>Filmo | Movie</title>
      </Head>
      {/*  **************** Movie title  ********************* */}
      <div className=" mx-auto px-4">
        <h1
          className="text-3xl font-bold 
            text-center text-white"
        >
          {movie.title}
        </h1>
      </div>
      {/* ******************* Movie title  ********************* */}

      <div>
        {" "}
        <img
          src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
          width={500}
          height={500}
          alt="poster"
        />
      </div>

      <div className="text-white">movie overview: {movie.overview}</div>
      <div className="text-white ">run time : {movie.runtime} min</div>
      <div className="text-white">Voting: {movie.vote_count}</div>
      <div className="text-white">Rating: {movie.vote_average}</div>
      <div className="text-white ">Release Date: {movie.release_date}</div>
      <div className="text-white">Language :{movie.original_language}</div>

      {/*  ************************** Cast Members  **************************************** */}
      <div className="text-white">
        Cast Members:{" "}
        {movieCredits.cast.map((cast, index) => (
          <div key={index}>
            <Link href={`/actors/${cast.id}`}>
              {cast.order < 5 ? cast.name : null}
              {cast.order < 5 ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                  width={70}
                  height={70}
                  alt="profile_picture"
                />
              ) : null}
            </Link>
          </div>
        ))}
      </div>
      {/* ***************************** Cast Members  ******************************************** */}

      {/* ***************************** Related Movies  ******************************************** */}
      <div className="text-white">
        {" "}
        {relatedMovies.results.map((el, index) => (
          <div key={index}>
            <Link href={`/movies/${el.id}`}>
              {el.title}
              <img
                src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
                width={100}
                height={100}
                alt="Related_movies"
              />
            </Link>
          </div>
        ))}
      </div>
      {/* ***************************** Related Movies  ******************************************** */}

      {/* *****************************  Company name and logo ********************************** */}
      <div className="flex flex-col gap-4">
        {movie.production_companies.map((company, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="text-white font-medium">{company.name}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w92/${company.logo_path}`}
              alt={company.name}
              width="100px"
              height="100px"
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      {/* *****************************  Company name and logo ********************************** */}

      {/*  ******************************* Movie trailer  ****************************************** */}
      {movieTrailer.results && movieTrailer.results.length > 0 && (
        <div className="text-white">
          Movie trailer:
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${movieTrailer.results[0].key}`}
            title="Movie Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {/*  *************************** Movie trailer  ********************************************** */}
    </>
  )
}

export default MovieDetails
