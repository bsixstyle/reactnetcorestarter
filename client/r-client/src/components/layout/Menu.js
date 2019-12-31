import React from "react";
import { Link } from "react-router-dom";
import UserServices from "../../services/UserServices";

function Menu(props) {
  const _parent = UserServices.getMenu().filter(menu => menu.parentId === null);
  const renderParent = (menu, i) => {
    const _child = UserServices.getMenu().filter(
      child => child.parentId === menu.id
    );
    const renderChild = (child, ic) => {
      return (
        <Link onClick={props.hideMenu} key={ic} to={child.action}>
          {child.name}
        </Link>
      );
    };

    if (menu.action === "#") {
      return (
        <div className="collapse" key={i}>
          <input type="checkbox" id={"nav-" + menu.id} checked={props.showMenu} />
          <label htmlFor={"nav-" + menu.id}>{menu.name}</label>
          <div>
            {_child.map((child, ic) => renderChild(child, ic))}
          </div>
        </div>
      );
    }

    return (
      <Link onClick={props.hideMenu} key={i} to={menu.action}>
        {menu.name}
      </Link>
    );
  };

  return _parent.map((menu, i) => renderParent(menu, i));
}

export default Menu;
