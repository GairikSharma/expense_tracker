const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  organization: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  pending: Boolean
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
