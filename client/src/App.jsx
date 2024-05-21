import { useState, useEffect } from "react";
import "./App.css";
import { GlobalContext } from "./contextProvider";
import { BrowserRouter } from "react-router-dom";
import RouterProvider from "./RouterProvider";
import AddExpense from "./pages/AddExpense";

function App() {
  const [login, setLogin] = useState(false);
  const [loggedin, setIsloggedin] = useState(false);
  const [allExpenses, setAllExpenses] = useState([]);

  const getAllExpenses = async () => {
    try {
      const data = await fetch(`https://expense-tracker-lake-zeta.vercel.app/all-expenses`);
      const res = await data.json();
      if (res) {
        setAllExpenses(res.allEntity);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllExpenses();
  }, []);

  console.log(allExpenses);

  return (
    <>
      {/* <AddExpense /> */}
      <GlobalContext.Provider
        value={{ login, setLogin, loggedin, setIsloggedin, allExpenses }}
      >
        <BrowserRouter>
          <RouterProvider />
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
