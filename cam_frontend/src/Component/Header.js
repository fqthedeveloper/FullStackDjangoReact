import {Link} from 'react-router-dom';
import React from "react";
import Review from './Review.css';


function Header(){

    return (

                <div style={Review} className="bg-primary">
                    <nav className="navbar navbar-primary" >
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/">Cammra Web</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="offcanvas offcanvas-end text-bg-primary" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Cammra Web</h5>
                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/#">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/service">Servise</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Dropdown
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-primary bg-primary">
                                                <li><Link to="/gallery" className="dropdown-item">Gallery</Link></li>
                                                <li><Link className="dropdown-item" to="/custamer">Review</Link></li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li><a className="dropdown-item" href="/#">All Is Heare</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    {/* <form className="d-flex mt-3" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                            <button className="btn btn-success" type="submit">Search</button>
                                    </form> */}
                                    
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

    );
}

export default Header;