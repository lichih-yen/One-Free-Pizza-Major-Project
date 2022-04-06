import React from "react";
import "./MainMenu.scss";
import { AiOutlineHome } from "react-icons/ai";
import { IoPizzaOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function MainMenu() {
  return (
    <nav>
      <a href="/">
        <AiOutlineHome />
      </a>
      <a href="/getyourpizza">
        <IoPizzaOutline />
      </a>
      <a href="/orders">
        <IoDocumentTextOutline />
      </a>

      {/* <NavLink to="/">
        <AiOutlineHome style={iconStyle} />
      </NavLink>
      <NavLink to="/getyourpizza">
        <IoPizzaOutline style={iconStyle} />
      </NavLink>
      <NavLink to="/orders">
        <IoDocumentTextOutline style={iconStyle} />
      </NavLink> */}
    </nav>
  );
}

const iconStyle = {
  color: "white",
  fontSize: "20px",
};

export default MainMenu;
