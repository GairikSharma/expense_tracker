import React, { useContext } from "react";
import auth from "../firebaseConfig";
import Tab from "../components/Tab";
import { GlobalContext } from "../contextProvider";

function HomePage() {
  const { allExpenses } = useContext(GlobalContext);
  console.log(auth.currentUser);
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
              <div>{i.pending ? <span>Pending</span> : <span>Done</span> }</div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default HomePage;
