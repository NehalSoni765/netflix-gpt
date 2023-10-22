import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt-[15%] px-6 md:px-24  text-white bg-gradient-to-r from-black ">
      <h1 className="font-bold text-2xl md:text-6xl">{title}</h1>
      <p className="hidden md:block py-6 text-lg md:w-full lg:w-1/2">{overview}</p>
      <div className="my-3 md:m-0 flex">
        <button className="bg-white text-black py-1 md:py-3 px-3 md:px-9 text-xl rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="hidden md:block mx-2 bg-gray-500 py-3 px-9 text-xl bg-opacity-50 rounded-lg ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
