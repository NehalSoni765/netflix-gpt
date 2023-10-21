import React from "react";
import { useSelector } from "react-redux";
import language from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[7%] flex justify-center">
      <form className="w-1/2 grid bg-black grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={language[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
          {language[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
