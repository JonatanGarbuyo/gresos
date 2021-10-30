import { useEffect, useState } from "react";
import { useCategories } from "./useCategories";

import {
  addTransaction,
  deleteTransaction,
  editTransaction,
  getAllTransaction,
} from "../services/transactions";

export function useIncome() {
  const [incomes, setIncome] = useState([]);
  const [categories] = useCategories();

  useEffect(() => {
    getAllTransaction("income")
      .then((data) => setIncome(data))
      .catch((e) => console.log(e));
  }, []);

  const addIncome = (income) => {
    addTransaction(income).then((returnedIncome) =>
      setIncome((incomes) => incomes.concat(returnedIncome))
    );
  };

  const deleteIncome = (id) => {
    deleteTransaction(id)
      .then(
        setIncome((incomes) => incomes.filter((income) => income.id !== id))
      )
      .catch((e) => console.log(e));
  };

  const editIncome = (income) => {
    editTransaction(income)
      .then(() =>
        setIncome((incomes) =>
          incomes.map((e) => (e.id === income.id ? income : e))
        )
      )
      .catch((e) => console.log(e));
  };

  return [incomes, addIncome, deleteIncome, editIncome, categories];
}
