import React from "react";
import peniwyseLogo from "../../assets/images/peniwyseLogo.svg";
import "./styles.css";

export default function Footer() {
  return (
    <div className="container">
      <div className="footerDiv">
        <div className="logo">
          <img src={peniwyseLogo} alt="logo" className="logoImg" />
        </div>

        <ul className="itemsList">
          <li className="item">Home</li>
          <li className="item">Features</li>
          <li className="item">How it Works</li>
          <li className="item">FAQs</li>
        </ul>

        <div className="follow">
          <p>Follow us:</p>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-dribbble"></i>
          <i class="fa-brands fa-x-twitter"></i>
        </div>
      </div>
      <p className="copyright">© 2024 Peniwyse - All rights reserved.</p>
    </div>
  );
}
