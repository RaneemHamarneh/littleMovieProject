import React , {useState, useEffect}from 'react';
import { useRouter } from 'next/router';
import { optionsTrending } from './index';

export default function SingleActorPage() {
  const router = useRouter();
  const [actor, setActor] = useState();
  const [isLoading, setIsLoading] = useState(true);

  
  
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
    return (
    <div>
        <p>Post: {router.query.actorId}</p>
        {actor ? (
          <div>
              <p>ID: {actor.imdb_id}</p>
              {actor.homepage ? (
                <p>Homepage: <a href={actor.homepage} target="_blank" rel="url code" className="text-blue">{actor.homepage} </a></p>
            ) : (
                <p>Homepage: does not have</p>
            )}
              
          </div>
      ) : (
          <p>No actor data available.</p>
      )}
    </div>
  )
}
