import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container_navbar">
      <div className="navbar_logo">
        <i class="fa-solid fa-gamepad"></i>

        <div className="navbar_menu" onClick={handleMenu}>
          {isOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
      </div>
      <ul className={ isOpen ? "navbar_items navbar_active" : "navbar_items"}>
        <li onClick={handleMenu}>
          <Link to='/' >Home</Link>
        </li>
        <li onClick={handleMenu}>
          <Link to='/'>Platform</Link>
        </li>
        <li onClick={handleMenu}>
          <Link to='/'>Category</Link>
        </li>
        <li onClick={handleMenu}>
          <Link to='/'>Filter</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
