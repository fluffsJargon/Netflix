import React, { useEffect } from 'react'
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';
import { NOWPLAYING_API_OPTIONS } from '../utils/constants';

export default function useNowPlayingMovies() {
    const dispatch = useDispatch()

    const getNowPlayingMovie = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', NOWPLAYING_API_OPTIONS);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json?.results))
  
    }
  
    useEffect(() => {
      getNowPlayingMovie();
    },[])
}
