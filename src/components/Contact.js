import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui header">Contact</h3>
      <Link
        to={{
          pathname: "https://github.com/Kyle-Law",
        }}
        target="_blank"
      >
        GitHub
      </Link>
      <Link
        to={{
          pathname: "https://www.linkedin.com/in/kyle-lawzhunkhing/",
        }}
        target="_blank"
      >
        LinkedIn
      </Link>
    </div>
  );
}
