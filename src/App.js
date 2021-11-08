import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/header";
import Navbar from "./components/navbar.js";

import Home from "./pages/home";
import Expenses from "./pages/expenses";
import Income from "./pages/income";
import Categories from "./pages/categories";
import LoginPage from "./pages/login";
import TransactionsByCategory from "./pages/transactionsByCategory";
import Register from "./pages/register";

import { UserContextProvider } from "./context/UserContext";
import PrivateRoute from "./hoc/PrivateRoute";

function App() {
  const [hiddeNav, setHiddeNav] = useState(false);

  const handleHiddeNav = () => {
    setHiddeNav(!hiddeNav);
  };

  return (
    <UserContextProvider>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute>
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
                </Switch>
                <footer className="footer">footer</footer>
              </div>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </div>
    </UserContextProvider>
  );
}

export default App;
