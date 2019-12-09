import React, { useState, Fragment } from 'react';
import UserServices from '../../services/UserServices';

function Login(props) {
  props.setName('Login');
  const _loginUser = {
    userName: '',
    password: ''
  }

   const [ loginUser, setLoginUser ] = useState(_loginUser); 

   const login = async () => {
      await UserServices.login(loginUser);
      var isAuthenticated = await UserServices.isAuthenticated();
      props.setIsLoggedIn(isAuthenticated);
      if(isAuthenticated)  props.history.push("/")
   }

  return (
    <Fragment>
        <p>Udah punya account cuy? login dulu lah :)</p>
        <div className="card g--4 g-m--6 g-s--10 g-t--12">      
          <input 
            type="email" 
            placeholder="Email" 
            value={loginUser.userName} 
            onChange={event => setLoginUser({...loginUser, userName: event.target.value})} />
          <input 
            type="password" 
            placeholder="Password" 
            value={loginUser.password} 
            onChange={event => setLoginUser({...loginUser, password: event.target.value})} />
          <button className="btn--raised btn--blue" onClick={login}>Login</button>
        </div>
    </Fragment>
  );
}

export default Login;
