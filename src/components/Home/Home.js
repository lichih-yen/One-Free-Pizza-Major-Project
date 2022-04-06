import React from "react";
import "./Home.scss";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome</h1>
      <p>Hi there,</p>
      <p>
        We are giving one free pizza to all our customers. <br />
        Use the menu above to get yours!
      </p>
      <p>
        Please, do not order more than once. <strong>We trust you!</strong>
      </p>
    </div>
  );
}

export default Home;
