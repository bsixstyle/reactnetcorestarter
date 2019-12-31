import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SupplierServices from "../../services/SupplierServices";

function Supplier(props) {
  props.setName("Supplier");

  const [suppliers, setSuppliers] = useState(null);
  const [parameters, setParameters] = useState({
    filter: "",
    totalRendered: 0
  });

  useEffect(() => {
    const InitialSuppliers = async () => {
      await getSuppliers();
    };
    if (!suppliers) {
      InitialSuppliers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [suppliers]);

  const getSuppliers = async () => {
    let _response = await SupplierServices.getSuppliers(parameters);
    if (suppliers) setSuppliers([...suppliers, ..._response]);
    else setSuppliers(_response);

    setParameters({
      ...parameters,
      totalRendered: parameters.totalRendered + _response.length
    });
  };

  const search = () => {
    setSuppliers(null);
    setParameters({ ...parameters, totalRendered: 0 });
  };

  const renderSupplier = (supplier, i) => (
    <tr key={i}>
      <td data-label="Name">{supplier.name}</td>
      <td data-label="Phone">{supplier.phone}</td>
      <td data-label="Address">{supplier.address}</td>
      <td>
        <Link className="button orange" to="/">
          Edit
        </Link>
      </td>
    </tr>
  );

  return (
    <Fragment>
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
      <button>Create New</button>
      <br />
      <br />
      {!suppliers ? (
        <p>Loading...</p>
      ) : (
        <Fragment>
          <table className="responsive">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Address</th>
                <th></th>
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
