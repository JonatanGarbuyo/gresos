import "./login.css";
import * as Yup from "yup";

import { registerUser } from "../services/users";
import UserForm from "../forms/userForm";
import IconLogoGresos from "../icons/logoGresos";
import { Link } from "react-router-dom";

const newUserSchema = Yup.object({
  username: Yup.string().required().min(3).max(64).label("Username"),
  email: Yup.string().required().max(255).email().label("Email"),
  password: Yup.string().required().min(3).max(1024).label("Password"),
});

export default function Register() {
  const handleSubmit = async (userdata) => {
    const response = await registerUser(userdata);
    if (response.message) alert(response.message);
  };

  return (
    <main className="page_container">
      <header className="user_form_header">
        <IconLogoGresos
          className="user_form_logo"
          height={"3rem"}
          width={"3rem"}
          fill="var(--yellow)"
          alt="icon"
        />
        <h1>Gresos</h1>
      </header>
      <div className="user_form_container">
        <h1>Register</h1>
        <UserForm
          fields={[
            {
              name: "username",
              type: "text",
            },
            {
              name: "email",
              type: "email",
            },
            {
              name: "password",
              type: "password",
            },
          ]}
          handleSubmit={handleSubmit}
          validationSchema={newUserSchema}
        />
      </div>
      <Link to="/login" className="user_login_link">
        Login
      </Link>
    </main>
  );
}
