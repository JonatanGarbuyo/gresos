import IconEdit from "../icons/iconEdit";
import IconDelete from "../icons/iconDelete";

export default function DetailRow({
  amount,
  category,
  concept,
  date,
  id,
  type,
  setActiveEditForm,
  deleteTransaction,
}) {
  return (
    <div className="detail detail_row" key={id}>
      <div className="cell">{date}</div>
      <div className="cell">{concept}</div>
      <div className="cell">{category}</div>
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
