import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-[300px] h-auto md:w-58 pr-8">
      <img alt="Movie Card" className="min-w-[200px] h-auto object-cover" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};
export default MovieCard;