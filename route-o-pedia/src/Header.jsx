import React from 'react'
import logo from "./Images/logo192.png";
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className='container-fluid'>
          <img src={logo} alt="Logo" style={{height: "35px", verticalAlign: "top"}} />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className={({isActive}) => isActive ? "nav-link active text-danger" : "nav-link"} to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({isActive}) => isActive ? "nav-link active text-danger" : "nav-link"} to="/about">About</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({isActive}) => isActive ? "nav-link active text-danger" : "nav-link"} to="/crypto/BTC/32">Crypto Detail</NavLink>
              </li>
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Product
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/product">Product</Link>
                  <Link className="dropdown-item" to="/product/list">Product List</Link>
                  <Link className="dropdown-item" to="/product/create">Create Product</Link>
                  <Link className="dropdown-item" to="/product/details/3">Product Details</Link>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;