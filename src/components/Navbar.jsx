import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import logoImage from "../images/circle-half.svg";
import { UserContext } from '../App.js';

function Navbar() {

    // eslint-disable-next-line
    const { state, dispatch } = useContext(UserContext);

    function RenderMenu() {
        if (state) {
            return (
                <React.Fragment>
                    <li className="nav-item"><NavLink to="/" className="nav-link text-center">Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/about" className="nav-link text-center">About</NavLink></li>
                    <li className="nav-item"><NavLink to="/contact" className="nav-link text-center">Contact</NavLink></li>
                    <li className="nav-item"><NavLink to="/logout" className="nav-link text-center">Log Out</NavLink></li>
                </React.Fragment>
            );
        }
        else {
            return (
                <React.Fragment>
                    <li className="nav-item"><NavLink to="/" className="nav-link text-center">Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/about" className="nav-link text-center">About</NavLink></li>
                    <li className="nav-item"><NavLink to="/contact" className="nav-link text-center">Contact</NavLink></li>
                    <li className="nav-item"><NavLink to="/login" className="nav-link text-center">Login</NavLink></li>
                    <li className="nav-item"><NavLink to="/signup" className="nav-link text-center">Sign up</NavLink></li>
                </React.Fragment>
            );
        }
    }

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-xxl">
                    <NavLink to="/" className="navbar-brand">
                        {/* <span><img src={logoImage} alt="Logo" /></span> */}
                        {/* <span><img src={logoImage} alt="Logo" style={{ filter: "invert(50%)" }} /></span> */}
                        <span><img src={logoImage} alt="Logo" style={{ filter: "invert(100%)" }} /></span>
                        <span className="fw-bold text-secondary ms-2 text-uppercase">ang<span style={{color: "#fff"}}>kush</span></span>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav"
                        aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                        <ul className="navbar-nav">
                            <RenderMenu />
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Navbar;