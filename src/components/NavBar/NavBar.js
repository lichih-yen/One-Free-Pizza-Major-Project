import React from "react";
import "./NavBar.scss";
import { AiOutlineHome } from "react-icons/ai";
import { IoPizzaOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
// import { useState } from "react";

const NavBar = () => {
  // const [isActiveNav, setIsActiveNav] = useState(true);

  return (
    <nav>
      <NavLink
        to="/"
        // onClick={() => setIsActiveNav(true)}
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <AiOutlineHome />
      </NavLink>
      <NavLink
        to="/getYourPizza"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        // onClick={() => setIsActiveNav(true)}
      >
        <IoPizzaOutline />
      </NavLink>
      <NavLink
        to="/orders"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        // className={isActiveNav === true ? "" : "null"}
        // onClick={() => setIsActiveNav(true)}
      >
        <IoDocumentTextOutline />
      </NavLink>
    </nav>
  );
};

export default NavBar;
