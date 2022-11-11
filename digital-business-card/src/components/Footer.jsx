import React from "react";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <ul className="footer--icons">
        <li>
          <FaTwitterSquare />
        </li>
        <li>
          <FaFacebookSquare />
        </li>
        <li>
          <FaInstagramSquare />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaGithubSquare />
        </li>
      </ul>
    </div>
  );
}
