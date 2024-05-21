import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../contextProvider";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Tab() {
  const { setIsloggedin } = useContext(GlobalContext);
  const signOutHandler = () => {
    signOut(auth);
    setIsloggedin(false);
  };
  const navigate = useNavigate();
  const routeHandler = () => {
    navigate("/");
  };
  return (
    <div className="w-full h-[44px] bg-green-300 px-3 py-2 flex gap-6 justify-center items-center text-md text-blue-800">
      <Link to="/user">Home</Link>
      <Link to="/user/add-expense">Add expense</Link>
      <button
        onClick={() => {
          signOutHandler();
          routeHandler();
        }}
      >
        Log out
      </button>
    </div>
  );
}

export default Tab;
