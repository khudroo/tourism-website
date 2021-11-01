import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

import "./MenuBar.css";

const MenuBar = () => {
  const { user, logOut } = useAuth();
  return (
    <div id="menu-area">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-3">
        <div className="container">
          <Link className="navbar-brand text-white fs-2 fw-bold" to="/">
            Sky-Traveler
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/blogs">
                  Blogs
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/gallery">
                  Gallery
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/addService">
                  Add Service
                </Link>
              </li>

              {user?.email && (
                <li className="nav-item">
                  <Link className="nav-link" to="/myOrders">
                    My Orders
                  </Link>
                </li>
              )}

              {user?.email && (
                <li className="nav-item">
                  <Link className="nav-link" to="/allOrders">
                    All Orders
                  </Link>
                </li>
              )}

              {!user?.email && (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <button className="btn btn-warning">Login</button>
                  </Link>
                </li>
              )}
            </ul>

            {user?.email && (
              <div>
                <button onClick={logOut} className="btn btn-warning mx-2">
                  Log-out
                </button>
                <span className="navbar-text text-white me-1">{user?.displayName}</span>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MenuBar;
