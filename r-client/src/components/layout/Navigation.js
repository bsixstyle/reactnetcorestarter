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
      <input
        type="checkbox"
        id="nav--super-vertical-responsive"
        checked={showMenu}
        onChange={elem => setShowMenu(elem.target.checked)}
      />
      <label htmlFor="nav--super-vertical-responsive">&#8801; Menu</label>
      <aside className="nav--super-vertical g--2 g-m--3 g-s--6 g-t--12 no-margin-vertical">
        <div className="g--12 logo-area no-margin-vertical">
          <Link onClick={hideMenu} to="/">
            <h4 className="color--black no-margin-vertical">Bsix</h4>
          </Link>
        </div>
        <nav className="g--12 no-margin-vertical">
          {props.isLoggedIn ? (
            <Fragment>
              <Link onClick={hideMenu} to="/">
                Hi <b>{UserServices.getCurrentUser().firstName}</b>{" "}
              </Link>
              <Menu hideMenu={hideMenu} />
              <Link onClick={logout} to="/login">
                Logout
              </Link>
            </Fragment>
          ) : (
            <Link onClick={hideMenu} to="/login">
              Login
            </Link>
          )}
        </nav>
      </aside>
    </Fragment>
  );
}

export default Navigation;
