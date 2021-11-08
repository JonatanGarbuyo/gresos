import "./login.css";
import { useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import * as Yup from "yup";

import useUser from "../hooks/useUser";
import UserForm from "../forms/userForm";

import IconLogoGresos from "../icons/logoGresos";
import userAvatar from "../images/user-account-avatar.png";

const loginUserSchema = Yup.object({
  email: Yup.string().required().max(255).email().label("Email"),
  password: Yup.string().required().min(3).max(1024).label("Password"),
});

export default function LoginPage() {
  const location = useLocation();
  const history = useHistory();
  const { isLogged, login } = useUser();
  let { from } = location.state || { from: { pathname: "/" } };

  useEffect(() => {
    if (isLogged) history.replace(from);
  }, [isLogged]);

  const handleSubmit = (data) => {
    login(data);
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
        <img src={userAvatar} alt="avatar" className="user_form_avatar" />
        <h1>Login</h1>
        <UserForm
          fields={[
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
          validationSchema={loginUserSchema}
        />
      </div>
      <Link to="/register" className="user_register_link">
        Register
      </Link>
    </main>
  );
}
