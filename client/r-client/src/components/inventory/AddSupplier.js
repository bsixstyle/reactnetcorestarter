import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SupplierServices from "../../services/SupplierServices";

function AddSupplier(props) {
  props.setName("Add Supplier");

  return (
    <Fragment>
      <div className="row">
        <div className="c-3">
          <div className="box">
            <p className="box red">Name is required</p>
            <p className="box red">Phone is required</p>
            <p className="box red">Address is required</p>
          </div>
        </div>
        <div className="c-9">
          <div className="box">
            <div className="row">
              <div className="c-6">
                <label>Name</label>
                <input type="text" />
              </div>
              <div className="c-6">
                <label>Phone</label>
                <input type="text" />
              </div>
              <div className="c-12">
                <label>Address</label>
                <textarea />
              </div>
              <div className="c-12">
               <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AddSupplier;
