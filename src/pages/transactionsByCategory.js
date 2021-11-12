import "./styles.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useUser from "../hooks/useUser";

import NewEntryForm from "../forms/newEntryForm";
import DetailRow from "../components/detailRow";
import {
  deleteTransaction,
  editTransaction,
  getAllTransactionByCategory,
} from "../services/transactions";
import { useCategories } from "../hooks/useCategories";
import Spinner from "../components/spinner";

export default function TransactionsByCategory() {
  let { id } = useParams();
  const { jwt } = useUser();
  const [activeEditForm, setActiveEditForm] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [categories] = useCategories();
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllTransactionByCategory(id, jwt)
      .then((data) => {
        setTransactions(data);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <main className="page_container">
      <div className="card_container"> {isloading ? <Spinner /> : null}</div>

      <div className="resume">
        <h2 className="resume_title">Transactions</h2>
        <div className="detail detail_container">
          <div className="detail detail_header">
            <div className="detail cell_header">date</div>
            <div className="detail cell_header">concept</div>
            <div className="detail cell_header">category</div>
            <div className="detail cell_header">type</div>
            <div className="detail cell_header">amount</div>
            <div className="detail cell_header"></div>
          </div>

          {transactions.map((expense) => {
            return activeEditForm === expense.id ? (
              <NewEntryForm
                key={expense.id}
                transactionType={expense.type}
                setShowForm={setActiveEditForm}
                categories={categories}
                onSubmit={editTransaction}
                formClassName="detail detail_row"
                initialValues={expense}
              />
            ) : (
              <DetailRow
                {...expense}
                key={expense.id}
                categories={categories}
                deleteTransaction={deleteTransaction}
                activeEditForm={activeEditForm}
                setActiveEditForm={setActiveEditForm}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
