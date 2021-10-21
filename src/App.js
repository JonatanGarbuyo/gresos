import { useState } from "react";

import "./App.css";

import userAvatar from "./images/user-account-avatar.png";
import Home from "./components/home.js";
import Navbar from "./components/navbar.js";
import IconMenuBurger from "./icons/menuBurger";

function App() {
  const [hiddeNav, setHiddeNav] = useState(false);

  const handleHiddeNav = () => {
    setHiddeNav(!hiddeNav);
    console.log("hiddeNav:", hiddeNav); ////
  };

  return (
    <div className="App">
      <Navbar hiddeNav={hiddeNav} setHiddeNav={setHiddeNav} />

      <div className="container">
        <header className="header">
          <IconMenuBurger
            alt="icon"
            // className={hiddeNav ? "icon  " : "icon hideen"}
            className="icon hideen"
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

        <Home />

        <footer className="footer">footer</footer>
      </div>
    </div>
  );
}

export default App;
