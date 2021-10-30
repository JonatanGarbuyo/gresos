import "./styles.css";
import { useState } from "react";

import { useIncome } from "../hooks/useIncome";

import Card from "../components/card";
import IconDollar from "../icons/iconDollar";
import IconAdd from "../icons/iconAdd";
import NewEntryForm from "../forms/newEntryForm";
import DetailRow from "../components/detailRow";

export default function Income() {
  const [showForm, setShowForm] = useState(false);
  const [activeEditForm, setActiveEditForm] = useState(null);
  const [incomes, addIncome, deleteIncome, editIncome, categories] =
    useIncome();

  const totalIncome = incomes.reduce((total, income) => {
    total += parseFloat(income.amount);
    return total;
  }, 0);

  return (
    <main className="page_container">
      <div className="card_container">
        <Card
          amount={totalIncome.toFixed(2)}
          title="Total Income"
          Icon={IconDollar}
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
        <h2 className="resume_title">Income</h2>
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
            onSubmit={addIncome}
            categories={categories}
            transactionType="income"
            formClassName={showForm ? "detail detail_row" : "form_hidden"}
            setShowForm={setShowForm}
          />

          {incomes.map((income) => {
            return activeEditForm === income.id ? (
              <NewEntryForm
                key={income.id}
                transactionType={income.type}
                setShowForm={setActiveEditForm}
                categories={categories}
                onSubmit={editIncome}
                formClassName="detail detail_row"
                initialValues={income}
              />
            ) : (
              <DetailRow
                {...income}
                key={income.id}
                categories={categories}
                onSubmit={editIncome}
                deleteTransaction={deleteIncome}
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
