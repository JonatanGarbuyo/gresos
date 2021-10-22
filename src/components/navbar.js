import "./navbar.css";
import userAvatar from "../images/user-account-avatar.png";
import IconHome from "../icons/IconHome";
import NavItem from "./navItem";
import IconCreditCard from "../icons/iconCreditCard";
import IconDollar from "../icons/iconDollar";
import IconSettings from "../icons/iconSettings";
import IconPower from "../icons/iconPower";
import IconCross from "../icons/iconCross";
import IconLogoGresos from "../icons/logoGresos";

export default function Navbar({ hiddeNav, handleHiddeNav }) {
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
        <li className="navbar_item">
          <NavItem destination="#" title="Home" Icon={IconHome} />
        </li>
        <li className="navbar_item">
          <NavItem destination="#" title="Expenses" Icon={IconCreditCard} />
        </li>
        <li className="navbar_item">
          <NavItem destination="#" title="Income" Icon={IconDollar} />
        </li>
        <li className="navbar_item">
          <NavItem destination="#" title="Categories" Icon={IconSettings} />
        </li>
        <li className="navbar_item">
          <NavItem destination="#" title="Logout" Icon={IconPower} />
        </li>
      </ul>
    </nav>
  );
}
