import React from "react";
import Header from "../components/Header";
import useNowPLayingMovies from "../hooks/useNowPLayingMovies";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "../components/GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPLayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
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
