import React from "react";
import Navbar from "./Navbar.jsx";

function Header(props) {
  return (
    <div>
      <header className="header">
        <h1>The Scroll</h1>
        <Navbar />
      </header>
    </div>
  );
}

export default Header;
