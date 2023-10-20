import React from "react";
import Header from "./Header";
import useNowPLayingMovies from "../hooks/useNowPLayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPLayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div >
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;

/**
 * -mainContainer
 *    -videoContainer
 *    -videoTitle
 * -secondaryContainer
 *    -movielist * n
 *      -cards * n
 */
