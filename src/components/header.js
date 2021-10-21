import "./header.css";
import userAvatar from "../images/user-account-avatar.png";
import IconMenuBurger from "../icons/menuBurger";

export default function Header({ handleHiddeNav }) {
  return (
    <header className="header">
      <IconMenuBurger
        alt="icon"
        className="icon hidden"
        height={"2.5rem"}
        onClick={handleHiddeNav}
        width={"2.5rem"}
      />
      <div></div>
      <div className="profile">
        <img src={userAvatar} alt="avvatar" />
        <h3> Username </h3>
      </div>
    </header>
  );
}
