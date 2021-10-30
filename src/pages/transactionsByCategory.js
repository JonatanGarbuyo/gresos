import "./styles.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import NewEntryForm from "../forms/newEntryForm";
import DetailRow from "../components/detailRow";
import {
  deleteTransaction,
  editTransaction,
  getAllTransactionByCategory,
} from "../services/transactions";
import { useCategories } from "../hooks/useCategories";

export default function TransactionsByCategory() {
  let { id } = useParams();
  const [activeEditForm, setActiveEditForm] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [categories] = useCategories();

  useEffect(() => {
    getAllTransactionByCategory(id)
      .then((data) => {
        setTransactions(data);
      })
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <main className="page_container">
      <div className="card_container"></div>

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
