/** @format */

import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";

import flatWelcome from "../../assets/img/flatWelcome.png";
import "../../assets/styles/Landing.scss";

export default function Landing() {
  return (
    <div>
      <NavigationBar />
      <div id="Landing-firstContent-grid">
        <div id="Landing-welcomeContainer">
          <h1>Vos projet n'ont pas de limite.</h1>
          <h2>
            Ingénios'IT est l'association de création de projets de l'esiee-it
          </h2>
          <Link className="" to="">
            Créer un projet
          </Link>
        </div>
        <img src={flatWelcome} alt="decoration" />
      </div>
    </div>
  );
}
