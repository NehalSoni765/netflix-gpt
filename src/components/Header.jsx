import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userReducer";
import { getUserObject } from "../utils/methods";
import { toggleGptSearchValue } from "../redux/gptSlice";
import { changeLanguage } from "../redux/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userStore = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user?.email) {
        // User sign-in
        dispatch(addUser(getUserObject(user)));
        navigate("/browse");
      } else {
        // User sign-out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => subscribe;
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        //An error occured
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchValue());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 justify-between flex">
      <img className="w-44 h-12" src={LOGO} alt="netflix-logo" />
      {userStore?.email && (
        <div className="flex p-2">
          {showGptSearch && (
            <div className="relative inline-block text-left">
              <select
                className="p-2 bg-gray-900 text-white rounded-md m-2"
                onClick={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option value={lang.identifier} key={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          <button
            className="text-white py-2 px-4 m-2 bg-purple-800 rounded-md"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img className="w-12 h-12" alt="userIcon" src={userStore?.photoURL} />
          <button className="font-bold text-white pl-1" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

//https://github.com/sajidazhar/NetflixGPT/blob/main/src/components/Header.js
