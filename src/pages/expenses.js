import "./styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import Card from "../components/card";
import IconCreditCard from "../icons/iconCreditCard";
import IconEdit from "../icons/iconEdit";
import IconDelete from "../icons/iconDelete";
import IconAdd from "../icons/iconAdd";

export default function Expenses() {
  const [allExpenses, setAllExpenses] = useState([
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
  ]);

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

        <div className="card">
          <div>
            <div className="amount">add Entry</div>
          </div>
          <Link to="/new">
            <IconAdd
              alt="icon"
              height={"2.5rem"}
              width={"2.5rem"}
              fill="green"
              className=""
            />
          </Link>
        </div>
      </div>

      <div className="resume">
        <h2 className="resume_title">Expenses</h2>
        <ul className="detail detail_container">
          <div className="detail detail_header">
            <li className="detail cell_header">date</li>
            <li className="detail cell_header">concept</li>
            <li className="detail cell_header">category</li>
            <li className="detail cell_header">type</li>
            <li className="detail cell_header">amount</li>
            <li className="detail cell_header"></li>
          </div>
          {allExpenses.map(({ amount, category, concept, date, id, type }) => {
            return (
              <div className="detail detail_row" key={id}>
                <li className="cell">{date}</li>
                <li className="cell">{concept}</li>
                <li className="cell">{category}</li>
                <li className="cell">{type}</li>
                <li className="cell">{amount}</li>
                <li className="cell">
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
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
