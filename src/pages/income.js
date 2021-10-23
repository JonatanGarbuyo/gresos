import "./styles.css";
import IconDollar from "../icons/iconDollar";
import Card from "../components/card";
import { Link } from "react-router-dom";
import { useState } from "react";

import IconEdit from "../icons/iconEdit";
import IconDelete from "../icons/iconDelete";
import IconAdd from "../icons/iconAdd";
import NewEntryForm from "../forms/newEntryForm";

export default function Income() {
  const [showForm, setShowForm] = useState(false);
  const [allIncome, setAllIncome] = useState([
    {
      id: 6,
      concept: "grandma gift",
      amount: "200",
      date: "october 7, 2021",
      type: "income",
      category: "",
    },
    {
      id: 3,
      concept: "paycheck",
      amount: "2500",
      date: "october 1, 2021",
      type: "income",
      category: "salary",
    },
  ]);

  const totalIncome = allIncome.reduce((total, expense) => {
    total += parseFloat(expense.amount);
    return total;
  }, 0);

  const handleDeleteOperation = (id) => {
    console.log("ID: ", id);
    setAllIncome(allIncome.filter((income) => income.id !== id));
  };

  return (
    <main className="page_container">
      <div className="card_container">
        <Card
          amount={totalIncome}
          title="Total Income"
          Icon={IconDollar}
        ></Card>

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
        <h2 className="resume_title">Income</h2>
        <ul className="detail detail_container">
          <div className="detail detail_header">
            <li className="detail cell_header">date</li>
            <li className="detail cell_header">concept</li>
            <li className="detail cell_header">category</li>
            <li className="detail cell_header">type</li>
            <li className="detail cell_header">amount</li>
            <li className="detail cell_header"></li>
          </div>

          <NewEntryForm
            entryType="income"
            className={showForm ? "detail detail_row" : "form_hidden"}
          />

          {allIncome.map(({ amount, category, concept, date, id, type }) => {
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
