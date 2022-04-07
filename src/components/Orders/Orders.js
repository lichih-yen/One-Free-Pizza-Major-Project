import React, { useEffect, useState } from "react";
import "./Orders.scss";
import api from "../../api";
import uuid from "react-uuid";
import Order from "./Order/Order";
// import Form from "../Getyourpizza/Form/Form";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const orders = [
      {
        id: uuid(),
        style: "Canadian",
        crust: "Original Crust",
        cheese: true,
        name: "Richie",
        address: "123 Test St.",
      },
      {
        id: uuid(),
        style: "Hawaiian",
        crust: "Thin Crust",
        cheese: true,
        name: "Lucy",
        address: "321 Trying Dr.",
      },
      {
        id: uuid(),
        style: "Margherita",
        crust: "Gluten-Free Crust",
        cheese: false,
        name: "Calvin",
        address: "799 Topone Ave.",
      },
    ];

    // api.get("/orders").then((response) => {
    //   if (response.status === "200") {
    //     setOrders(response.data);
    //   }
    // });
    setOrders(orders);
  }, []);

  const handleOrderRemove = (id) => {
    let updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
  };

  const addOrder = (newOrder) => {
    const updatedOrders = [...orders, newOrder];
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
            addOrder={addOrder}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
