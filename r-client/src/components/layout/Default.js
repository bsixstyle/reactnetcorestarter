import React, { Fragment } from "react";

function Default(props) {
  props.setName("Default");
  return (
    <Fragment>
      <h1>Default Content</h1>
    </Fragment>
  );
}

export default Default;
