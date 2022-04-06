import React from "react";
import "./Header.scss";
import { FaPizzaSlice } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="header-container">
        <h1>
          <FaPizzaSlice style={iconPizza} />
          One Free Pizza
        </h1>
      </div>
    </>
  );
}

const iconPizza = {
  marginRight: "18px",
};

export default Header;
