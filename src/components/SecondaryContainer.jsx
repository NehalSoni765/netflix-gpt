import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <section className="bg-black">
        <div className="xl:-mt-60 pl-2 md:pl-12 relative">
          {movies?.nowPlayingMovies && (
            <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
          )}
          {movies?.topRatedMovies && (
            <MovieList title="Trending" movies={movies?.topRatedMovies} />
          )}
          {movies?.popularMovies && (
            <MovieList title="Popular" movies={movies?.popularMovies} />
          )}
          {movies?.upcomingMovies && (
            <MovieList
              title="Upcoming Movies"
              movies={movies?.upcomingMovies}
            />
          )}
        </div>
      </section>
    )
  );
};

export default SecondaryContainer;

/**
 * MovieList
 *  popular
 *  now playing
 *  trending
 *  comedy
 *
 *
 *
 */
