import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import UserServices from "../../services/UserServices";
import Menu from "./Menu";

function Navigation(props) {
  const logout = () => {
    UserServices.logout();
    props.setIsLoggedIn(false);
    hideMenu();
  };

  const [showMenu, setShowMenu] = useState(false);

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <Fragment>
      <label className="sidebar" htmlFor="sidebar">
        &#8801;
      </label>
      <input
        className="sidebar"
        type="checkbox"
        id="sidebar"
        checked={showMenu}
        onChange={elem => setShowMenu(elem.target.checked)}
      />
      <aside className="c2">
        <div className="container">
          <h3>
            <Link onClick={hideMenu} to="/">
              BSIXSTYLE
            </Link>
          </h3>
          <hr />
          {props.isLoggedIn ? (
            <Fragment>
              <Menu hideMenu={hideMenu} />
            </Fragment>
          ) : (
            <Link onClick={hideMenu} to="/login">
              Login
            </Link>
          )}
        </div>
      </aside>
    </Fragment>
  );
}

export default Navigation;
