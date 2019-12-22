import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import UserServices from "../../services/UserServices";

function Header(props) {
  const logout = () => {
    UserServices.logout();
    props.setIsLoggedIn(false);
  };
  return (
    <header>
      <div className="container">
        <Link className="brand" to="#">
          {props.name}
        </Link>

        <ul>
          {props.isLoggedIn && (
            <Fragment>
              <li>
                <Link to="/">
                  Hi <b>{UserServices.getCurrentUser().firstName}</b>
                </Link>
              </li>
              <li>
                <Link onClick={logout} to="/login">
                  Logout
                </Link>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Header;
