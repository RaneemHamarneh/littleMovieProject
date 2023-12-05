import React from "react";
import Head from "next/head";
import ReactPlayer from 'react-player'
import { useState } from "react";
 const API_KEY = process.env.PUBLIC_API_KEY
 const BASE_URL = process.env.PUBLIC_BASE_URL

export const getServerSideProps = async (context) => {
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
 const [showPlayer, setShowPlayer] = useState(false);
  
  return (
    <>
      <Head>
        <title>Filmo | Movie</title>
      </Head>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center text-white">{movie.title}</h1>
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="bg-white shadow-md p-4 rounded-md" width={500} height={500} alt="poster" />
        <div >
            <p className="text-white">movie overview:  {movie.overview}</p>
            <p className="text-white ">run time : {movie.runtime} min</p>
            <h2 className="text-white">Voting:  {movie.vote_count}</h2>
            <h2 className="text-white">Rating:  {movie.vote_average }</h2>
            <p className="text-white ">Release Date: {movie.release_date}</p>
            <h2 className="text-white">Language :{movie.original_language}</h2>
            <p className="text-gray-500">Genres: {movie.genres.map((genre) => genre.name).join(', ')}</p>
            {/* <div>
           <ReactPlayer onClick={()=>setShowPlayer(true)}
              url={`https://www.youtube.com/watch?v=/${ movie.videos}`}
              sources={[
                // { src: `https://www.youtube.com/watch?v=/${ movie.videos}`, type: 'video/mp4' },
                // { src:`https://www.youtube.com/watch?v=/${ movie.videos}`, type: 'video/webm' },
                // { src:`https://www.youtube.com/watch?v=/${ movie.videos}`, type: 'video/3gpp' },
                { src:`https://www.youtube.com/watch?v=/${ movie.videos}`, type: 'video/quicktime' },
              ]}
              width="100"
              height="100"
              style={{ position: "absolute", top: "0", left: "0" }}
              controls={false}
             playing={showPlayer}
            /> Movie Trailer
          </div>
             */}
            
            <div className="flex flex-col gap-4">{movie.production_companies.map((company,index) => (
            <div key={index} className="flex flex-col items-center">
             <h2 className="text-white font-medium">{company.name}</h2>
             <img src={`https://image.tmdb.org/t/p/w92/${company.logo_path}`} alt={company.name} width="100px" height="100px" className="object-cover rounded-lg"/>  
        </div>
      ))}
    </div>        
      </div>
      </div>
    </>
    
  );
};

export default MovieDetails;
 
 













































































































     
 





















