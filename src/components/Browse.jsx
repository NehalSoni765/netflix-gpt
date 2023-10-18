import React from "react";
import Header from "./Header";
import useNowPLayingMovies from "../hooks/useNowPLayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPLayingMovies();
  return (
    <div>
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
