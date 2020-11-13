import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div
      style={{
        borderRadius: "5px",
        marginTop: "100px",
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "WhiteSmoke",
        paddingTop: "20px",
      }}
    >
      <div>
        <h4 style={{ color: "blue" }}>Keep in touch</h4>{" "}
        <p>
          <b>Email</b>: drinks@gmail.com
        </p>
        <p>
          <b>Phone</b> :+215485222
        </p>
      </div>
      <div>
        <h4 style={{ color: "blue" }}>Working Hours</h4>{" "}
        <ul>
          <li>Monday 12h to 01h</li>
          <li>Tuesday 12h to 01h</li>
          <li>Sunday 12h to 01h</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
