import React from "react";
import "./MainMenu.scss";
import { AiOutlineHome } from "react-icons/ai";
import { IoPizzaOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function MainMenu() {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome style={iconStyle} />
      </a>
      <a href="#">
        <IoPizzaOutline style={iconStyle} />
      </a>
      <a href="#">
        <IoDocumentTextOutline style={iconStyle} />
      </a>
    </nav>
  );
}

const iconStyle = {
  color: "white",
  fontSize: "20px",
};

export default MainMenu;
