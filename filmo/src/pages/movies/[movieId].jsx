import React from "react";
import Head from "next/head";
 const API_KEY = process.env.PUBLIC_API_KEY
 const BASE_URL = process.env.PUBLIC_BASE_URL

export const getStaticPaths = async () => {
  const res = await fetch(`${BASE_URL}/discover/movie?language=en-US&api_key=${API_KEY}`);
  const film = await res.json();
  const paths = film.results.map((movie) => {
    return {
      params: {
        movieId: movie.id.toString(),
      },
    };
  });
  
  return {
    paths,
    fallback: false,
  };
};


export const getStaticProps = async (context) => {
  const { movieId } = context.params;
  const res = await fetch(`${BASE_URL}/movie/${movieId}?language=en-US&api_key=${API_KEY}`);
  const movie = await res.json();
 
  return {
    props: {
      movie,
    },
  };
};

const MovieDetails = ({ movie }) => {
  return (
    <>
      <Head>
        <title>Filmo | Movie</title>
      </Head>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center text-white">{movie.original_title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="text-white" width={500} height={500} alt="poster" />
            <p className="text-white">movie overview: {movie.overview}</p>
            <p className="text-white ">run time {movie.runtime} min</p>
            <h2 className="text-white">Voting: {movie.vote_count}</h2>
            <h2 className="text-white">Rating: {movie.vote_average }</h2>
            <p className="text-white ">Release Date: {movie.release_date}</p>
            <p className="text-gray-500">Genres: {movie.genres.map((genre) => genre.name).join(', ')}</p>
            <h2 className="text-white">Language :{movie.original_language}</h2>
             <p className="text-white ">production_companies: {movie.production_companies.map((el) =>
             {return(<div><h2> {el.name}</h2>
              <img src={`https://image.tmdb.org/t/p/w92/${el.logo_path}`} /></div>)})}</p> 
  {/*  
                The main 5 actors of the movies in the credit section (Use the API for this)
                A related movies section which includes at least five related movies (Use the API for this)
                A trailer section that has the movie trailer from youtube
            */}
      </div>
    </>
    
  );
};

export default MovieDetails;
 

 
