import React from "react"
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
      {/*  **************** Movie title  ********************* */}
      <div className=" mx-auto text-3xl px-4">
        Movie Name:
        <h1
          className="text-2xl font-serif font-bold 
            text-auto text-white mb-5"
        >
           {movie.title}
        </h1>
      </div>
      {/* ******************* Movie title  ********************* */}
      <div className="flex">
      <div  className="flex items-start">
        {" "}
        <img
          src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
          width={400}
          height={400}
          alt="poster"
          className="rounded-lg  border-4 mr-10 border-sky-700/75 mb-4"
        />
      
    <div className="flex flex-col text-auto ">
      <div className="text-white mb-10" >movie overview:<br/>
       {movie.overview}</div>
      <div className="text-white mb-2">run time : {movie.runtime} min</div>
      <div className="text-white mb-3">Voting: {movie.vote_count}</div>
      <div className="text-white mb-10">Movie Rating: {movie.vote_average}</div>
      <div className="text-white mb-3">Movie Release Date: {movie.release_date}</div>
      <div className="text-white  mb-10">Language :{movie.original_language}</div>

      
      {/*  ************************** Cast Members  **************************************** */}
    
      <div className="text-white  items-start relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4   ">
        <h1 className="text-3xl">Cast Members:{" "}</h1>
        {movieCredits.cast.map((cast, index) => (
          <div key={index}>
            <Link href={`/actors/${cast.id}`} >
              {cast.order < 5 ? cast.name : null}
              {cast.order < 5 ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                  width={120}
                  height={120}
                  alt="profile_picture"
                  
                />
              ) : null}
            </Link>
          </div>
        ))}
      </div>  
      {/* ***************************** Cast Members  ******************************************** */}

      {/* ***************************** Related Movies  ******************************************** */}
      <h1 className="text-white text-3xl">Related Movies</h1>
      <div className="grid grid-cols-6 mt-5 ">
        {" "}
        {relatedMovies.results.slice(0,6).map((el, index) => (
          <div key={index}>
            <Link href={`/movies/${el.id}`}>
              {el.title}
              <img
                src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
                width={120}
                height={120}
                alt="Related_movies"
              />
            </Link>
          </div>
        ))}
      </div>
      {/*  *************************** Movie trailer  ********************************************** */}

      {movieTrailer.results && movieTrailer.results.length > 0 && (
        <div className="text-white text-3xl self-center">
          Movie trailer:
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${movieTrailer.results[0].key}`}
            title="Movie Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
      </div> 
      {/* ***************************** Related Movies  ******************************************** */}
      </div>
      {/* *****************************  Company name and logo ********************************** */}
 </div>
      <div className="flex flex-col font-bold mt-10 mb-10">
        {movie.production_companies.map((company, index) => (
          <div key={index} className="flex flex-col items-center mb-4">
         
            <h2 className=" font-medium text-2xl text-yellow-200/90">{company.name}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w92/${company.logo_path}`}
              alt={company.name}
              width="150px"
              height="150px"
              className="object-cover bg-sky-100 "
            />
          </div>
        ))}
      {/* *****************************  Company name and logo ********************************** */}

     
      </div>

    </>
  )
}

export default MovieDetails
