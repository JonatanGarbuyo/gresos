import "./styles.css";
import { useState } from "react";

import { useExpense } from "../hooks/useExpense";

import Card from "../components/card";
import IconCreditCard from "../icons/iconCreditCard";
import IconEdit from "../icons/iconEdit";
import IconDelete from "../icons/iconDelete";
import IconAdd from "../icons/iconAdd";
import NewEntryForm from "../forms/newEntryForm";

export default function Expenses() {
  const [showForm, setShowForm] = useState(false);
  const [expenses, deleteExpense, addExpense, expenseCategories] = useExpense();

  const totalExpenses = expenses.reduce((total, expense) => {
    total += parseFloat(expense.amount);
    return total;
  }, 0);

  return (
    <main className="page_container">
      <div className="card_container">
        <Card
          amount={totalExpenses}
          title="Total Expenses"
          Icon={IconCreditCard}
        />

        <IconAdd
          alt="icon"
          height={"2.5rem"}
          width={"2.5rem"}
          fill="green"
          className="addButton"
          onClick={() => setShowForm(true)}
        />
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
            addTransaction={addExpense}
            categories={expenseCategories}
            transactionType="expense"
            className={showForm ? "detail detail_row" : "form_hidden"}
            setShowForm={setShowForm}
          />

          {expenses.map(({ amount, category, concept, date, id, type }) => {
            return (
              <div className="detail detail_row" key={id}>
                <div className="cell">{date}</div>
                <div className="cell">{concept}</div>
                <div className="cell">{category}</div>
                <div className="cell">{type}</div>
                <div className="cell">{amount}</div>
                <div className="cell">
                  <IconEdit
                    // onClick={() => showEditForm(id)}
                    height={"100%"}
                    width={"1.5rem"}
                    fill="var(--primary)"
                    alt="icon"
                    className="icon_edit"
                  />
                  <IconDelete
                    onClick={() => deleteExpense(id)}
                    height={"100%"}
                    width={"1.5rem"}
                    fill="var(--primary)"
                    alt="icon"
                    className="icon_edit"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
