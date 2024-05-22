import React, { useContext, useEffect, useState } from "react";
import auth from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GlobalContext } from "../contextProvider";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SigninPage() {
  const { loggedin, setIsloggedin } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const navigateAfterLogin = () => {
    navigate("/user");
  };

  const login = async (e) => {
    try {
      e.preventDefault();
      const existinguser = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(existinguser);

      setIsloggedin(true);
      navigateAfterLogin();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="w-full min-h-[100vh] flex justify-center items-center">
        <form className="w-[80%] md:w-[60%] lg:w-[45%] p-5 flex gap-2 flex-col px-5 items-start border-2 border-gray-300 rounded-lg shadow-lg" onSubmit={login}>
          <h2 className="text-2xl">Login Here</h2>
          <label htmlFor="" className="text-sm font-semibold">Email</label>

          <input
            className="w-[100%] h-[34px] border border-gray-400 rounded-lg px-3 py-2 bg-white"
            type="email"
            placeholder="Enter your Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label htmlFor="" className="text-sm font-semibold">Password</label>

          <input
            className="w-[100%] h-[34px] border border-gray-400 rounded-lg px-3 py-2 bg-white"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="w-[80px] h-[34px] rounded-lg bg-blue-500 text-white">Login</button>
          <Link to="/sign-up">Do not have any account ? <span className="text-blue-500">Create here</span></Link>
        </form>
      </div>
    </>
  );
}

export default SigninPage;
