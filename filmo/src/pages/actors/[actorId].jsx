import React , {useState, useEffect}from 'react';
import { useRouter } from 'next/router';
import { optionsTrending } from './index';


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2FhZTlhZGM1MjA3Njk5ZDg1Y2ZmN2Y3YTMyMmI2ZSIsInN1YiI6IjY1NjZkNTIxYThiMmNhMDE0ZDUxYTIwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zm4mNzeuZSUcJFa8tVG6ldeD_8OY37zsxEAB8OKUpZI'
  }
};

export default function SingleActorPage() {
  const router = useRouter();
  const [actor, setActor] = useState();
  const [movieCredits, setMoviesCredits] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [showMoreMovies, setShowMoreMovies] = useState(false);


  // Fetching actors by id that cast in this moviesCredit  
  useEffect(()=> {
    fetch(`https://api.themoviedb.org/3/person/${router.query.actorId}/movie_credits?language=en-US&api_key=6caae9adc5207699d85cff7f7a322b6e`, options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      setMoviesCredits(response.cast)
    })
    .catch(err => console.error(err))
    .finally(() => setIsLoading(false))
  },[])
  
  console.log(movieCredits);
  // Fetching actors by id
  useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/person/${router.query.actorId}?language=en-US&api_key=6caae9adc5207699d85cff7f7a322b6e`, optionsTrending)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setActor(response)
      })
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false))
    },[]);
    console.log(actor)
    function handleShowClick(){
      setShowMore(!showMore);
    }
    function handleShowMoviesClick(){
      setShowMoreMovies(!showMoreMovies);
    }
      
        return (
          <div className="bg-gradient-to-l from-black to-indigo-900  min-h-screen text-zinc-400">
      
            {isLoading ? (
              <div className="flex justify-center items-center h-screen">
                <p>Loading actor data...</p>
              </div>
            ) : actor ? (
              <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-8 p-8">
                <div className="bg-gradient-to-l from-indigo-950 to-indigo-900 p-4 rounded-lg shadow-lg mb-4 md:mb-0 flex-shrink-0 ">
                  <img
                    src={`https://image.tmdb.org/t/p/w780/${actor.profile_path}`}
                    alt={actor.name}
                    className="w-44 h-auto rounded-lg object-cover"
                  />
                </div>
                <div className="flex flex-col space-y-4">
                  <h1 className="text-4xl text-sky-800 font-bold">{actor.name}</h1>
                  <p className={actor.gender === 1 ? "text-pink-300" : "text-blue-300"}>
                    {actor.gender === 1 ? 'Female' : 'Male'}
                  </p>
                  <span className="text-lg font-semibold text-sky-600">
                  Born: {actor.birthday} <br />
                  Popularity: {actor.popularity} %
                </span>
                  <div className="text-center">
                    <button
                      className="bg-sky-950 hover:bg-sky-600 text-sky-600 hover:text-sky-900 font-bold py-2 px-4 rounded my-3"
                      onClick={handleShowClick}
                    >
                      {showMore ? 'Show Less' : 'Show biography'}
                    </button>
                    {showMore && (
                      <div>
                        <p className="text-gray-600 hover:text-sky-50 mt-2">{actor.biography}</p>
                      </div>
                    )}
                    <button
                      className="bg-sky-950 hover:bg-sky-600 text-sky-600 hover:text-sky-900 font-bold py-2 px-4 rounded my-3"
                      onClick={handleShowMoviesClick}
                    >
                      {showMoreMovies ? 'Show Less' : 'Show Movies'}
                    </button>
                    {showMoreMovies && (
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                        {movieCredits && movieCredits.map(movie => (
                          <div key={movie.id} className="group relative w-40 h-55 overflow-hidden rounded-lg">
                            <img
                              src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                              alt={movie.original_title}
                              className="w-auto h-auto object-cover transition duration-300 ease-in-out"
                            />
                            <h2 className="text-center text-sky-800 text-lg mt-2">{movie.original_title} <br/>
                            Release Date:<br/>{movie.release_date}</h2>
                            <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-10"></div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
    
              </div>
            ) : (
              <p className="zinc-400">No actor data available.</p>
            )}
          </div>
        );
      }