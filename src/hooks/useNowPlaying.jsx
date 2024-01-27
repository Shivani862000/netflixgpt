import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

export const useNowPlaying = () => {
    const dispatch = useDispatch();
   const nowPlayingmovie=  useSelector(store=>store.movies.nowPlayingMovies);
//    console.log(nowPlayingmovie)
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results))
  };
  useEffect(() => {
   !nowPlayingmovie && getNowPlayingMovies();
  }, []);
};
