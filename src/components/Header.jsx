import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign Out Error:", error);
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-4 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      
    <Link to='/browse'><img className="w-32 md:w-44 mx-auto md:mx-0" src={LOGO} alt="logo" /></Link>

      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <Link
            className="py-2 px-4 mx-2 my-2 md:mx-4 text-white rounded-lg bg-slate-600"
            to="/aboutProject"
          >
            About Project
          </Link>

          <button
            className="py-2 px-4 mx-2 my-2 md:mx-4 bg-slate-600 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>

          <div className=" md:flex items-center">
            <img
              className="w-6 h-6 rounded"
              alt="usericon"
              src={user.photoURL || USER_AVATAR}
            />
            <button
              onClick={handleSignOut}
              className="font-bold text-white ml-2"
            >
              (Sign Out)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
