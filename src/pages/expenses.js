import "./styles.css";
import { useState } from "react";

import { useExpense } from "../hooks/useExpense";
import { useCategories } from "../hooks/useCategories";

import Card from "../components/card";
import IconCreditCard from "../icons/iconCreditCard";
import IconAdd from "../icons/iconAdd";
import NewEntryForm from "../forms/newEntryForm";
import DetailRow from "../components/detailRow";
import Spinner from "../components/spinner";

export default function Expenses() {
  const [expenses, addExpense, deleteExpense, editExpense, isLoading] =
    useExpense();
  const [categories] = useCategories();
  const [activeEditForm, setActiveEditForm] = useState(null);

  const totalExpenses = expenses.reduce((total, expense) => {
    total += parseFloat(expense.amount);
    return total;
  }, 0);

  return (
    <main className="page_container">
      <div className="card_container">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Card
              amount={totalExpenses.toFixed(2)}
              title="Total Expenses"
              Icon={IconCreditCard}
            />
            <IconAdd
              alt="icon"
              height={"2.5rem"}
              width={"2.5rem"}
              fill="green"
              className="addButton"
              onClick={() => setActiveEditForm(0)}
            />
          </>
        )}
      </div>

      <div className="resume">
        <h2 className="resume_title">Expenses</h2>
        <div className="detail detail_container">
          <div className="detail detail_header">
            <div className="detail cell_header">date</div>
            <div className="detail cell_header">concept</div>
            <div className="detail cell_header">category</div>
            <div className="detail cell_header">type</div>
            <div className="detail cell_header">amount</div>
            <div className="detail cell_header"></div>
          </div>

          <NewEntryForm
            onSubmit={addExpense}
            categories={categories}
            transactionType="expense"
            formClassName={
              activeEditForm === 0 ? "detail detail_row" : "form_hidden"
            }
            setShowForm={setActiveEditForm}
          />

          {expenses.map((expense) => {
            return activeEditForm === expense.id ? (
              <NewEntryForm
                key={expense.id}
                transactionType={expense.type}
                setShowForm={setActiveEditForm}
                categories={categories}
                onSubmit={editExpense}
                formClassName="detail detail_row"
                initialValues={expense}
              />
            ) : (
              <DetailRow
                {...expense}
                key={expense.id}
                categories={categories}
                onSubmit={editExpense}
                deleteTransaction={deleteExpense}
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
