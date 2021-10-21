import "./navbar.css";
import userAvatar from "../images/user-account-avatar.png";
import logo from "../icons/fi-rr-chart-histogram.svg";
import IconHome from "../icons/IconHome";
import NavItem from "./navItem";
import IconCreditCard from "../icons/iconCreditCard";
import IconDollar from "../icons/iconDollar";
import IconSettings from "../icons/iconSettings";
import IconPower from "../icons/iconPower";
import IconCross from "../icons/iconCross";

export default function Navbar({ hiddeNav, setHiddeNav }) {
  return (
    <nav
      className="navbar"
      style={hiddeNav ? { left: "0px" } : { left: "-300px" }}
    >
      <div className="brand">
        <img src={logo} className="logo" alt="Logo" />
        <h3 className="title"> Gresos </h3>
        <div>
          <IconCross
            onClick={() => setHiddeNav()}
            height={"1rem"}
            width={"1rem"}
            fill="var(--secondary)"
            alt="icon"
            className={hiddeNav ? "icon " : "icon hideen"}
          />
        </div>
      </div>

      <div className="profile">
        <img src={userAvatar} alt="avatar" />
        <h4>Username</h4>
      </div>

      <ul>
        <li>
          <NavItem destination="#" title="Home" Icon={IconHome} />
        </li>
        <li>
          <NavItem destination="#" title="Expenses" Icon={IconCreditCard} />
        </li>
        <li>
          <NavItem destination="#" title="Income" Icon={IconDollar} />
        </li>
        <li>
          <NavItem destination="#" title="Categories" Icon={IconSettings} />
        </li>
        <li>
          <NavItem destination="#" title="Logout" Icon={IconPower} />
        </li>
      </ul>
    </nav>
  );
}
