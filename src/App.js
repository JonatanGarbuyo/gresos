import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/header";
import Navbar from "./components/navbar.js";

import Home from "./pages/home";
import Expenses from "./pages/expenses";
import Income from "./pages/income";
import Categories from "./pages/categories";
import Login from "./pages/login";

function App() {
  const [hiddeNav, setHiddeNav] = useState(false);

  const handleHiddeNav = () => {
    setHiddeNav(!hiddeNav);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar hiddeNav={hiddeNav} handleHiddeNav={handleHiddeNav} />
        <div className="container">
          <Header handleHiddeNav={handleHiddeNav} />
          <Switch>
            <Route path="/expenses">
              <Expenses />
            </Route>
            <Route path="/income">
              <Income />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            {/* <Route path="/">
          <Home />
        </Route> */}
          </Switch>
          <footer className="footer">footer</footer>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
