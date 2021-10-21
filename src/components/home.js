import "./home.css";
import IconCreditCard from "../icons/iconCreditCard";
import IconDollar from "../icons/iconDollar";
import Card from "./card";

export default function Home() {
  return (
    <main className="home">
      <div className="card_container">
        <Card amount="6,277.30" title="Balance" Icon={IconDollar} />
        <Card amount="1,250.00" title="Total Expenses" Icon={IconCreditCard} />
        <Card amount="7,527.30" title="Total Income" Icon={IconDollar}></Card>
      </div>

      <div className="detalle">detalle</div>
    </main>
  );
}
