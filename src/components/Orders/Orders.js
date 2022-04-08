import React, { useEffect, useState } from "react";
import "./Orders.scss";
import api from "../../api";
import Order from "./Order/Order";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/orders").then((response) => {
      if (response.status === 200) {
        let data = response.data;
        setOrders(data);
      }
    });
  }, []);

  const handleOrderRemove = (id) => {
    let updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
  };

  return (
    <div className="orders-container">
      <h1>Orders</h1>
      <p>You have reveived {orders.length} order(s).</p>
      <div className="orders-card">
        {orders.map((order, index) => (
          <Order
            key={index}
            order={order}
            handleOrderRemove={handleOrderRemove}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
