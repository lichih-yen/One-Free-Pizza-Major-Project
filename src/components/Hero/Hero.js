import React from "react";
import "./Hero.scss";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-container">
      <Header />
      <NavBar />
      <div className="hero-content">
        <h1>Greatest Pizza Ever</h1>
        <p>Hi there,</p>
        <p>
          We are giving one free pizza to all our customers. <br />
          Use the menu above to get yours!
        </p>
        <p>
          Please, do not order more than once. <strong>We trust you!</strong>
        </p>
      </div>
    </div>
  );
};

export default Hero;
