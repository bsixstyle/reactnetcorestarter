import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import UserServices from "../../services/UserServices";

function Header(props) {
  const logout = () => {
    UserServices.logout();
    props.setIsLoggedIn(false);
  };
  return (
    <nav className="navbar fixed">
      <label className="navbar-toggler" htmlFor="menu-sidebar">
        &#8801;
      </label>
      <Link className="brand" to="#main">
        {props.name}
      </Link>
      <label className="navbar-toggler" htmlFor="menu-navbar">
        &#8801;
      </label>
      <input type="checkbox" id="menu-navbar" className="navbar-toggler" />
      <div className="right">
        {props.isLoggedIn && (
          <Fragment>
            <Link to="/">
              Hi, {UserServices.getCurrentUser().firstName}
            </Link>
            <Link onClick={logout} to="/login">
              Logout
            </Link>
          </Fragment>
        )}
      </div>
    </nav>
  );
}

export default Header;
