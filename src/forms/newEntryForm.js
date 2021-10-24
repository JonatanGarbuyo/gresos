import IconCheckCircle from "../icons/iconCheckCircle";
import IconCrossCircle from "../icons/iconCrossCircle";

export default function NewEntryForm({ entryType, setShowForm, ...props }) {
  return (
    <form {...props}>
      <div className="cell">
        <input
          className="form_input"
          type="date"
          name="date"
          onChange=""
          value=""
        />
      </div>
      <div className="cell">
        <input
          className="form_input"
          type="text"
          name="concept"
          onChange=""
          value=""
        />
      </div>
      <div className="cell">
        <input className="form_input" type="select" name="category" />
      </div>
      <div className="cell">
        <input
          className="form_input"
          type="text"
          name="type"
          value={entryType}
        />
      </div>
      <div className="cell">
        <input
          className="form_input"
          type="number"
          name="amount"
          onChange=""
          value="0.00"
        />
      </div>
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
