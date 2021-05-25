import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Badge from "../Common/Badge";
import User from "./User";
import Card from "./Navbar/Card";
import CardMessage from "./Navbar/CardMessage";
import CardBell from "./Navbar/CardBell";

const Navbar = () => {
  //   const [showBox, setShowBox] = useState("");

  const [showCard, setShowCard] = useState(false);
  const [msgCard, setMsgCard] = useState(false);
  const [bellCard, setBellCard] = useState(false);

  const handleCard = () => {
    console.log("card");
    setShowCard(!showCard);
    setMsgCard(false);
    setBellCard(false);
  };
  const handleMesage = () => {
    console.log("message handled");
    setMsgCard(!msgCard);
    setBellCard(false);
    setShowCard(false);
  };
  const handleBell = () => {
    setBellCard(!bellCard);
    setShowCard(false);
    setMsgCard(false);
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container-fluid navbaar-container mt-0">
       

        <NavLink className="navbar-brand ml-3 mb-2" to="/">
          <img
            src="/images/sales-plus-logo.png"
            alt="N/A"
            height="40px"
            className="p-0"
          />
        </NavLink>

        <p className="mt-3 mx-3">| Inspired by Business</p>

        <Badge
          value="6"
          classes="fa fa-bars"
          badge="badge badge-pill badge-notify bg-success"
          clickHandler={handleCard}
        />
        <Badge
          value="5"
          classes="fa fa-envelope-o"
          badge="badge badge-pill badge-notify bg-danger"
          clickHandler={handleMesage}
        />
        <Badge
          value="7"
          classes="fa fa-bell-o"
          badge="badge badge-pill badge-notify bg-warning"
          clickHandler={handleBell}
        />
      </div>

      <User />
      {showCard &&  <Card/>}
      {msgCard &&  <CardMessage/>}
      {bellCard && <CardBell/>}
    </nav>
  );
};

export default Navbar;
