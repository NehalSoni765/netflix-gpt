import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { LOGO, USER_AVATAR } from "../utils/constant";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log("user ", user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        //An error occured
      });
  };
  console.log("user ", user);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 justify-between flex">
      <img className="w-44 h-12" src={LOGO} alt="netflix-logo" />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" alt="userIcon" src={user.photoURL} />
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

//https://github.com/sajidazhar/NetflixGPT/blob/main/src/components/Header.js
