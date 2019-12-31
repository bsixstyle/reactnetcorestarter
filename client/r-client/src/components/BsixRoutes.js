import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Default from "./layout/Default";

import Login from "./user/Login";

import Supplier from "./inventory/Supplier";
import AddSupplier from "./inventory/AddSupplier";

function BsixRoutes(props) {
  const setName = name => props.setName(name);
  const isLoggedIn = () => props.isLoggedIn();
  const setIsLoggedIn = param => props.setIsLoggedIn(param);
  return (
    <Fragment>
      <Route
        exact
        path="/"
        render={props => (
          <Default setName={setName} isLoggedIn={isLoggedIn} {...props} />
        )}
      ></Route>
      <Route
        exact
        path="/login"
        render={props => (
          <Login
            setName={setName}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            {...props}
          />
        )}
      ></Route>
      {isLoggedIn && (
        <Fragment>
          <Route
            exact
            path="/supplier"
            render={props => (
              <Supplier setName={setName} isLoggedIn={isLoggedIn} {...props} />
            )}
          ></Route>
          <Route
            exact
            path="/supplier/add"
            render={props => (
              <AddSupplier
                setName={setName}
                isLoggedIn={isLoggedIn}
                {...props}
              />
            )}
          ></Route>
        </Fragment>
      )}
    </Fragment>
  );
}

export default BsixRoutes;
