export default function NewCategoryForm(props) {
  return (
    <form {...props}>
      <input
        type="text"
        name="category"
        onChange=""
        value=""
        className="cell"
      ></input>
      <input type="submit" className="cell" value="SAVE"></input>
    </form>
  );
}
