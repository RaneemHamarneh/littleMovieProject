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

  const res5 = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US`);
  const action = await res5.json();
  const actionMovies =action.results;

  const res6 = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16&language=en-US`);
  const animation = await res6.json();
  const animationMovies =animation.results;

   const res7 = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=18&language=en-US`);
  const drama = await res7.json();
  const dramaMovies =drama.results;

   const res8 = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10751&language=en-US`);
  const family= await res8.json();
  const familyMovies =family.results;

   const res9 = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=14&language=en-US`);
  const fantasy = await res9.json();
  const fantasyMovies =fantasy.results;

   const res10 = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=36&language=en-US`);
  const History = await res10.json();
  const historyMovies =History.results;

   const res11 = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US`);
  const horror = await res11.json();
  const horrorMovies =horror.results;

   const res12 = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10402&language=en-US`);
  const musical = await res12.json();
  const musicalMovies =musical.results;

   const res13 = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=9648&language=en-US`);
  const mystery = await res13.json();
  const mysteryMovies =mystery.results;

   const res14 = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=878&language=en-US`);
  const scienceFiction = await res14.json();
  const scienceFictionMovies =scienceFiction.results;

   const res15 = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10770&language=en-US`);
  const tvFilm = await res15.json();
  const tvFilmMovies =tvFilm.results;

   const res16 = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=53&language=en-US`);
  const thriller = await res16.json();
  const thrillerMovies =thriller.results;

   const res18 = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=37&language=en-US`);
  const western = await res18.json();
  const westernMovies =western.results;

   const res19 = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=12&language=en-US`);
  const adventure = await res19.json();
  const adventureMovies =adventure.results;

   const res20 = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US`);
  const comedy= await res20.json();
  const comedyMovies =comedy.results;

   const res21 = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=80&language=en-US`);
  const krimi = await res21.json();
  const krimiMovies =krimi.results;

   const res22 = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99&language=en-US`);
  const documentary = await res22.json();
  const documentaryMovies =documentary.results;

   const res23 = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US`);
  const Liebes = await res23.json();
  const LiebesMovies =Liebes.results;

   const res24 = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10752&language=en-US`);
  const kriegsfilm = await res24.json();
  const kriegsfilmMovies =kriegsfilm.results;


   return {
    props: {
      movies_now_playing,
      movies_top_rated,
      movies_popular ,
      movies_upcoming,
      actionMovies,
      animationMovies,
      dramaMovies,
      familyMovies,
      fantasyMovies,
      historyMovies,
      horrorMovies,
      musicalMovies,
      mysteryMovies,
      scienceFictionMovies,
      tvFilmMovies,
      thrillerMovies,
      westernMovies,
      adventureMovies,
      comedyMovies,
      krimiMovies,
      documentaryMovies,
      LiebesMovies,
      kriegsfilmMovies,
    },

  };
}

const MoviesList = ({ movies_now_playing,movies_top_rated, movies_popular , movies_upcoming,actionMovies,animationMovies,dramaMovies,familyMovies,fantasyMovies ,historyMovies,horrorMovies,musicalMovies,mysteryMovies,scienceFictionMovies,tvFilmMovies,thrillerMovies,westernMovies,adventureMovies,comedyMovies,krimiMovies,documentaryMovies,LiebesMovies,kriegsfilmMovies}) => {
  return (
    <>
     <Head>
    <title>Filmo | Movies</title>
   </Head>
  <div className=" mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">Now playing</h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {Array.isArray ( movies_now_playing) && movies_now_playing.map((movie) => (
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
    <div className=" mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">Top Rated Movies</h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {Array.isArray (movies_top_rated) && movies_top_rated.map((movie) => (
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

    <div className=" mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">Popular Movies</h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {Array.isArray(movies_popular) && movies_popular.map((movie) => (
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

    <div className=" mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">Upcoming Movies</h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {Array.isArray(movies_upcoming) && movies_upcoming.map((movie) => (
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
    {/* Action Movies */}
    <div className=" mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">Action Movies</h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {Array.isArray(actionMovies) && actionMovies.map((movie) => (
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
    {/* animation Movies */}
    <div className=" mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">Animation Movies</h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {Array.isArray(animationMovies) && animationMovies.map((movie) => (
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
    {/* drama Movies */}
    <div className=" mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">Drama Movies</h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {Array.isArray(dramaMovies) && dramaMovies.map((movie) => (
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
    {/* family Movies */}
    <div className=" mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">Family Movies</h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {Array.isArray(familyMovies) && familyMovies.map((movie) => (
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
    {/* fantasy Movies */}
    <div className=" mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">Fantasy Movies</h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {Array.isArray(fantasyMovies) && fantasyMovies.map((movie) => (
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
    {/* History Movies */}
    <div className=" mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">History Movies</h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {Array.isArray( historyMovies) &&  historyMovies.map((movie) => (
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
    {/* horror Movies */}
    <div className=" mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">Horror Movies</h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {Array.isArray( horrorMovies) &&  horrorMovies.map((movie) => (
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
    {/* musical Movies  */}
    <div className=" mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">Musical Movies</h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {Array.isArray(musicalMovies) && musicalMovies.map((movie) => (
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
    {/* mystery Movies  */}
    <div className=" mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">Mystery Movies</h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {Array.isArray(mysteryMovies) && mysteryMovies.map((movie) => (
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
    {/* science Fiction Movies  */}
    <div className=" mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">Science Fiction Movies</h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {Array.isArray(scienceFictionMovies) && scienceFictionMovies.map((movie) => (
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
    {/* tvFilm Movies  */}
    <div className=" mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">Tv-Film Movies</h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {Array.isArray(tvFilmMovies) && tvFilmMovies.map((movie) => (
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
    {/* thriller Movies  */}
    <div className=" mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">Thriller Movies</h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {Array.isArray(thrillerMovies) && thrillerMovies.map((movie) => (
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
    {/* western Movies   */}
    <div className=" mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">Western Movies </h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {Array.isArray(westernMovies) && westernMovies.map((movie) => (
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
    {/* adventure Movies   */}
    <div className=" mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">Adventure Movies </h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {Array.isArray(adventureMovies) && adventureMovies.map((movie) => (
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
    {/* comedy Movies */}
    <div className=" mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">Comedy Movies </h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {Array.isArray(comedyMovies) && comedyMovies.map((movie) => (
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
    {/* krimiMovies  */}
    <div className=" mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">krimi Movies  </h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {Array.isArray(krimiMovies ) && krimiMovies.map((movie) => (
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
    {/* documentary Movies  */}
    <div className=" mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">Documentary Movies  </h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {Array.isArray(documentaryMovies ) && documentaryMovies.map((movie) => (
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
    {/* LiebesMovies  */}
    <div className=" mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">Liebes Movies</h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {Array.isArray(LiebesMovies ) && LiebesMovies.map((movie) => (
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
    {/* kriegsfilm Movies  */}
    <div className=" mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white">kriegsfilm Movies</h1>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {Array.isArray(kriegsfilmMovies ) && kriegsfilmMovies.map((movie) => (
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