import React, { useContext, useState } from "react";
// import auth from "../firebaseConfig";
import auth from "../firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { GlobalContext } from "../contextProvider";
import { Link, useNavigate } from "react-router-dom";

function SignupPage() {
  const { login, setLogin } = useContext(GlobalContext);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateAfterRegistration = useNavigate()

  const register = async (e) => {
    e.preventDefault();
    try {
      const newuser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(newuser);
      console.log("User created successfully");
      await updateProfile(auth.currentUser, {
        displayName: `${fname} ${lname}`,
      });
      console.log(auth.currentUser);
      setLogin(true);
    } catch (error) {
      console.log(error.message);
    } finally {
      navigateAfterRegistration("/")
    }
  };

  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center">
        <form className="w-[80%] md:w-[60%] lg:w-[45%] p-5 flex gap-2 flex-col px-5 items-start border-2 border-gray-300 rounded-lg shadow-lg" onSubmit={register}>
          <h2 className="text-2xl">Sign up</h2>
          <label htmlFor="" className="text-sm font-semibold">First name</label>
          <input
            className="w-[100%] h-[34px] border border-gray-200 rounded-lg px-3 py-2 bg-transparent"
            type="text"
            placeholder="Firstname"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            required
          />
          <label htmlFor="" className="text-sm font-semibold">Last name</label>

          <input
            className="w-[100%] h-[34px] border border-gray-200 rounded-lg px-3 py-2 bg-transparent"
            type="text"
            placeholder="Lastname"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            required
          />
          <label htmlFor="" className="text-sm font-semibold">Email</label>

          <input
            className="w-[100%] h-[34px] border border-gray-200 rounded-lg px-3 py-2 bg-transparent"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span className="text-red-400 text-xs">Note - Enter valid email</span>

          <label htmlFor="" className="text-sm font-semibold">Password</label>

          <input
            className="w-[100%] h-[34px] border border-gray-200 rounded-lg px-3 py-2 bg-transparent"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="text-red-400 text-xs">Note - Enter 6 digit password</span>
          <button
            className="w-[80px] h-[34px] rounded-lg bg-blue-500 text-white"
            type="submit"
          >
            Sign Up
          </button>
          <Link to="/">
            Already have an account ?{" "}
            <span className="text-blue-500">Sign in</span>
          </Link>
        </form>
    </div>
  );
}

export default SignupPage;
