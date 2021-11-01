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
  //the first time it is rendered, the categories object array is missing
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
