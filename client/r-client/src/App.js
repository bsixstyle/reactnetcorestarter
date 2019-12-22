//default react
import React, { useState, Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//service check user is loggedin
import UserServices from "./services/UserServices";

//primary components
import Default from "./components/layout/Default";
import Footer from "./components/layout/Footer";
import Navigation from "./components/layout/Navigation";
import Header from "./components/layout/Header";
import Login from "./components/user/Login";

//module master
import Customer from "./components/module/master/Customer";
import Supplier from "./components/module/master/Supplier";

//module inventory
import Inventory from "./components/module/inventory/Inventory";
import Purchase from "./components/module/inventory/Purchase";
import Order from "./components/module/inventory/Order";

import "./bsix.css";
import "./bsix-themes.css";

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [name, setName] = useState("Bsix Apps");

  useEffect(() => {
    const checkLogin = async () => {
      let check = await UserServices.isAuthenticated();
      setIsLoggedIn(check);
    };
    if (!isLoggedIn) checkLogin();
  }, [isLoggedIn]);

  return (
    <Router>
        <Navigation
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          {...props}
        />
        <div className="c10 m2">
          <Header
            name={name}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
          <div className="container">
            <Route
              exact
              path="/"
              render={props => (
                <Default setName={setName} isLoggedIn={isLoggedIn} {...props} />
              )}
            ></Route>
            <Route
              exact
              path="/logout"
              render={props => <h1>selamat tinggal kawan</h1>}
            ></Route>
            {/*example multi render component*/}
            <Route
              exact
              path="/login"
              render={props => (
                <Fragment>
                  <Login
                    setName={setName}
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    {...props}
                  />
                  {/*you can add more component here*/}
                </Fragment>
              )}
            ></Route>

            {/* if user has logged in then render the protected routes */}
            {isLoggedIn && (
              <Fragment>
                <Route
                  exact
                  path="/customer"
                  render={props => (
                    <Customer
                      setName={setName}
                      isLoggedIn={isLoggedIn}
                      setIsLoggedIn={setIsLoggedIn}
                      {...props}
                    />
                  )}
                ></Route>
                <Route
                  exact
                  path="/supplier"
                  render={props => (
                    <Supplier
                      setName={setName}
                      isLoggedIn={isLoggedIn}
                      setIsLoggedIn={setIsLoggedIn}
                      {...props}
                    />
                  )}
                ></Route>
                <Route
                  exact
                  path="/inventory"
                  render={props => (
                    <Inventory
                      setName={setName}
                      isLoggedIn={isLoggedIn}
                      setIsLoggedIn={setIsLoggedIn}
                      {...props}
                    />
                  )}
                ></Route>
                <Route
                  exact
                  path="/purchase"
                  render={props => (
                    <Purchase
                      setName={setName}
                      isLoggedIn={isLoggedIn}
                      setIsLoggedIn={setIsLoggedIn}
                      {...props}
                    />
                  )}
                ></Route>
                <Route
                  exact
                  path="/order"
                  render={props => (
                    <Order
                      setName={setName}
                      isLoggedIn={isLoggedIn}
                      setIsLoggedIn={setIsLoggedIn}
                      {...props}
                    />
                  )}
                ></Route>
              </Fragment>
            )}
          </div>
          <Footer />
        </div>
    </Router>
  );
}

export default App;
