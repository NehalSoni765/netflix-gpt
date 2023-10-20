import React, { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 200;
  };

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 200;
  };

  return (
    <div className="px-6 bg-transparent">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="relative">
        <div className="flex overflow-x-scroll" ref={scrollRef}>
          <div className="flex">
            {movies?.map((movie) => (
              <MovieCard posterPath={movie.poster_path} key={movie.id} />
            ))}
          </div>
        </div>
        {movies && movies.length > 0 && (
          <>
            <button
              className="absolute top-20 left-4 p-4 bg-gray-800 bg-opacity-50 rounded-full text-white hover:bg-opacity-75"
              onClick={scrollLeft}
            >
              &lt;
            </button>
            <button
              className="absolute top-20 right-4 p-4 bg-gray-800 bg-opacity-50 rounded-full text-white hover:bg-opacity-75"
              onClick={scrollRight}
            >
              &gt;
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieList;
