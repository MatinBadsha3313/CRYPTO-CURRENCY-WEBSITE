import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className={`header ${isOpen ? "active" : ""}`}>
        <Link className="logo" to="/">
          <span> Finexo </span>
        </Link>

        <nav className="navbar">
          <ul className="navbar-items">
            <li>
              <NavLink
                to="/"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? "#058CCA" : "white",
                })}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? "#058CCA" : "white",
                })}
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="services"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? "#058CCA" : "white",
                })}
              >
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="whyUs"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? "#058CCA" : "white",
                })}
              >
                WHY US
              </NavLink>
            </li>
            <li>
              <NavLink
                to="team"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? "#058CCA" : "white",
                })}
              >
                TEAM
              </NavLink>
            </li>
            <li>
              <Link className="nav-link">
                {" "}
                <FaUser />
                LOGIN
              </Link>
            </li>

            {/* <form className="form-inline"> */}
            <button className="nav-btn" type="submit">
              <FaSearch className="nav-link" />
            </button>
            {/* </form> */}
          </ul>
        </nav>

        <div className="mobile-menu-btn" onClick={toggleNavbar}>
          <HiOutlineMenu className="open menu-icon" />
          <CgClose className="close menu-icon" />
        </div>
      </header>
    </>
  );
};

export default Header;
