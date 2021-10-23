import "./card.css";

export default function Card({ amount = "0.00", title = "", Icon }) {
  return (
    <div className="card">
      <div>
        <h1 className="amount">{amount}</h1>
        <b>{title}</b>
      </div>
      {
        <Icon
          alt="icon"
          height={"2.5rem"}
          width={"2.5rem"}
          fill="var(--secondary)"
          className=""
        />
      }
    </div>
  );
}
