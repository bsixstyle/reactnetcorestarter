import HttpClient from "./HttpClient";
import axios from "axios";

class UserServices {
  urlApi = () => {
    return "http://localhost:4000";
  };

  login = async user => {
    let res = await axios.post(`${this.urlApi()}/users/authenticate`, user);
    if (res.data.success) {
      localStorage.setItem("user", JSON.stringify(res.data.user));
      HttpClient.setTokenOnLogin(res.data.user.token);
    }
  };

  isAuthenticated = async () => {
    let serverCheck = await HttpClient.get(`${this.urlApi()}/users/check`);
    const token = JSON.parse(localStorage.getItem("user") || "{}")["token"];
    if (!token && !serverCheck) return false;
    else return true;
  };

  getMenu = () => {
    return JSON.parse(localStorage.getItem("user") || "{}")["menu"];
  };

  logout = () => {
    HttpClient.clearTokenOnLogout();
    localStorage.removeItem("user");
  };

  getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
}
const instance = new UserServices();
export default instance;
