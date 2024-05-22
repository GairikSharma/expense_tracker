import React, { useContext } from "react";
import auth from "../firebaseConfig";
import Tab from "../components/Tab";
import { GlobalContext } from "../contextProvider";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

function HomePage() {
  const { allExpenses, setIsloggedin } = useContext(GlobalContext);

  return (
    <>
      <Tab />

      <div className="w-full">
        {/* <Link to="/">
          <button
            className="w-[80px] h-[34px] bg-blue-700 rounded-md text-teal-200"
            onClick={signOutHandler}
          >
            Logout
          </button>
        </Link> */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead className="w-full bg-gray-200 h-[44px]">
              <tr className="px-2">
                <th className="px-4 text-start">Organization</th>
                <th className="px-4 text-start">Date</th>
                <th className="px-4 text-start">Category</th>
                <th className="px-4 text-start">Mode</th>
                <th className="px-4 text-start">Pending status</th>
                <th className="px-4 text-start">Amount</th>
                {/* <th className="px-4 text-start">Note</th> */}
              </tr>
            </thead>
            <tbody>
              {allExpenses.map(
                (expense, index) =>
                  expense.user === auth.currentUser.email && (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="py-2 px-4 text-left">
                        {expense.organization}
                      </td>
                      <td className="py-2 px-4 text-left">
                        {new Date(expense.date).toDateString()}
                      </td>
                      <td className="py-2 px-4 text-left">
                        {expense.category}
                      </td>
                      <td className="py-2 px-4 text-left">
                        {expense.paymentMethod}
                      </td>
                      <td className="py-2 px-4 text-left">
                        {expense.pending ? <span className="p-2 text-yellow-500 rounded-lg">Pending</span> : <span className="p-2 text-green-500 rounded-lg">Done</span> }
                      </td>
                      <td className="py-2 px-4 text-left">{expense.amount}</td>
                      {/* <td className="py-2 px-4 text-left">{expense.description}</td> */}
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default HomePage;
