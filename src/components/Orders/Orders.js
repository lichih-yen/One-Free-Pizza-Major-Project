import React from "react";
import "./Orders.scss";
import api from "../../api";
import uuid from "react-uuid";
import Order from "./Order/Order";

function Orders() {
  return (
    <div className="orders-container">
      <h1>Orders</h1>
      <Order />
    </div>
  );
}

export default Orders;
