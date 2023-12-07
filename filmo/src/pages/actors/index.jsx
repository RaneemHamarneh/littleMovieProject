import React, { useEffect, useState } from "react"
import Link from "next/link"
import actorsEffectFetching from "@component/util/API"

export default function Actors() {
  const [actors, setActors] = useState()

  actorsEffectFetching(setActors) // fetching actors page

  useEffect(() => {
    document.title = `General page for Actors`
  }, [])

  // if (!actors) return <p>No profile data</p>

  return (
    <div className="bg-gradient-to-r from-black from-40% to-blue-grey  min-h-screen   h-45 bg-cover p-4  text-zinc-100">
      <h1
        className="  flex justify-center 
      items-center w-full h-45 
       font-bold font-serif text-5xl 
         px-6 py-3"
      >
        Actors
      </h1>

      <div className="flex justify-center bg-gradient-to-r from-black from-40% to-blue-grey shadow-lg rounded-lg p-6 w-full">
        <div className="grid grid-cols-4 gap-4 max-w-6xl w-full">
          {actors &&
            actors.map((user) => (
              <Link href={`/actors/${user.id}`} key={user.id}>
                <div
                  key={user.id}
                  className="flex flex-col items-start relative border-2 border-white  bg-black hover:bg-sky-800 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out shadow-lg"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w780/${user.profile_path}`}
                    width={500}
                    height={500}
                    alt="poster"
                  />
                  <div className="p-4">
                    <span className="text-lg block truncate">{user.name}</span>
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
