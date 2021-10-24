import "./styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import Card from "../components/card";
import IconCreditCard from "../icons/iconCreditCard";
import IconEdit from "../icons/iconEdit";
import IconDelete from "../icons/iconDelete";
import IconAdd from "../icons/iconAdd";
import NewEntryForm from "../forms/newEntryForm";

const exprenses = [
  {
    id: 10,
    concept: "Pizza",
    amount: "-24.99",
    date: "october 21, 2021",
    type: "expense",
    category: "food",
  },
  {
    id: 9,
    concept: "New game",
    amount: "-65",
    date: "october 18, 2021",
    type: "expense",
    category: "other",
  },
  {
    id: 8,
    concept: "Electricity  bill",
    amount: "-500",
    date: "october 8, 2021",
    type: "expense",
    category: "bills",
  },
  {
    id: 7,
    concept: "phone bill",
    amount: "-33",
    date: "october 8, 2021",
    type: "expense",
    category: "bills",
  },
  {
    id: 5,
    concept: "lunch",
    amount: "-20",
    date: "october 5, 2021",
    type: "expense",
    category: "food",
  },
  {
    id: 4,
    concept: "I loaded gasoline",
    amount: "-150",
    date: "october 4, 2021",
    type: "expense",
    category: "gas",
  },
  {
    id: 2,
    concept: "New suit",
    amount: "-300",
    date: "october 1, 2021",
    type: "expense",
    category: "clothes",
  },
  {
    id: 1,
    concept: "October rent",
    amount: "-600",
    date: "october 1, 2021",
    type: "expense",
    category: "rent",
  },
];

export default function Expenses() {
  const [showForm, setShowForm] = useState(false);
  const [allExpenses, setAllExpenses] = useState(exprenses);

  const totalExpenses = allExpenses.reduce((total, expense) => {
    total -= parseFloat(expense.amount);
    return total;
  }, 0);

  const handleDeleteOperation = (id) => {
    console.log("ID: ", id);
    setAllExpenses(allExpenses.filter((expense) => expense.id !== id));
  };

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
            allCategories={exprenses.map((expense) => expense.category)}
            entryType="expense"
            className={showForm ? "detail detail_row" : "form_hidden"}
            setShowForm={setShowForm}
          />

          {allExpenses.map(({ amount, category, concept, date, id, type }) => {
            return (
              <div className="detail detail_row" key={id}>
                <div className="cell">{date}</div>
                <div className="cell">{concept}</div>
                <div className="cell">{category}</div>
                <div className="cell">{type}</div>
                <div className="cell">{amount}</div>
                <div className="cell">
                  <Link to={`/edit/${id}`}>
                    <IconEdit
                      height={"100%"}
                      width={"1.5rem"}
                      fill="var(--primary)"
                      alt="icon"
                      className="icon_edit"
                    />
                  </Link>
                  <IconDelete
                    onClick={() => handleDeleteOperation(id)}
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
