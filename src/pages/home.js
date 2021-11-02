import { useState, useEffect } from "react";

import { useCategories } from "../hooks/useCategories";

import DetailRowHome from "../components/detailRowHome";
import IconCreditCard from "../icons/iconCreditCard";
import IconDollar from "../icons/iconDollar";
import Card from "../components/card";

import "./styles.css";

export default function Home() {
  const [homeResume, setHomeResume] = useState({});
  const [lastOperations, setLastOperations] = useState([]);
  const [categories] = useCategories();

  // TODO add loading indication
  useEffect(() => {
    fetch("/api/resume")
      .then((res) => res.json())
      .then((data) => setHomeResume(data[0]))
      .catch((e) => console.log(e));

    fetch("/api/transactions/?limit=10")
      .then((res) => res.json())
      .then((lastTen) => setLastOperations(lastTen))
      .catch((e) => console.log(e));
  }, []);

  return (
    <main className="page_container">
      <div className="card_container">
        <Card
          amount={homeResume.Balance || "00.0"}
          title="Balance"
          Icon={IconDollar}
        />
        <Card
          amount={homeResume.total_month_expense || "00.0"}
          title="Month Expenses"
          Icon={IconCreditCard}
        />
        <Card
          amount={homeResume.total_month_income || "00.0"}
          title="Monthy Income"
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
          {lastOperations.map((operation) => {
            return (
              <DetailRowHome
                {...operation}
                key={operation.id}
                categories={categories}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
}
