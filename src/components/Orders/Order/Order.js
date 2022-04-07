import React from "react";
import "./Order.scss";

function Order(props) {
  const handleRemoveClick = () => {
    const id = props.order.id;
    props.handleOrderRemove(id);
  };

  return (
    <div className="main-container">
      <div className="card">
        <h2>{props.order.name}</h2>
        <div className="card-body">
          <h3>Address:</h3>
          <p>{props.order.address}</p>
          <hr />
          <h3>Style: </h3>
          <p>{props.order.style}</p>
          <hr />
          <h3>Crust: </h3>
          <p>{props.order.crust}</p>
          <hr />
          <h3>Extra Cheese: </h3>
          <p>{props.order.cheese}</p>
          <hr />
          <button
            type="button"
            className="btn-remove"
            onClick={handleRemoveClick}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;
