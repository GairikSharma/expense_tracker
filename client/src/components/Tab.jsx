import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../contextProvider";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebaseConfig";

function Tab() {
  const navigateToSignIn = useNavigate();
  const {setIsloggedin} = useContext(GlobalContext)

  const signOutHandler = async () => {
    try {
      await signOut(auth);
      setIsloggedin(false);
      console.log("Signed Out");
      navigateToSignIn("/");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className="w-full h-[64px] bg-white border-2 border-gray-200 shadow-lg mb-4 px-3 py-2 flex gap-6 justify-center items-center text-md text-blue-800">
      <Link to="/user">Home</Link>
      <Link to="/user/add-expense">Add +</Link>
      <button
        className="w-[90px] h-[34px] bg-blue-400 text-white rounded-lg"
        onClick={signOutHandler}
      >
        Log out
      </button>
    </div>
  );
}

export default Tab;
