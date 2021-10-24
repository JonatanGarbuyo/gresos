import IconCheckCircle from "../icons/iconCheckCircle";
import IconCrossCircle from "../icons/iconCrossCircle";

export default function NewCategoryForm({ setShowForm, ...props }) {
  return (
    <form {...props}>
      <input
        type="text"
        name="category"
        // onChange=""
        // value=""
        className="cell"
      ></input>
      <div className="cell">
        <button type="submit" className="form_input_button">
          <IconCheckCircle height="100%" width="2rem" fill="green" />
        </button>

        <button type="reset" className="form_input_button">
          <IconCrossCircle
            height="100%"
            width="2rem"
            fill="red"
            onClick={() => setShowForm(false)}
          />
        </button>
      </div>
    </form>
  );
}
