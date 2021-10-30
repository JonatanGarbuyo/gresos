import { useEffect, useState } from "react";
import { useCategories } from "./useCategories";

import {
  addTransaction,
  deleteTransaction,
  editTransaction,
  getAllTransaction,
} from "../services/transactions";

export function useExpense() {
  const [expenses, setExpenses] = useState([]);
  const [categories] = useCategories();

  useEffect(() => {
    getAllTransaction("expense")
      .then((data) => {
        setExpenses(data);
      })
      .catch((e) => console.log(e));
  }, []);

  const addExpense = (expense) => {
    addTransaction(expense).then((returnedExpense) => {
      console.log("returned: ", returnedExpense);
      setExpenses((expenses) => expenses.concat(returnedExpense));
    });
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

  return [expenses, addExpense, deleteExpense, editExpense, categories];
}
