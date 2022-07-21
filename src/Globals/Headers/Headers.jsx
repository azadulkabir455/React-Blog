import React from "react";
import {Link} from "react-router-dom";

export default function Headers() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/dashbord">Dashbord</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
