import React, { useState } from "react";
import "./styles.css";
import peniwyseLogo from "../../assets/images/peniwyseLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="headerDiv">
      <div className="logo">
        <img src={peniwyseLogo} alt="logo" className="logoImg" />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </div>

      <ul className={`itemList ${isOpen ? "active" : ""}`}>
        <li className="items">Home</li>
        <li className="items">Features</li>
        <li className="items">How it Works</li>
        <li className="items">FAQs</li>
        <li className="items ">
          <button className="signup">Sign up</button>
        </li>
      </ul>

      {/* <div className="signup">
        <p>Sign up</p>
      </div> */}
    </div>
  );
}
