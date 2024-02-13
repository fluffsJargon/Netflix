import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { RootState } from '../utils/appStore';

type MovieDetails = {
    original_title: string;
    overview: string;
    id: string;
}

const PrimaryContainer = () => {
    const movies = useSelector((store: RootState)=> store.movies?.nowPlayingMovies)
    if(!movies) return null;
    
    const newMovie: MovieDetails = movies[0]

  return (
    <div>
      <VideoTitle  title={newMovie.original_title} overview={newMovie.overview} />
      <VideoBackground movieId={newMovie.id} />
    </div>
  )
}

export default PrimaryContainer
