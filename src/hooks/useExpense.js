import { useEffect, useState } from "react";
import useUser from "../hooks/useUser";

import {
  addTransaction,
  deleteTransaction,
  editTransaction,
  getAllTransaction,
} from "../services/transactions";

export function useExpense() {
  const { jwt } = useUser();
  const [expenses, setExpenses] = useState([]);

  useEffect(
    () =>
      getAllExpenses()
        .then((data) => setExpenses(data))
        .catch((e) => console.log(e)),
    []
  );

  const getAllExpenses = () =>
    getAllTransaction("expense", jwt).catch((e) => console.log(e));

  const addExpense = (expense) => {
    addTransaction(expense, jwt).then((returnedExpense) => {
      console.log("returned: ", returnedExpense);
      setExpenses((expenses) => expenses.concat(returnedExpense));
    });
  };

  const deleteExpense = (id) => {
    deleteTransaction(id, jwt)
      .then(
        setExpenses((expenses) =>
          expenses.filter((expense) => expense.id !== id)
        )
      )
      .catch((e) => console.log(e));
  };

  const editExpense = (expense) => {
    editTransaction(expense, jwt)
      .then(() =>
        setExpenses((expenses) =>
          expenses.map((e) => (e.id === expense.id ? expense : e))
        )
      )
      .catch((e) => console.log(e));
  };

  return [expenses, addExpense, deleteExpense, editExpense];
}
