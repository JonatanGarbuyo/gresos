import "./styles.css";
import IconLogoGresos from "../icons/logoGresos";
import userAvatar from "../images/user-account-avatar.png";

export default function Login() {
  return (
    <main className="page_container">
      <header className="login_header">
        <IconLogoGresos
          className="login_logo"
          height={"3rem"}
          width={"3rem"}
          fill="var(--yellow)"
          alt="icon"
        />
        <h1>Gresos</h1>
      </header>

      <div className="login_container">
        <img src={userAvatar} alt="avatar" className="login_avatar" />
        <h1>Login</h1>
        <form className="login_form">
          <label for="username">Username</label>
          <input type="text" id="username" name="username"></input>
          <label for="password">Password</label>
          <input type="password" id="password" name="password"></input>
        </form>
      </div>
    </main>
  );
}
