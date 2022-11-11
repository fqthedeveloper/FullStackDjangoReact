import React from "react";
import Review from './Review.css';
import avatar from './logo512.png'



function Header(){

    return (

                <div style={Review} className="bg-primary">
                    <nav className="navbar navbar-primary" >
                        <div className="container-fluid">
                            <a className="navbar-brand font-weight-bold " href="/"><img src={avatar} width='40px' height='40px' alt="logo" className="logo" /> &nbsp;  Zoya Fashion Hub</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="offcanvas offcanvas-end text-bg-primary" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Zoya Fashion Hub</h5>
                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/service">Servise</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Dropdown
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-primary bg-primary">
                                                <li><a href="/gallery" className="dropdown-item">Gallery</a></li>
                                                <li><a className="dropdown-item" href="/custamer">Review</a></li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li><a className="dropdown-item" href="/#">All Is Heare</a></li>
                                            </ul>
                                        </li>
                                    </ul>                                                                      
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

    );
}

export default Header;