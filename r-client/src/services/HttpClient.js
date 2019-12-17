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
    return await this.axiosInstance
      .get(url)
      .then(resp => {
        return resp.data;
      })
      .catch(resp => {
        if (resp.response !== undefined && resp.response.status === "401") {
          localStorage.removeItem("user");
        } else {
          return Promise.reject(resp);
        }
      });
  }

  async post(url, formData) {
    return await this.axiosInstance
      .post(url, formData)
      .then(resp => {
        return resp.data;
      })
      .catch(resp => {
        if (resp.response !== undefined && resp.response.status === "401") {
          localStorage.removeItem("user");
        } else {
          return Promise.reject(resp);
        }
      });
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
