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
      <NavLink to="/getyourpizza">
        <IoPizzaOutline />
      </NavLink>
      <NavLink to="/orders">
        <IoDocumentTextOutline />
      </NavLink>

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

// const iconStyle = {
//   color: "white",
//   fontSize: "20px",
// };

export default MainMenu;
