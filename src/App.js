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
import TransactionsByCategory from "./pages/transactionsByCategory";

function App() {
  const [hiddeNav, setHiddeNav] = useState(false);

  const handleHiddeNav = () => {
    setHiddeNav(!hiddeNav);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route>
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
                <Route path="/transactions/category/:id">
                  <TransactionsByCategory />
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
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
