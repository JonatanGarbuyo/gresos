import { useEffect, useState } from "react";
import useUser from "../hooks/useUser";

import {
  addTransaction,
  deleteTransaction,
  editTransaction,
  getAllTransaction,
} from "../services/transactions";

export function useIncome() {
  const { jwt } = useUser();
  const [incomes, setIncome] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(
    () =>
      getAllIncome()
        .then((data) => {
          setIncome(data);
          setIsLoading(false);
        })
        .catch((e) => console.log(e)),
    []
  );

  const getAllIncome = () =>
    getAllTransaction("income", jwt).catch((e) => console.log(e));

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

  return [incomes, addIncome, deleteIncome, editIncome, isloading];
}
