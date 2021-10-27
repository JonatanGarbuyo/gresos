import { useEffect, useState } from "react";

import {
  addTransaction,
  deleteTransaction,
  editTransaction,
} from "../services/transactions";

export function useExpense() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("/api/transactions/expense")
      .then((res) => res.json())
      .then((data) => setExpenses(data))
      .catch((e) => console.log(e));
  }, []);

  const addExpense = (expense) => {
    addTransaction(expense).then((returnedExpense) =>
      setExpenses((expenses) => expenses.concat(returnedExpense))
    );
  };

  const deleteExpense = (id) => {
    deleteTransaction(id)
      .then(
        setExpenses((expenses) =>
          expenses.filter((expense) => expense.id !== id)
        )
      )
      .catch((e) => console.log(e));
  };

  const editExpense = (expense) => {
    editTransaction(expense)
      .then(() =>
        setExpenses((expenses) =>
          expenses.map((e) => (e.id === expense.id ? expense : e))
        )
      )
      .catch((e) => console.log(e));
  };

  const categories = expenses.map((expense) => expense.category);
  const expenseCategories = [...new Set(categories)];

  return [expenses, addExpense, deleteExpense, editExpense, expenseCategories];
}
