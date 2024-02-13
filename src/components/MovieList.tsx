import React from 'react'
import MovieCard from './MovieCard'


const MovieList = (props: { title: string; movies: any; }) => {
    const { title, movies } = props;
  return movies && (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie: { id: React.Key | null | undefined; poster_path: string; }) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList
