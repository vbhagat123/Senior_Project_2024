import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span>Threads</span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/kids"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Kids
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/mens"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Mens
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/womens"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Womens
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/loginSignup"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/cart"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Cart
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <div>x</div>
              </span>
            ) : (
              <span className="icon">
                <div>☰</div>
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;