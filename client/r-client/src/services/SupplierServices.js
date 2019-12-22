import HttpClient from "./HttpClient";

class SupplierServices {
  urlApi = () => {
    return "http://localhost:4000";
  };

  getSuppliers = async params => {
    let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    return await HttpClient.get(`${this.urlApi()}/suppliers?${queryString}`);
  };
}

const instance = new SupplierServices();
export default instance;
