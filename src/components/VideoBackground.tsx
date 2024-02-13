import {  useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = (props: { movieId: string }) => {
  const trailerVideo: any = useSelector((store: RootState) => store.movies?.trailerVideo);
  const { movieId } = props;

  useMovieTrailer({movieId});

   return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key+"?&mute=1&autoplay=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>{" "}
    </div>
  );
};

export default VideoBackground;
