import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="tabs">
        <Link to="/" className="tab">
          Home
        </Link>
        <Link to="/add" className="tab">
          Add Post
        </Link>
      </div>
    </header>
  );
}

export default Header;
