import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../redux/movieSlice";
import { API_OPTIONS, MOVIE_VIDEO_API } from "../utils/constant";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    const data = await fetch(
      MOVIE_VIDEO_API.replace("movie_id", movieId),
      API_OPTIONS
    );
    const json = await data.json();
    const trailer =
      json?.results?.filter(
        (val) => val.type === "Trailer" && val.name === "Official Trailer"
      ) || json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
