import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { LOGO } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userReducer";
import { getUserObject } from "../utils/methods";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userStore = useSelector((store) => store.user);

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

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 justify-between flex">
      <img className="w-44 h-12" src={LOGO} alt="netflix-logo" />
      {userStore?.email && (
        <div className="flex p-2">
          <img className="w-12 h-12" alt="userIcon" src={userStore?.photoURL} />
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
