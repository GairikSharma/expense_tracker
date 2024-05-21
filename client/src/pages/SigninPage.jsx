import React, { useContext, useState } from "react";
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

      console.log("loaded man");
    } catch (error) {
      console.log(error.message);
    }
  };
  if (login) {
    navigateAfterLogin();
  }

  return (
    <div>
      <div className="form-container">
        <form className="form-content" onSubmit={login}>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Enter your Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="btn">Login</button>
          <Link to="/sign-up">Do not have any account ? Create here</Link>
        </form>
      </div>
    </div>
  );
}

export default SigninPage;
