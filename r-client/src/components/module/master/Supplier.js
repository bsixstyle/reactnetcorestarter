import React, {Fragment, useState, useEffect } from 'react';
import SupplierServices from '../../../services/SupplierServices'

function Supplier(props) {
  const [suppliers,  setSuppliers] = useState(null);

  useEffect(() => {
    const getSuppliers = async () => {
      setSuppliers(await SupplierServices.getSuppliers());
    }
    if(!suppliers) getSuppliers();
  }, [suppliers])

  props.setName('Supplier');
  return (
    <Fragment>
      <h1>Supplier</h1>
    </Fragment>
  );
}

export default Supplier;
