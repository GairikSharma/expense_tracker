import React, { useContext } from "react";
import auth from "../firebaseConfig";
import Tab from "../components/Tab";
import { GlobalContext } from "../contextProvider";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

function HomePage() {
  const { allExpenses, setIsloggedin } = useContext(GlobalContext);
  const navigateToSignIn = useNavigate();

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
    <>
      <Tab />
      <div>
        <Link to="/">
          <button
            className="w-[80px] h-[34px] bg-blue-700 rounded-md text-teal-200"
            onClick={signOutHandler}
          >
            Logout
          </button>
        </Link>
        {allExpenses.map((expense, index) => (
          <div key={index} className="expense-item">
            <div>{expense.organization}</div>
            <div>{expense.amount}</div>
            <div>{expense.date}</div>
            <div>{expense.description}</div>
            <div>{expense.paymentMethod}</div>
            <div>
              {expense.pending ? <span>Pending</span> : <span>Done</span>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
