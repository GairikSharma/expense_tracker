import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Tab from "../components/Tab";

function AddExpense() {
  const [organization, setOrganization] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [user, setUser] = useState("");
  const [pending, setPending] = useState(false);

  const url = "https://expense-tracker-lake-zeta.vercel.app/add-expense";

  const addExpense = async (event) => {
    event.preventDefault();

    const expenseData = {
      organization,
      amount,
      date,
      category,
      description,
      paymentMethod,
      user,
      pending,
    };

    try {
      const response = await axios.post(url, expenseData);
      console.log("Expense added successfully:", response.data);
    } catch (error) {
      if (error.response) {
        console.error("Server responded with an error:", error.response.data);
      } else if (error.request) {
        console.error("No response received from the server:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
      console.error("Axios error config:", error.config);
    }
  };

  return (
    <>
      <Tab />
      <div className="flex flex-col items-start gap-2 p-4">
        <form onSubmit={addExpense} className="w-full flex flex-col gap-2">
          <div className="w-[600px] h-auto flex gap-2 justify-center items-center">
            <input
              className="w-[80%] h-[34px] rounded px-2 border-2 border-solid border-gray-200"
              type="text"
              name="organization"
              id="organization"
              placeholder="Enter Organization name..."
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
            />
            <input
              className="w-[20%] h-[34px] rounded px-2 border-2 border-solid border-gray-200"
              type="number"
              name="amount"
              id="amount"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>

          <div className="w-[600px] h-auto flex gap-2 justify-center items-center">
            <input
              className="w-[50%] h-[34px] rounded px-2 border-2 border-solid border-gray-200"
              type="date"
              name="date"
              id="date"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              className="w-[50%] h-[34px] rounded px-2 border-2 border-solid border-gray-200"
              type="text"
              name="category"
              id="category"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="w-[600px] h-auto flex gap-2 justify-center items-center">
            <textarea
              className="w-full rounded px-2 border-2 border-solid border-gray-200"
              name="description"
              id="description"
              cols={100}
              rows={5}
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="w-[600px] h-auto flex gap-2 justify-center items-center">
            <input
              className="w-[50%] h-[34px] rounded px-2 border-2 border-solid border-gray-200"
              type="text"
              name="paymentMethod"
              id="paymentMethod"
              placeholder="Mode"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <input
              className="w-[50%] h-[34px] rounded px-2 border-2 border-solid border-gray-200"
              type="text"
              name="user"
              id="user"
              placeholder="User"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>

          <div className="w-[600px] h-[44px] flex gap-2 justify-start items-center">
            <label htmlFor="pending">Pending</label>
            <input
              type="checkbox"
              name="pending"
              id="pending"
              checked={pending}
              onChange={(e) => setPending(e.target.checked)}
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
