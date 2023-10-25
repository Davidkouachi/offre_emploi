import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar-area">
        <div className="mobile-nav">
            <Link to="index-2.html" className="logo">
                <img src="assets/img/logo.png" alt="logo" />
            </Link>
        </div>
        <div className="main-nav">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="navbar-brand" to="index-2.html">
                        <img src="assets/img/logo.png" alt="logo" />
                    </Link>
                    <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Accueil</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/job" className="nav-link">Emploi & Stage</Link>
                            </li>
                        </ul>
                        <div className="other-option">
                            <Link to="/login" className="signin-btn">Compte</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  );
}

export default NavBar;
