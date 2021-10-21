import { useState } from "react";

import "./App.css";
import Header from "./components/header";

import Home from "./components/home.js";
import Navbar from "./components/navbar.js";

function App() {
  const [hiddeNav, setHiddeNav] = useState(false);

  const handleHiddeNav = () => {
    setHiddeNav(!hiddeNav);
    console.log("hiddeNav:", hiddeNav); ////
  };

  return (
    <div className="App">
      <Navbar hiddeNav={hiddeNav} handleHiddeNav={handleHiddeNav} />
      <div className="container">
        <Header handleHiddeNav={handleHiddeNav} />
        <Home />
        <footer className="footer">footer</footer>
      </div>
    </div>
  );
}

export default App;
