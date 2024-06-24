import React from "react";
import { Link } from "react-router-dom";
import "./Componentcss.css";
import "./CSS/headfoot.css";
const Footer = () => {
  return (
    <footer
      style={{
        minHeight: "100px",
        width: "100%",
        color: "white",
      }}
      className="d-flex justify-content-center  align-items-center flex-column bg-dark"
    >
      <h2 className="footer-heading">
        {" "}
        All Right Reserved &#169; Zohaib Musharaf
      </h2>
      <div>
        <Link to="/about">About </Link> | <Link to="contact"> Contect </Link>|
        <Link to="/privacypolicy"> Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
