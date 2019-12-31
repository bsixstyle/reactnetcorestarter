import React, { useState, Fragment } from "react";
import UserServices from "../../services/UserServices";

function Login(props) {
  props.setName("Login");
  const _loginUser = {
    userName: "",
    password: ""
  };

  const [loginUser, setLoginUser] = useState(_loginUser);

  const login = async () => {
    await UserServices.login(loginUser);
    var isAuthenticated = await UserServices.isAuthenticated();
    props.setIsLoggedIn(isAuthenticated);
    if (isAuthenticated) props.history.push("/");
  };

  return (
    <Fragment>
      <div style={_style}>
        <div className="c-3 box white">
          <input
            required
            type="text"
            placeholder="Email"
            value={loginUser.userName}
            onChange={event =>
              setLoginUser({ ...loginUser, userName: event.target.value })
            }
          />
          <br />
          <br />
          <input
            required
            type="password"
            placeholder="Password"
            value={loginUser.password}
            onChange={event =>
              setLoginUser({ ...loginUser, password: event.target.value })
            }
          />
          <br />
          <br />
          <button onClick={login}>Login</button>
        </div>
      </div>
    </Fragment>
  );
}

const _style = {
  display: 'flex',
  alignItems: "center",
  justifyContent: "center",
  paddingTop: '3em'
};

export default Login;
