import React, { useEffect, useState } from "react";
import "./Orders.scss";
import api from "../../api";
import Order from "./Order/Order";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/orders").then((response) => {
      if (response.status === 200) {
        let data = response.data;
        setOrders(data);
        setLoading(false);
      }
    });
  }, [orders]);

  const handleOrderRemove = (id) => {
    let updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
  };

  return (
    <div className="orders-container">
      <h1>Orders</h1>
      <p>
        You have reveived <strong>{orders.length}</strong> order(s).
      </p>

      {loading && (
        <div className="loading">
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}

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
