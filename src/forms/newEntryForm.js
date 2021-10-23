export default function NewEntryForm({ entryType, ...props }) {
  return (
    <form {...props}>
      <input
        type="date"
        name="date"
        onChange=""
        value=""
        className="cell"
      ></input>
      <input
        type="text"
        name="concept"
        onChange=""
        value=""
        className="cell"
      ></input>
      <input type="select" name="category" className="cell"></input>
      <input type="text" name="type" value={entryType} className="cell"></input>
      <input
        type="number"
        name="amount"
        onChange=""
        value="0.00"
        className="cell"
      ></input>
      <input type="submit" className="cell" value="SAVE"></input>
    </form>
  );
}
