import React from "react"
import Link from "next/link"
import Image from "next/image"

function MovieCard({ id, title, image, overview, tagline, rating, date }) {
  const releaseYear = date.substring(0, 4)
  return (
    <div
      className="w-auto mx-3 mt-5 bg-white rounded md:w-max-160 lg:w-160"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <div className="flex w-full h-56 rounded shadow-md">
        <div className="relative flex-none w-48 ">
          <Link href={`/movie/${id}`}>
            <a>
              <Image
                src={`https://image.tmdb.org/t/p/w500/${image}`}
                alt=""
                className="absolute inset-0 object-cover w-full h-full rounded-l "
                layout="fill"
              />
            </a>
          </Link>
        </div>
        <div className="flex flex-col p-2 pl-3">
          <div className="flex flex-wrap">
            <h1 className="flex-shrink font-semibold text-md overflow-ellipsis ">
              {title}
            </h1>

            <div className="flex-none w-full text-sm font-medium text-gray-500">
              {releaseYear}
            </div>
          </div>

          <div className="hidden h-full mt-3 sm:block">
            <p className="flex-1 overflow-hidden text-xs max-h-24 ">
              {overview}
            </p>
          </div>

          <div className="flex-none w-full text-sm font-medium text-gray-500">
            {rating === 0 ? "No reviews yet" : rating}
          </div>

          <div className="flex items-center flex-1 mt-auto mb-4 text-sm font-medium">
            <div className="">
              <Link href={`/movie/${id}`}>
                <a>
                  <button
                    className="flex px-5 py-2 mr-1 font-bold text-white transition-shadow bg-green-400 rounded shadow-inner hover:shadow-md focus:outline-none"
                    type="submit"
                  >
                    View
                  </button>
                </a>
              </Link>
            </div>
            <button
              className="flex items-center justify-center flex-none text-gray-400 border border-gray-300 rounded-md w-9 h-9"
              type="button"
              aria-label="like"
            >
              <svg width="20" height="20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
