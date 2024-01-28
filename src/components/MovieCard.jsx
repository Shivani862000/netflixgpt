import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath,movieid }) => {

  if (!posterPath) return null;
  return (
   <Link to={`/watch?v=${movieid}`}>
   <div className="w-[300px] h-auto md:w-58 pr-8">
   <img alt="Movie Card" className="min-w-[200px] h-auto object-cover" src={IMG_CDN_URL + posterPath} />
 </div>
   </Link>
  );
};
export default MovieCard;