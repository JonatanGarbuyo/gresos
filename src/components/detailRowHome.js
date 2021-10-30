import { useEffect, useState } from "react";

export default function DetailRowHome({
  amount,
  category_id,
  concept,
  date,
  id,
  type,
  categories = [],
}) {
  // //la primera vezx que se renderiza no esta el array de objetos categories
  const [category, setCategory] = useState({ name: "" });
  useEffect(() => {
    setCategory(categories.find((cat) => cat.id === parseInt(category_id)));
  }, [categories, category_id]);

  return (
    <div className="detail detail_row detail_row_home" key={id}>
      <div className="cell">{date}</div>
      <div className="cell">{concept}</div>
      <div className="cell">
        {typeof category != "undefined" ? category.name : null}
      </div>
      <div className="cell">{type}</div>
      <div className="cell">{amount}</div>
    </div>
  );
}
