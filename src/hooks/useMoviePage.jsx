import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {     addMovieTeaser} from "../utils/moviesSlice";

const useMoviePage = (movieId) => {
    const [allData , setAllData]= useState("")
  const dispatch = useDispatch();

  const teaserVideo = useSelector((store) => store.movies.movieTeaser);

  const getMovieTeaser = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
  

    // console.log(json)
    // console.log(movieId)

    const filterData = json.results.filter((video) => video.type === "Teaser");
    const teaser = filterData.length ? filterData[0] : json.results[0];
    // console.log(teaser)
    setAllData(teaser)
    dispatch(addMovieTeaser(teaser));
  };
  useEffect(() => {
    ! teaserVideo && getMovieTeaser();
  }, []);
return allData
};

export default useMoviePage;