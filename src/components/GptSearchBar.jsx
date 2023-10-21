import React, { useRef } from "react";
import { useSelector } from "react-redux";
import language from "../utils/languageConstants";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    //make an API call to GPT API and get movie results
    const gptQuery =
      "Act as movie recommandation system and suggest some movies for the query: " +
      searchText.current.value.trim() +
      ". only give me names of 5 movies, comma seprated like the example result given ahead. Example Result: Gadar,sholay,Don,Golmal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
  };

  return (
    <div className="pt-[7%] flex justify-center">
      <form
        className="w-1/2 grid bg-black grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={language[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {language[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
