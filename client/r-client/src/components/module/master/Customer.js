import React, { Fragment } from "react";

function Customer(props) {
  props.setName("Customer");
  return (
    <Fragment>
      <h1>Customer</h1>
    </Fragment>
  );
}

export default Customer;
