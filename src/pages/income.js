import "./styles.css";
import IconDollar from "../icons/iconDollar";
import Card from "../components/card";

const allIncome = [
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
];

export default function Income() {
  return (
    <main className="page_container">
      <div className="card_container">
        <Card amount="7,527.30" title="Total Income" Icon={IconDollar}></Card>
      </div>

      <div className="resume">
        <h2 className="resume_title">Income</h2>
        <ul className="detail detail_container">
          <div className="detail detail_header">
            <li className="detail cell_header">id</li>
            <li className="detail cell_header">date</li>
            <li className="detail cell_header">concept</li>
            <li className="detail cell_header">category</li>
            <li className="detail cell_header">type</li>
            <li className="detail cell_header">amount</li>
          </div>
          {allIncome.map((operation) => {
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
