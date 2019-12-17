//default react
import React, { useState, Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//service check user is loggedin
import UserServices from "./services/UserServices";

//primary components
import Default from "./components/layout/Default";
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

import "./Style.css";

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [name, setName] = useState("Bsix Apps");

  useEffect(() => {
    const checkLogin = async () => {
      setIsLoggedIn(await UserServices.isAuthenticated());
    };
    if (isLoggedIn === null) checkLogin();
  }, [isLoggedIn]);

  return (
    <Router>
      <Navigation
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        {...props}
      />
      <main className="g--10 g-m--12 m--2 m-m--0 no-margin-vertical">
        <Header name={name} />
        <div className="g--10 m--1">
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
      </main>
    </Router>
  );
}

export default App;
