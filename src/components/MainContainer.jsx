import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./videoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <section className="pt-[30%] md:pt-0 bg-black">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </section>
  );
};

export default MainContainer;
