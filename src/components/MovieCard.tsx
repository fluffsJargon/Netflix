import React, { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import { addToLikedMovies } from "../utils/movieSlice";

type Prop = { posterPath: string; movieID: string };
const MovieCard = (props: Prop) => {
  const { likedMovieList } = useSelector((store: RootState) => store.movies);
  const dispatch = useDispatch();
  const { posterPath, movieID } = props;
  
  let liked = likedMovieList.includes(movieID);
  const likeButtonHandler = () => {
      dispatch(addToLikedMovies(movieID));
  };
  
  return (
    <div className="relative w-36 md:w-48 pr-4">
      <button className="absolute pl-2 pt-2" onClick={likeButtonHandler}>
        {liked ? "❤️" : "🤍"}
      </button>
      <img  alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
