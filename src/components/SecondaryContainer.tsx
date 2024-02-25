import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../utils/appStore'
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movieList = useSelector((store: RootState)=> store.movies?.nowPlayingMovies);
  return (
    <div className=' bg-black'>
      /** Movie list
      Title and Movie card */
      <div className=" mt-0 md:-mt-44 pl-4 md:pl-12 relative z-20">
      <MovieList title={"Now Playing"} movies={movieList} />
      <MovieList title={"Popular"} movies={movieList} />
      <MovieList title={"Series"} movies={movieList} />
      </div>

    </div>
  )
}

export default SecondaryContainer
