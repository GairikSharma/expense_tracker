import React, { useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Tab from "../components/Tab";
import auth from "../firebaseConfig";
import { GlobalContext } from "../contextProvider";

function AddExpense() {
  const { loader, setLoader, successfullyExecuted, setSuccessfullyExecuted } =
    useContext(GlobalContext);
  const [organization, setOrganization] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [user, setUser] = useState("");
  const [pending, setPending] = useState(false);

  const url = "https://expense-tracker-lake-zeta.vercel.app/add-expenses";

  const addExpense = async (event) => {
    event.preventDefault();
    const currentUser = auth.currentUser.email;
    setUser(currentUser);

    const expenseData = {
      organization,
      amount,
      date,
      category,
      description,
      paymentMethod,
      user: currentUser,
      pending,
    };

    console.log("Submitting expense data:", expenseData);

    try {
      const response = await axios.post(url, expenseData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Expense added successfully:", response.data);
      setSuccessfullyExecuted(true);
      alert("Added Successfully, Go to home page to see expenses");
    } catch (error) {
      if (error.response) {
        console.error("Server responded with an error:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error in setting up the request:", error.message);
      }
    } finally {
      setOrganization("");
      setAmount(null);
      setCategory("");
      setDescription("");
      setPaymentMethod("");
      setUser("");
    }
  };

  return (
    <>
      <Tab />
      <div className="min-h-[90vh] flex flex-col justify-center items-center gap-2 p-4">
        <form
          onSubmit={addExpense}
          className="w-[95%] md:w-[65%] lg:w-[45%] p-5 rounded-lg flex flex-col gap-2 shadow-lg border-2 border-gray-200"
        >
          <div className="w-full h-auto flex gap-2 justify-center items-center">
            <div className="w-full flex gap-1 flex-col">
              <label htmlFor="" className="text-sm font-semibold">
                Organization
              </label>

              <input
                className="w-full h-[34px] rounded px-2 border-2 border-solid border-gray-200"
                type="text"
                name="organization"
                id="organization"
                placeholder="Enter Organization name..."
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                required
              />
            </div>

            <div className="w-full flex gap-1 flex-col">
              <label htmlFor="" className="text-sm font-semibold">
                Amount
              </label>
              <input
                className="w-full h-[34px] rounded px-2 border-2 border-solid border-gray-200"
                type="number"
                name="amount"
                id="amount"
                placeholder="Amount"
                onChange={(e) => setAmount(Number(e.target.value))}
                required
              />
            </div>
          </div>

          <div className="w-full h-auto flex gap-2 justify-between items-center">
            <div className="w-[50%] flex gap-1 flex-col">
              <label htmlFor="" className="text-sm font-semibold">
                Date
              </label>
              <input
                className="w-full h-[34px] rounded px-2 border-2 border-solid border-gray-200"
                type="date"
                name="date"
                id="date"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div className="w-[50%] flex gap-1 flex-col">
              <label htmlFor="" className="text-sm font-semibold">
                Category
              </label>
              <input
                className="w-full h-[34px] rounded px-2 border-2 border-solid border-gray-200"
                type="text"
                name="category"
                id="category"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="w-full h-auto flex gap-2 justify-center items-center">
            <div className="flex gap-1 flex-col">
              <label htmlFor="" className="text-sm font-semibold">
                Add note
              </label>
              <textarea
                className="w-full rounded px-2 border-2 border-solid border-gray-200"
                name="description"
                id="description"
                cols={100}
                rows={5}
                placeholder="Add note"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
          </div>

          <div className="w-full h-auto flex gap-2 justify-center items-center">
            <div className="w-full flex gap-1 flex-col">
              <label htmlFor="" className="text-sm font-semibold">
                Payment Mode
              </label>
              <input
                className="w-[100%] h-[34px] rounded px-2 border-2 border-solid border-gray-200"
                type="text"
                name="paymentMethod"
                id="paymentMethod"
                placeholder="Mode"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="w-full h-[44px] flex gap-2 justify-start items-center">
            <label htmlFor="pending">Pending</label>
            <input
              type="checkbox"
              name="pending"
              id="pending"
              checked={pending}
              onChange={(e) => {
                setPending(e.target.checked);
                console.log(e.target.checked); // Log the current checkbox state
              }}
            />
          </div>

          <button
            type="submit"
            className="w-[100px] h-[34px] bg-blue-500 text-white rounded"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default AddExpense;
