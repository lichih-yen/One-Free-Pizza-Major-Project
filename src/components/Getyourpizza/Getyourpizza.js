import React from "react";
import Form from "./Form/Form";
import "./Getyourpizza.scss";

function Getyourpizza() {
  return (
    <div className="getPizza-container">
      <h1>Get Your Pizza</h1>
      <p>Create your own pizza and submit your order.</p>
      <Form />
    </div>
  );
}

export default Getyourpizza;
