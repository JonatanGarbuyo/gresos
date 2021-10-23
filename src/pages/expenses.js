import "./styles.css";
import IconCreditCard from "../icons/iconCreditCard";
import Card from "../components/card";

export default function Expenses() {
  const allExpenses = [
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

  return (
    <main className="page_container">
      <div className="card_container">
        <Card amount="1,250.00" title="Total Expenses" Icon={IconCreditCard} />
        {/* <Link to="newEntry">add Entry</Link> */}
      </div>

      <div className="resume">
        <h2 className="resume_title">Expenses</h2>
        <ul className="detail detail_container">
          <div className="detail detail_header">
            <li className="detail cell_header">id</li>
            <li className="detail cell_header">date</li>
            <li className="detail cell_header">concept</li>
            <li className="detail cell_header">category</li>
            <li className="detail cell_header">type</li>
            <li className="detail cell_header">amount</li>
          </div>
          {allExpenses.map((expense) => {
            return (
              <div className="detail detail_row" key={expense.id}>
                <li className="cell">{expense.id}</li>
                <li className="cell">{expense.date}</li>
                <li className="cell">{expense.concept}</li>
                <li className="cell">{expense.category}</li>
                <li className="cell">{expense.type}</li>
                <li className="cell">{expense.amount}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
