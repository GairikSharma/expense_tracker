import React, { useContext } from "react";
import SignupPage from "./pages/SignupPage";
import { Route, Routes } from "react-router-dom";
import SigninPage from "./pages/SigninPage";
import HomePage from "./pages/HomePage";
import { GlobalContext } from "./contextProvider";
import AddExpense from "./pages/AddExpense";


function RouterProvider() {
  const { loggedin, setIsloggedin } = useContext(GlobalContext);
  return (
    <div>
      <Routes>
        <Route path="/" element={<SigninPage />}></Route>
        <Route path="/sign-up" element={<SignupPage />}></Route>
        <Route path={loggedin ? "/user" : "/sign-in"} element={loggedin ? <HomePage /> : <SigninPage />} />
        <Route path="/user/add-expense" element={<AddExpense />}></Route>
      </Routes>
    </div>
  );
}

export default RouterProvider;
