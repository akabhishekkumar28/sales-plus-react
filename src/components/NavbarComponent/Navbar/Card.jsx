import React from "react";
import "./Card-syle.css";

const Card = () => {
  return (
    <div className="notification">

      <div className="first"> you have six pending tasks</div>

      <div className="second">
        <div>Dashboard v1.3 </div>
        <div className="bar">
          <div className="green_bar"></div>
          
        </div>
        
      </div>

      <div className="second">
        <div>Database Update </div>
        <div className="bar">
          <div className="yellow_bar"></div>
        </div>
      </div>

      <div className="second">
        <div>Iphone Development </div>
        <div className="bar">
          <div className="blue_bar"></div>
        </div>
      </div>

      <div className="second">
        <div>Mobile App </div>
        <div className="bar">
          <div className="red_bar"></div>
        </div>
      </div>

      <div className="second">
        <div>Dashboard v1.3 </div>
        <div className="bar">
          <div className="green_bar"></div>
        </div>
      </div>
<p>See all tasks</p>
    </div>
  );
};

export default Card;
