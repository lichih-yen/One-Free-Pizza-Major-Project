import React from "react";
import { NavLink } from "react-router-dom";
import "./MainMenu.scss";
import { AiOutlineHome } from "react-icons/ai";
import { IoPizzaOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";

function MainMenu() {
  return (
    <nav>
      <NavLink to="/">
        <AiOutlineHome />
      </NavLink>
      <NavLink to="/get-your-pizza">
        <IoPizzaOutline />
      </NavLink>
      <NavLink to="/orders">
        <IoDocumentTextOutline />
      </NavLink>
    </nav>
  );
}

export default MainMenu;
