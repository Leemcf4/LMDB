import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import axios from "axios"

function Search() {
  const [name, setName] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [timer, setTimer] = useState(null)
  const [onFocus, setOnFocus] = useState(false)

  const router = useRouter()

  const searchSubs = async () => {
    clearTimeout(timer)
    setTimer(
      setTimeout(async () => {
        try {
          const { data } = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=1e23ba90b1f2e5e9e44f5674ee73fb30&language=en-US&query=${name}`
          )
          setSearchResults(data)
          console.log(data)
        } catch (err) {
          console.log(err)
        }
      }, 250)
    )
  }
  useEffect(() => {
    if (name.trim() === "") {
      setSearchResults([])
      return
    }
    searchSubs()
  }, [name])

  const goToMovie = (id) => {
    router.push(`/movie/${id}`)
    setName("")
  }
  return (
    <div className="z-10 w-full mt-2 rounded md:w-160">
      <div
        className="mx-3 rounded shadow-inner "
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <i className="pl-4 pr-1 fas fa-search"></i>
        <input
          type="text"
          placeholder="search"
          className="max-w-full px-10 py-5 bg-transparent border-none focus:outline-none"
          // style={{ backgroundColor: "#F5F5F5" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setOnFocus(true)}
          // onBlur={() => setOnFocus(false)}
        />
        {onFocus &&
          !name == "" &&
          searchResults.results?.map((result) => (
            <div
              className="flex items-center object-contain px-4 py-3 cursor-pointer hover:bg-gray-200"
              onClick={() => goToMovie(result.id)}
            >
              <Image
                className="object-contain "
                src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                alt="movie"
                height={50}
                width={25}
              ></Image>
              <div className="ml-4 text-sm">
                <p className="font-medium">{result.name}</p>
                <p className="text-gray-500">{result.title}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Search
