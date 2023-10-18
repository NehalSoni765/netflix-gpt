import React, { useEffect } from "react";
import { addNowPlayingMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS, MOVIE_NOW_PLAYING } from "../utils/constant";

const useNowPLayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(MOVIE_NOW_PLAYING, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPLayingMovies;
