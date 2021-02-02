import Image from "next/image"
import React from "react"

function MoviePage({ movie }) {
  console.log(movie)

  const releaseYear = movie.release_date.substring(0, 4)

  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <div className="relative w-screen " style={{ maxWidth: "800px" }}>
        <Image
          src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
          height="720px"
          width="1280px"
          className="rounded-b"
        ></Image>
        <div
          className="absolute mb-3 ml-2 text-5xl font-bold text-white "
          style={{ bottom: 0, left: 0 }}
        >
          {movie.title}
        </div>
      </div>

      <div className="flex justify-between mx-4 ">
        <div>Runtime {movie.runtime} mins</div>
        <div>{releaseYear}</div>
      </div>

      <div className="flex">
        <p>{movie.overview}</p>
      </div>
    </div>
  )
}

export default MoviePage

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.API_KEY}&language=en-US`
  )
  const movie = await res.json()
  return {
    props: {
      movie,
    },
  }
}
