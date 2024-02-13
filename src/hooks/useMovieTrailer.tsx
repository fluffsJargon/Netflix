import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NOWPLAYING_API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (props: { movieId: string }) => {
  const dispatch = useDispatch();

  const { movieId } = props;
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      NOWPLAYING_API_OPTIONS
    );
    const json = await data.json();

    const filterData = json?.results.filter((video: any) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
