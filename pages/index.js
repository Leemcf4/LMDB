import Axios from "axios"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { Fragment } from "react"
import MovieCard from "../components/MovieCard"
import Search from "../components/Search"

export default function Home({ movies }) {
  console.log(movies)

  // const showTrending =  () => {

  //   const res =

  // }

  return (
    <Fragment>
      <Head>
        <title>LMDB</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex flex-col justify-center mx-3">
        <div className="flex items-center content-start justify-between mx-4">
          <h1 className="my-3 font-bold ">LMDB</h1>
          <Link href={`/watchlist`}>+Watchlist</Link>
        </div>

        <Search />
        {/* <button onClick={showTrending}>Trending</button> */}
        <div className="">
          {movies.results?.map((result) => (
            <MovieCard
              key={result.id}
              id={result.id}
              title={result.title}
              image={result.poster_path}
              tagline={result.tagline}
              overview={result.overview}
              date={result.release_date}
              rating={result.vote_average}
            />
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    `
    https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  )
  const movies = await res.json()

  if (!movies) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: {
      movies,
    }, // will be passed to the page component as props
  }
}
