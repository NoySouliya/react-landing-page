import React from "react";
import "../styles/CallToAction.css";
import { FiCode } from "react-icons/fi";

function CallToAction() {
  return (
    <div className="cta-bg">
      <div className="overlay"></div>
      <div className="container">
        <div className="cta-text">
          <FiCode className="FiCode" />
          <h2>I'm React dev</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            sapiente consectetur exercitationem ipsa facilis est illum nulla
            qui. Rem esse iste excepturi. Pariatur assumenda inventore magni at
            libero minus deserunt recusandae unde quibusdam, sit dicta!
          </p>
          <a href="" className="cta-btn">
            Get to know me
          </a>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
