import React from "react";
import "./styles.css";

// interface PopupProps {
//   onClose: () => void;
// }

export default function ComingSoon({ onClose }) {
  return (
    <div className="popupOverlay">
      <div className="popupForm">
        <button className="closeBtn" onClick={onClose}>
          &times;
        </button>

        <div>
          <dotlottie-player
            src="https://lottie.host/6448e062-de53-45b4-be40-1057e3d66ae9/ryXcSSCznt.lottie"
            background="transparent"
            speed="1"
            style={{ width: "500px", height: "300px" }}
            loop
            autoplay
          />
        </div>
        <h1>We are Coming Soon!</h1>
        <p>
          We're bringing something fresh and exciting to the table. Be the first
          to experience it!
        </p>

        <div className="waitDiv">
          <div className="waitlist-container">
            {/* <input placeholder="Enter email" className="waitlist-input" /> */}
            <input placeholder="Enter email address" className="waitlist" />
            <button className="joinWaitlist">Notify Me</button>
          </div>
        </div>
      </div>
    </div>
  );
}
