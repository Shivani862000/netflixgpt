import React from "react";
import { LOGO } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import useMoviePage from "../hooks/useMoviePage";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function MoviePage() {
  const [searchParam] = useSearchParams();
  const teaserid = searchParam.get("v");
  const teaserData = useSelector((store) => store.movies);
  const filterMovieDetail = teaserData?.nowPlayingMovies?.filter(
    (moviesf) => moviesf.id == teaserid
  );
 const data= useMoviePage(teaserid);
// console.log(data)
const draftoverview ="Asha, a sharp-witted idealist, makes a wish so powerful that it is answered by a cosmic force – a little ball of boundless energy called Star. Together, Asha and Star confront a most formidable foe - the ruler of Rosas, King Magnifico - to save her community and prove that when the will of one courageous human connects with the magic of the stars, wondrous things can happen."
  return (
 <>

 <div className=" w-screen items-center px-4 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      
    <Link to='/browse'><img className="w-32 md:w-44 mx-auto md:mx-0" src={LOGO} alt="logo" /></Link>

          <Link
            className="py-2 px-4 mx-2 my-2 md:mx-4 text-white rounded-lg bg-slate-600"
            to="/aboutProject"
          >
            About Project
          </Link>
 
    </div>

 
 <div className="bg-black flex flex-col lg:flex-row py-8 my-[5vw] mx-[2vw]">
 <div className="lg:w-[60%]  lg:h-[60%]">
   <iframe
     className="w-full h-[60vh] "
     src={
       "https://www.youtube.com/embed/" +
      teaserData?.movieTeaser?.key  +
       "?&autoplay=1&mute=1"
     }
     title="YouTube video player"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
   ></iframe>
 </div>
 <div className="lg:w-[40%] mt-4 lg:mt-0 lg:ml-4 ">
   {filterMovieDetail?.map((datam) => (
     <div key={datam?.id}>
       <h1 className="text-2xl lg:text-3xl font-bold text-red-600 ">{datam?.title}</h1>
       <p className="text-sm lg:text-base my-3 text-white">{datam?.overview || draftoverview}</p>
       <p className="text-sm lg:text-base my-4 text-white">Language: {datam?.original_language}</p>
       <p className="text-sm lg:text-base my-4 text-white">Video Rating: {datam?.vote_average}</p>
       <p className="text-sm lg:text-base my-4 text-white">Release Date: {datam?.release_date}</p>
     </div>
   ))}
   <Link to="/browse" className="bg-gray-500 text-white py-2 md:py-2 px-4 my-4 md:px-8 text-lg md:text-xl bg-opacity-50 rounded-lg  ">See More </Link>
 </div>
</div>


</>
  );
}

export default MoviePage;
