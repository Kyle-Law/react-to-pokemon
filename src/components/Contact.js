import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui header">Contact</h3>
      <div className="social-media-container">
        <Link
          className=""
          to={{
            pathname: "https://github.com/Kyle-Law",
          }}
          target="_blank"
        >
          <i class="fab fa-github"></i> GitHub
        </Link>
        <Link
          to={{
            pathname: "https://www.linkedin.com/in/kyle-lawzhunkhing/",
          }}
          target="_blank"
        >
          <i class="fab fa-linkedin"></i> Linkedin
        </Link>
      </div>
    </div>
  );
}
