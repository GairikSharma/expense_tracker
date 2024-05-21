import React, { useContext } from "react";
import auth from "../firebaseConfig";
import { Link } from "react-router-dom";
import Tab from "../components/Tab";
import { GlobalContext } from "../contextProvider";

function HomePage() {
  const { allExpenses } = useContext(GlobalContext);

  return (
    <>
      <Tab />
      <div>
        {allExpenses.map((i) => {
          return (
            <>
              <div>{i.organization}</div>
              <div>{i.amount}</div>
              <div>{i.date}</div>
              <div>{i.description}</div>
              <div>{i.paymentMethod}</div>
              <div>{i.pending}</div>
            </>
          );
        })}
        <h1>{auth.currentUser.displayName}</h1>
      </div>
    </>
  );
}

export default HomePage;
