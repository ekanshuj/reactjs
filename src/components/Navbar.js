import PropTypes from 'react';
import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">{props.mainSection}</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode === 'dark' ? 'light' : 'dark'}`} to="/about">About</Link>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className={`btn btn-outline-success ${props.mode === 'dark' ? 'light' : 'dark'}`} type="submit">Search</button>
          </form>
        </div>
      </div>
      <div className="form-check form-switch">
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
      </div>
    </nav>
  )
}

Navbar.propType = {
  title: PropTypes.string,
  mainSection: PropTypes.string
  // you can use "ptsr" snippet to ease your workflow
}

Navbar.defaultProps = {
  title: 'developedbyekanshu',
  mainSection: 'About-Creator'
}
