import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {     addMovieTeaser} from "../utils/moviesSlice";

const useMoviePage = (movieId) => {
  const dispatch = useDispatch();


  const getMovieTeaser = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Teaser");
    const filtert = json.results.filter((video) => video.type === "Trailer");
    const teaser = filterData.length ? filterData[0] : filtert[0];
    // console.log(filterData)
    // console.log(teaser + "te")
    dispatch(addMovieTeaser(teaser));
  };
  useEffect(() => {
     getMovieTeaser();
  }, []);
return 
};

export default useMoviePage;