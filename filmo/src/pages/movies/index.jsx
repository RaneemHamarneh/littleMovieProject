import React from "react";
import Link from "next/link";
 import Head from "next/head";
 const API_KEY = process.env.PUBLIC_API_KEY
 const BASE_URL = process.env.PUBLIC_BASE_URL
export const getServerSideProps = async () => {
  
 const res1 = await fetch(` ${BASE_URL}/movie/now_playing?language=en-US&api_key=${API_KEY}`) 
  const now_playing = await res1.json()
  const movies_now_playing = now_playing.results;

  const res2 = await fetch(` ${BASE_URL}/movie/top_rated?language=en-US&api_key=${API_KEY}`);
  const top_rated= await res2.json();
  const movies_top_rated = top_rated.results;

  
  const res3 = await fetch(` ${BASE_URL}/movie/popular?language=en-US&api_key=${API_KEY}`);
  const popular = await res3.json();
  const movies_popular =popular.results;

  const res4 = await fetch(` ${BASE_URL}/movie/upcoming?language=en-US&api_key=${API_KEY}`);
  const upcoming = await res4.json();
  const movies_upcoming =upcoming.results;

   return {
    props: {
      movies_now_playing,
      movies_top_rated,
      movies_popular ,
      movies_upcoming,
    },
   
  };
}

const MoviesList = ({ movies_now_playing,movies_top_rated, movies_popular , movies_upcoming}) => {
  return (
    <>
     <Head>
    <title>Filmo | Movies</title>
   </Head>
  <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">Now playing</h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {movies_now_playing.map((movie) => (
          <div key={movie.id} className="bg-white shadow-md p-4 rounded-md">
            <Link href={`/movies/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} width={500} height={500} alt="poster"/>
            <h2 className="text-xl font-bold mt-4 ">{movie.title}</h2>
            <p className="text-white">{movie.vote_average}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
    {/* top_rated Movies */}
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">Top Rated Movies</h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {movies_top_rated.map((movie) => (
          <div key={movie.id} className="bg-white shadow-md p-4 rounded-md">
            <Link href={`/movies/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} width={500} height={500} alt="poster"/>
            <h2 className="text-xl font-bold mt-4 ">{movie.title}</h2>
            <p className="text-white">{movie.vote_average}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
      {/* Popular Movies */}

    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">Popular Movies</h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {movies_popular.map((movie) => (
          <div key={movie.id} className="bg-white shadow-md p-4 rounded-md">
            <Link href={`/movies/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} width={500} height={500} alt="poster"/>
            <h2 className="text-xl font-bold mt-4 ">{movie.title}</h2>
            <p className="text-white">{movie.vote_average}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
    {/* Upcoming Movies */}

    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">Upcoming Movies</h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {movies_upcoming.map((movie) => (
          <div key={movie.id} className="bg-white shadow-md p-4 rounded-md">
            <Link href={`/movies/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} width={500} height={500} alt="poster"/>
            <h2 className="text-xl font-bold mt-4 ">{movie.title}</h2>
            <p className="text-white">{movie.vote_average}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};
export default MoviesList;

















