import { useState, useEffect } from "react";
import "./App.css";
import { GlobalContext } from "./contextProvider";
import { BrowserRouter } from "react-router-dom";
import RouterProvider from "./RouterProvider";
import auth from "./firebaseConfig";

function App() {
  const [login, setLogin] = useState(false);
  const [loggedin, setIsloggedin] = useState(false);
  const [allExpenses, setAllExpenses] = useState([]);

  const [loader, setLoader] = useState(false);

  const [successfullyExecuted, setSuccessfullyExecuted] = useState(false);

  const getAllExpenses = async () => {
    try {
      setLoader(true);
      const data = await fetch(
        `https://expense-tracker-lake-zeta.vercel.app/all-expenses`
      );
      const res = await data.json();
      if (res) {
        setAllExpenses(res.allEntity);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };
  useEffect(() => {
    getAllExpenses();
  }, [allExpenses]);

  return (
    <>
      <GlobalContext.Provider
        value={{
          login,
          setLogin,
          loggedin,
          setIsloggedin,
          allExpenses,
          setLoader,
          successfullyExecuted,
          setSuccessfullyExecuted,
        }}
      >
        <BrowserRouter>
          <RouterProvider />
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
