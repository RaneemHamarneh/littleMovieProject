import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

// trending of people list
export const optionsTrending = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2FhZTlhZGM1MjA3Njk5ZDg1Y2ZmN2Y3YTMyMmI2ZSIsInN1YiI6IjY1NjZkNTIxYThiMmNhMDE0ZDUxYTIwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zm4mNzeuZSUcJFa8tVG6ldeD_8OY37zsxEAB8OKUpZI",
  },
}

export default function Index() {
  const router = useRouter()
  const [actors, setActors] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [selectedActorId, setSelectedActorId] = useState()

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/person/day?language=en-US&api_key=6caae9adc5207699d85cff7f7a322b6e",
      optionsTrending,
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        return response.json()
      })
      .then((data) => {
        console.log(data.results)
        setActors(data.results)
      })
      .catch((e) => console.log(e))

      .finally(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    document.title = `General page for Actors`
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!actors) return <p>No profile data</p>


  return (
    <div className="bg-gradient-to-l from-black to-indigo-900  min-h-screen text-zinc-400">
      <div className="bg-gradient-to-l from-sky-800 to-indigo-700 bg-cover p-4  ">
        <h1 className="text-center animated-gradient text-5xl font-bold">
          ⭐FILMO⭐
        </h1>
      <h1 className=" w-full flex justify-center pt-4 text-3xl font-bold 
      bg-black rounded-full text-sky-700 px-6 py-3">
        Actors
      </h1></div>
      <div className="flex justify-center bg-gradient-to-l from-black to-indigo-900 
       shadow-lg rounded-lg p-6 w-full">
        <div className="grid grid-cols-4 gap-4 max-w-6xl w-full">
          {actors &&
            actors.map((user) => (
              <Link href={`/actors/${user.id}`} key={user.id}>
                <div
                  key={user.id}
                  className="flex flex-col items-start bg-black hover:bg-sky-800
                   text-white font-bold py-2 px-4 rounded transition duration-200 
                   ease-in-out shadow-lg">
                  <img
                    src={`https://image.tmdb.org/t/p/w780/${user.profile_path}`}
                    width={500}
                    height={500}
                    alt="poster"
                  />
                  <div className="p-4">
                    <span className="text-lg block truncate">
                      ⭐ {user.name} ⭐
                    </span>
                    <span className="text-sm text-gray-100">
                      Original Name: {user.original_name}
                    </span>
                    <div className="flex flex-col space-y-1 mt-2">
                      <span className="text-sm font-medium text-gray-200 dark:text-gray-300">
                        Popularity:
                      </span>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                          className="bg-sky-700 h-2.5 rounded-full transition-all duration-300 ease-in-out"
                          style={{
                            width: `${Math.min(user.popularity, 100) * 1}%`,
                          }}
                          title={`Popularity: ${user.popularity.toFixed(2)}`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
