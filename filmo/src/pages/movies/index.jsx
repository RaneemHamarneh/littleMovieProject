import React from "react";
import Link from "next/link";
import Head from "next/head"; 

 const API_KEY = process.env.PUBLIC_API_KEY
 const BASE_URL = process.env.PUBLIC_BASE_URL
export const getStaticProps = async () => {
  const res = await fetch(`${BASE_URL}/discover/movie?language=en-US&api_key=${API_KEY}`)
  const data = await res.json()
  const movies = data.results;
   console.log(movies);
 
  return {
    props: { movies }
  }
}

const MoviesList = ({ movies }) => {
  return (
    <>
     <Head>
    <title>Filmo | Movies</title>
   </Head>
<div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">Trending Movies</h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-white shadow-md p-4 rounded-md">
            <Link href={`/movies/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} width={500} height={500} alt="poster"/>
            <h2 className="text-xl font-bold mt-4 ">{movie.title}</h2>
            <p className="text-gray-500">{movie.vote_average}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};
export default MoviesList;

