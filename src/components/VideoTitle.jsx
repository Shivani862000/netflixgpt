import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const VideoTitle = ({ title, overview,id }) => {
  return (



<div className="w-screen  aspect-video h-[100vh] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
<div className=" sm:bottom-10 xl-p-6  absolute bottom-0  lg:bottom-[6vh] 2xl:bottom-[23vh]">
<h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">{title}</h1>
<p className="max-w-[850px] lg:block text-lg mb-6">{overview}</p>
        <div className="flex flex-row  items-center gap-3 ">
          <Link to={`/watch?v=${id}`} className="bg-white text-black py-2 md:py-4 px-4 md:px-8 text-lg md:text-xl rounded-lg hover:bg-opacity-80 flex items-center justify-center  md:mb-0">
            <FaPlay className="mr-2" />
            Play
          </Link>
          <Link to={`/watch?v=${id}`} className="bg-gray-500 text-white py-2 md:py-4 px-4 md:px-8 text-lg md:text-xl bg-opacity-50 rounded-lg ml-0 md:ml-4">
            More Info
          </Link>
        </div>
</div>
</div>
  );
};
export default VideoTitle;
