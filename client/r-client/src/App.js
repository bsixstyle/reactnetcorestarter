//default react
import React, { useState, Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserServices from "./services/UserServices";
import BsixRoutes from "./components/BsixRoutes";
import Footer from "./components/layout/Footer";
import Navigation from "./components/layout/Navigation";
import Header from "./components/layout/Header";

import "./css/neon.css";

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [name, setName] = useState("Bsix Apps");

  useEffect(() => {
    const checkLogin = async () => {
      let check = await UserServices.isAuthenticated();
      setIsLoggedIn(check);
    };
    if (!isLoggedIn) checkLogin();
  }, [isLoggedIn]);

  return (
    <Router>
      <Navigation
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        {...props}
      />
      <div id="main">
        <Header
          name={name}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <div className="container">
          <BsixRoutes setName={setName} isLoggedIn={isLoggedIn}  setIsLoggedIn={setIsLoggedIn} {...props} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
