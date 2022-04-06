import React from "react";
import "./NavBar.scss";
import { AiOutlineHome } from "react-icons/ai";
import { IoPizzaOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { NavLink, Link } from "react-router-dom";
import GetYourPizza from "../GetYourPizza/GetYourPizza";
import { useState } from "react";

const NavBar = () => {
  const [isActive, setIsActive] = useState(true);

  const handleNavClick = () => {
    setIsActive(!isActive);
  };

  return (
    <nav>
      <Link
        to="/"
        onClick={handleNavClick}
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <AiOutlineHome />
      </Link>
      <Link
        to="/getYourPizza"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        onClick={handleNavClick}
      >
        <IoPizzaOutline />
      </Link>
      <Link
        to="/orders"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        // className={isActiveNav === true ? "" : "null"}
        onClick={handleNavClick}
        // className={isActive === !isActive}
      >
        <IoDocumentTextOutline />
      </Link>
    </nav>
  );
};

export default NavBar;
