import React from "react";
import Header from "./Header";
import { useNowPlaying } from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import  GptSearch  from "./GptSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  useNowPlaying();
  usePopularMovies();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
