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
          <div className="detail detail_header detail_row_home">
            <div className="detail cell_header">date</div>
            <div className="detail cell_header">concept</div>
            <div className="detail cell_header">category</div>
            <div className="detail cell_header">type</div>
            <div className="detail cell_header">amount</div>
          </div>
          {homeResume.lastOperations.map((operation) => {
            return (
              <div
                className="detail detail_row detail_row_home"
                key={operation.id}
              >
                <div className="cell">{operation.date}</div>
                <div className="cell">{operation.concept}</div>
                <div className="cell">{operation.category}</div>
                <div className="cell">{operation.type}</div>
                <div className="cell">{operation.amount}</div>
              </div>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
