import { Link } from "react-router-dom";

export default function LoginForm(props) {
  return (
    <form {...props}>
      <label htmlFor="email">Email</label>
      <input
        className="login_form_input"
        type="text"
        id="email"
        name="email"
      ></input>
      <label htmlFor="password">Password</label>
      <input
        className="login_form_input"
        type="password"
        id="password"
        name="password"
      ></input>
      <input
        type="button"
        value="Login"
        className="login_form_input login_form_button"
      ></input>
      <Link to="/register" className="login_register_link">
        Register
      </Link>
    </form>
  );
}
