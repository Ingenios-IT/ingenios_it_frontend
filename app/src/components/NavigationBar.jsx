/** @format */

import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

import "../assets/styles/NavigationBar.scss";

export default function NavigationBar() {
  return (
    <div>
      <nav id="NavigationBar-main">
        {/* Link to an other page defined in Routes.js */}
        <img src={logo} alt="logo" />
        <div id="NavigationBar-centerLink">
          <Link to="">Accueil</Link>
          <Link to="">Projets</Link>
          <Link to="">Communautée</Link>
          <Link to="">L'association</Link>
        </div>
        <Link id="NavigationBar-loginBtn" to="">
          Connexion
        </Link>
      </nav>
    </div>
  );
}
