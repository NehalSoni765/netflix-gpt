import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMAGE_URL } from "../utils/constant";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-20">
        <img className="h-screen md:h-auto object-cover " src={BG_IMAGE_URL} />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </>
  );
};

export default GPTSearch;
