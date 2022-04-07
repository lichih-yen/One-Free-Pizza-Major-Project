import React from "react";
import "./Order.scss";

function Order(props) {
  return (
    <div className="card">
      <h2>Richie</h2>
      <div className="card-body">
        <h3>Address:</h3>
        <p>123 Test Street</p>
        <hr />
        <h3>Style: </h3>
        <p>Canadian</p>
        <hr />
        <h3>Crust: </h3>
        <p>Original Crust</p>
        <hr />
        <h3>Extra Cheese: </h3>
        <p>Yes</p>
        <hr />
        <button type="button" className="btn-remove" onClick={""}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default Order;
