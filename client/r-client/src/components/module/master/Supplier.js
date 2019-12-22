import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom"
import SupplierServices from "../../../services/SupplierServices";

function Supplier(props) {
  props.setName("Supplier");

  const [suppliers, setSuppliers] = useState(null);
  const [parameters, setParameters] = useState({
    filter: '',
    totalRendered: 0
  });

  useEffect(() => {
    const InitialSuppliers = async () => {
      await getSuppliers();
    };
    if (!suppliers) InitialSuppliers();
  }, [suppliers]);

  const getSuppliers = async () => {
    let _response = await SupplierServices.getSuppliers(parameters);

    if (suppliers !== null) setSuppliers([...suppliers, ..._response]);
    else setSuppliers(_response);

    setParameters({
      ...parameters,
      totalRendered: parameters.totalRendered + _response.length
    });
  };

  const search = async () => {
    setParameters({ ...parameters, totalRendered: 0 });
    setSuppliers(null);
  };

  const renderSupplier = (supplier, i) => (
    <Fragment key={i}>
      <tr>
        <td>{supplier.name}</td>
        <td>{supplier.phone}</td>
        <td>{supplier.address}</td>
        <td><Link className="button" to="/">Edit</Link></td>
      </tr>
    </Fragment>
  );

  return (
    <Fragment>
      <h1>Supplier</h1>
      <hr />
      <input
        type="text"
        value={parameters.filter}
        placeholder="search supplier name"
        onKeyDown={event => {
          if (event.key === "Enter") {
            search();
          }
        }}
        onChange={event =>
          setParameters({ ...parameters, filter: event.target.value })
        }
      />
      <br />
      <br />
      {!suppliers ? (
        <p>Loading...</p>
      ) : (
        <Fragment>
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Phone</td>
                <td>Address</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {suppliers.map((supplier, i) => renderSupplier(supplier, i))}
            </tbody>
          </table>
          <br />
          <button onClick={getSuppliers}>Load more</button>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Supplier;
