import React, { useState, useEffect } from "react";

function Header({ showModal, setShowModal }) {
  const startModal = () => {
    setShowModal(!showModal);
  };
  useEffect(() => {
    startModal();
  }, []);

  console.log(showModal);
  return (
    <div className="header">
      <p className="app-name">The Scroll</p>

      <ul className="links">
        <li className="create-btn">
          <button onClick={startModal}>Create</button>
        </li>
        <li>
          <button>Home</button>
        </li>
        <li>
          <button>Profile</button>
        </li>
        <li>
          <button>Logout</button>
        </li>
      </ul>
    </div>
  );
}

export default Header;

<button></button>;
