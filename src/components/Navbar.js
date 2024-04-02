import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar() {
    return(
        <nav className="navbar navbar-light bg-light navbar-expand-sm  fixed-top">
        <Link to="/" className="navbar-brand  ">
            <h1 className="display3 font-italic pl-5">Abhinay</h1>
        </Link>
        <Link to="/contact" className="ml-auto mx-3">
            <button className="btn btn-outline-info   ">
                contact me
            </button>
        </Link>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#abhi">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0"  id="abhi">
            <ul className="navbar-nav ">
                <li className="nav-item">
                    <Link to="/" className="nav-link text-dark h6 my-auto ">home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link text-dark h6 my-auto">about</Link>
                </li>
                <li className="nav-item">
                    <Link to="/allblogs" className="nav-link text-dark h6 my-auto ">Blogs</Link>
                </li>
                <li className="nav-item ">
                    <Link to="/allprojects" className="nav-link text-dark h6 my-auto ">projects</Link>
                </li>
            </ul>
        </div>
    </nav>

    
    );
}

export default Navbar;