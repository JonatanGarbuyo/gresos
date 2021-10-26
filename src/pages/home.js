import { useState, useEffect } from "react";

import IconCreditCard from "../icons/iconCreditCard";
import IconDollar from "../icons/iconDollar";
import Card from "../components/card";

import "./styles.css";

export default function Home() {
  const [homeResume, setHomeResume] = useState({ lastOperations: [] });

  useEffect(() => {
    fetch("/api/resume")
      .then((res) => res.json())
      .then((data) => setHomeResume(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <main className="page_container">
      <div className="card_container">
        <Card
          amount={homeResume["Balance"]}
          title="Balance"
          Icon={IconDollar}
        />
        <Card
          amount={homeResume["Total Expenses"]}
          title="Total Expenses"
          Icon={IconCreditCard}
        />
        <Card
          amount={homeResume["Total Income"]}
          title="Total Income"
          Icon={IconDollar}
        ></Card>
      </div>

      <div className="resume">
        <h2 className="resume_title">Resume</h2>
        <ul className="detail detail_container">
          <div className="detail detail_header">
            <li className="detail cell_header">id</li>
            <li className="detail cell_header">date</li>
            <li className="detail cell_header">concept</li>
            <li className="detail cell_header">category</li>
            <li className="detail cell_header">type</li>
            <li className="detail cell_header">amount</li>
          </div>
          {homeResume.lastOperations.map((operation) => {
            return (
              <div className="detail detail_row" key={operation.id}>
                <li className="cell">{operation.id}</li>
                <li className="cell">{operation.date}</li>
                <li className="cell">{operation.concept}</li>
                <li className="cell">{operation.category}</li>
                <li className="cell">{operation.type}</li>
                <li className="cell">{operation.amount}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
