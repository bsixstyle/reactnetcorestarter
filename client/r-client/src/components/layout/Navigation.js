import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

function Navigation(props) {
  const [showMenu, setShowMenu] = useState(false);

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <Fragment>
      <input
        className="navbar-toggler"
        type="checkbox"
        id="menu-sidebar"
        checked={showMenu}
        onChange={elem => setShowMenu(elem.target.checked)}
      />
      <label
        htmlFor="menu-sidebar"
        className="overlay"
        id="menu-overlay"
      ></label>
      <div id="menu-neon">
        <h3>
          <Link onClick={hideMenu} to="/">
            BSIXSTYLE
          </Link>
        </h3>
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
    </Fragment>
  );
}

export default Navigation;
