import React from "react";
import "./NavBar.scss";
import { AiOutlineHome } from "react-icons/ai";
import { IoPizzaOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <NavLink to="/">
          <AiOutlineHome style={iconsStyle} />
        </NavLink>
        <NavLink to="/getYourPizza">
          <IoPizzaOutline style={iconsStyle} />
        </NavLink>
        <NavLink to="/orders">
          <IoDocumentTextOutline style={iconsStyle} />
        </NavLink>
      </nav>
    </>
  );
};

const iconsStyle = {
  color: "#fff",
  fontSize: "2rem",
};

export default NavBar;
