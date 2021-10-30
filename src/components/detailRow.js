import IconEdit from "../icons/iconEdit";
import IconDelete from "../icons/iconDelete";
import { useEffect, useState } from "react";

export default function DetailRow({
  amount,
  category_id,
  concept,
  date,
  id,
  type,
  categories = [],
  setActiveEditForm,
  deleteTransaction,
}) {
  console.log("category_id:", category_id);
  // //la primera vezx que se renderiza no esta el array de objetos categories
  const [category, setCategory] = useState({ name: "" });
  useEffect(() => {
    setCategory(categories.find((cat) => cat.id === parseInt(category_id)));
  }, [categories, category_id]);

  return (
    <div className="detail detail_row" key={id}>
      <div className="cell">{date}</div>
      <div className="cell">{concept}</div>
      <div className="cell">
        {typeof category != "undefined" ? category.name : null}
      </div>
      <div className="cell">{type}</div>
      <div className="cell">{amount}</div>
      <div className="cell">
        <IconEdit
          onClick={() => setActiveEditForm(id)}
          height={"100%"}
          width={"1.5rem"}
          fill="var(--primary)"
          alt="icon"
          className="icon_edit"
        />
        <IconDelete
          onClick={() => deleteTransaction(id)}
          height={"100%"}
          width={"1.5rem"}
          fill="var(--primary)"
          alt="icon"
          className="icon_edit"
        />
      </div>
    </div>
  );
}
