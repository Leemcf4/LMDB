import React from "react"

function MovieInfo(runtime, release) {
  return (
    <div className="flex justify-between">
      <div>{runtime}</div>
      <div>{release}</div>
    </div>
  )
}

export default MovieInfo
