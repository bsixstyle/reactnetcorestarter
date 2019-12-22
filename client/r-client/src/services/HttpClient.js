import axios from "axios";

class httpClient {
  constructor() {
    const token = JSON.parse(localStorage.getItem("user") || "{}")["token"];
    const instance = axios.create({
      baseURL: "/",
      headers: { Authorization: `Bearer ${token}` }
    });
    this.axiosInstance = instance;
  }

  async get(url) {
    let res = await this.axiosInstance.get(url);
    if (res.response !== undefined && res.response.status === "401") {
      localStorage.removeItem("user");
    }

    return res.data;
  }



  async post(url, formData) {
    let res = await this.axiosInstance.post(url, formData);

    if (res.response !== undefined && res.response.status === "401") {
      localStorage.removeItem("user");
    }

    return res.data;
  }

  setTokenOnLogin = token => {
    this.axiosInstance.defaults.headers = { Authorization: `Bearer ${token}` };
  };

  clearTokenOnLogout = () => {
    localStorage.removeItem("user");
    this.axiosInstance.defaults.headers = {};
  };
}
const instance = new httpClient();
export default instance;
