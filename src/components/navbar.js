import "./navbar.css";

import NavItem from "./navItem";
import useUser from "../hooks/useUser";

import IconHome from "../icons/IconHome";
import IconCreditCard from "../icons/iconCreditCard";
import IconDollar from "../icons/iconDollar";
import IconSettings from "../icons/iconSettings";
import IconPower from "../icons/iconPower";
import IconCross from "../icons/iconCross";
import IconLogoGresos from "../icons/logoGresos";
import userAvatar from "../images/user-account-avatar.png";

export default function Navbar({ hiddeNav, handleHiddeNav }) {
  const { logout } = useUser();

  return (
    <nav
      className="navbar"
      style={hiddeNav ? { left: "0px" } : { left: "-300px" }}
    >
      <div className="brand">
        <IconLogoGresos
          className="logo"
          height={"3rem"}
          width={"3rem"}
          fill="var(--yellow)"
          alt="icon"
        />
        <h3 className="title"> Gresos </h3>
        <div>
          <IconCross
            onClick={handleHiddeNav}
            height={"1rem"}
            width={"1rem"}
            fill="var(--secondary)"
            alt="icon"
            className={hiddeNav ? "icon " : "icon hidden"}
          />
        </div>
      </div>

      <div className="profile">
        <img src={userAvatar} alt="avatar" />
        <h4>Username</h4>
      </div>

      <ul className="navbar_item_list">
        <li className="navbar_item" onClick={handleHiddeNav}>
          <NavItem destination="/" title="Home" Icon={IconHome} />
        </li>
        <li className="navbar_item" onClick={handleHiddeNav}>
          <NavItem
            destination="/expenses"
            title="Expenses"
            Icon={IconCreditCard}
          />
        </li>
        <li className="navbar_item" onClick={handleHiddeNav}>
          <NavItem destination="/income" title="Income" Icon={IconDollar} />
        </li>
        <li className="navbar_item" onClick={handleHiddeNav}>
          <NavItem
            destination="/categories"
            title="Categories"
            Icon={IconSettings}
          />
        </li>
        <li className="navbar_item">
          <IconPower
            height={"1.5rem"}
            width={"1.5rem"}
            fill="var(--secondary)"
            alt="icon"
            className="icon"
          />
          <a href="/login" onClick={() => logout()} className="nav-bar-link">
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
}
