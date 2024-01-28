import React from 'react'; // Import React if not already imported
import { BG_URL } from '../utils/constants';
import GptMovieSuggestions from './GptMovieSuggestions';
import GptSearchBar from './GptSearchBar';

const GptSearch = () => {
  return (
    <>
      <div className="fixed z-1">
        <img className="w-screen h-screen object-cover w-fit object-cover" src={BG_URL} alt="logo" />
      </div>
      <div>
       <GptSearchBar />
       <GptMovieSuggestions/>
      </div>
    </>
  );
};

export default GptSearch;
