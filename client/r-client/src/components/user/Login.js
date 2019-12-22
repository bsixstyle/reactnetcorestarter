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
      <div className="c3">
        <h3>Udah punya account cuy? login dulu lah :)</h3>
        <hr />
        <input
          required
          type="email"
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
    </Fragment>
  );
}

export default Login;
