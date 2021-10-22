import "./home.css";
import IconCreditCard from "../icons/iconCreditCard";
import IconDollar from "../icons/iconDollar";
import Card from "../components/card";

const homeResume = {
  Balance: "6,277.30",
  "Total Expenses": "1,250.00",
  "Total Income": "7,527.30",
  lastOperations: [
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
      id: 6,
      concept: "grandma gift",
      amount: "200",
      date: "october 7, 2021",
      type: "income",
      category: "",
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
      id: 3,
      concept: "paycheck",
      amount: "2500",
      date: "october 1, 2021",
      type: "income",
      category: "salary",
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
  ],
};

export default function Home() {
  return (
    <main className="home">
      <div className="card_container">
        <Card amount="6,277.30" title="Balance" Icon={IconDollar} />
        <Card amount="1,250.00" title="Total Expenses" Icon={IconCreditCard} />
        <Card amount="7,527.30" title="Total Income" Icon={IconDollar}></Card>
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
