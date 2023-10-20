import { useEffect } from "react";
import { addNowPlayingMovies, addPopularMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS, POPULAR_MOVIES_API } from "../utils/constant";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(POPULAR_MOVIES_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default usePopularMovies;
