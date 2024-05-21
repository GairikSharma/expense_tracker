const Expense = require("../models/schema");

const createNewExpense = async (req, res) => {
  try {
    const {
      organization,
      amount,
      date,
      category,
      description,
      paymentMethod,
      user,
      pending,
    } = req.body;

    
    if (!organization || !amount || !category || !description || !paymentMethod || !user || pending === undefined) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const createExpense = await Expense.create({
      organization,
      amount,
      date, 
      category,
      description,
      paymentMethod,
      user,
      pending,
    });

    res.status(201).json({ entity: createExpense });
  } catch (error) {
    console.error("Error creating new expense:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const readExpense = async (req, res) => {
  try {
    const allExpenses = await Expense.find();
    res.status(200).json({ allEntity: allExpenses });
  } catch (error) {
    console.error("Error reading expenses:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { new_expense: createNewExpense, all_expenses: readExpense };
