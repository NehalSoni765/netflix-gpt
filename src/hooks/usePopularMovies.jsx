import { useEffect } from "react";
import { addNowPlayingMovies, addPopularMovies } from "../redux/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, POPULAR_MOVIES_API } from "../utils/constant";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getNowPlayingMovies = async () => {
    const data = await fetch(POPULAR_MOVIES_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getNowPlayingMovies();
  }, []);
};

export default usePopularMovies;
