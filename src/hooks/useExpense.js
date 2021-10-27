import { useEffect, useState } from "react";

export function useExpense() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("/api/transactions/expense")
      .then((res) => res.json())
      .then((data) => setExpenses(data))
      .catch((e) => console.log(e));
  }, []);

  const deleteTransaction = (id) =>
    fetch(`/api/transactions/${id}`, {
      method: "DELETE",
    }).catch((e) => console.log(e));

  const deleteExpense = (id) => {
    deleteTransaction(id)
      .then(setExpenses(expenses.filter((expense) => expense.id !== id)))
      .catch((e) => console.log(e));
  };

  const addTransaction = (transaction) =>
    fetch(`/api/transactions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transaction),
    })
      .then((res) => res.json())
      .catch((e) => console.log(e));

  const addExpense = (expense) => {
    addTransaction(expense).then((returnedExpense) =>
      setExpenses(expenses.concat(returnedExpense))
    );
  };

  const categories = expenses.map((expense) => expense.category);
  const expenseCategories = [...new Set(categories)];

  const editTransaction = (transaction) =>
    fetch(`/api/transactions/${transaction.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transaction),
    }).catch((e) => console.log(e));

  const editExpense = (expense) => {
    editTransaction(expense)
      .then(() =>
        setExpenses(expenses.map((e) => (e.id === expense.id ? expense : e)))
      )
      .catch((e) => console.log(e));
  };

  return [expenses, addExpense, deleteExpense, editExpense, expenseCategories];
}
