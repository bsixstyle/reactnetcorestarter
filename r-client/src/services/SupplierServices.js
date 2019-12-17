import HttpClient from "./HttpClient";

class SupplierServices {
  urlApi = () => {
    return "http://localhost:4000";
  };

  getSuppliers = async () => {
    return await HttpClient.get(`${this.urlApi()}/suppliers`);
  };
}

const instance = new SupplierServices();
export default instance;
