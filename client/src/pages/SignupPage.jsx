import React, { useContext, useState } from "react";
// import auth from "../firebaseConfig";
import auth from "../firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { GlobalContext } from "../contextProvider";
import { Link } from "react-router-dom";

function SignupPage() {
  const { login, setLogin } = useContext(GlobalContext);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    }
  };

  return (
    <div>
      <div className="sign-up-form">
        <form className="signup-content" onSubmit={register}>
          <h2>Sign up</h2>
          <input
            type="text"
            placeholder="Firstname"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Lastname"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="sign-up-btn" type="submit">
            Sign Up
          </button>
          <Link to="/">Already have an account ? Sign in</Link>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
