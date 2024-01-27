import React from 'react';
import { FaPlay } from 'react-icons/fa';

const VideoTitle = ({ title, overview }) => {
  return (



<div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
<div className="p-6 md:p-12">
<h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">{title}</h1>
<p className="hidden md:block text-lg mb-6">{overview}</p>
        <div className="flex flex-col md:flex-row items-center">
          <button className="bg-white text-black py-2 md:py-4 px-4 md:px-8 text-lg md:text-xl rounded-lg hover:bg-opacity-80 flex items-center justify-center mb-2 md:mb-0">
            <FaPlay className="mr-2" />
            Play
          </button>
          <button className="bg-gray-500 text-white py-2 md:py-4 px-4 md:px-8 text-lg md:text-xl bg-opacity-50 rounded-lg ml-0 md:ml-4">
            More Info
          </button>
        </div>
</div>
</div>
  );
};
export default VideoTitle;
