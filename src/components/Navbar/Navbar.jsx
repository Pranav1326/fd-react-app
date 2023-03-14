import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-main">
                <div className="logo">
                    <Link to={'/'}>
                        <h1>FD Center</h1>
                    </Link>
                </div>
                <div className="links">
                    <ul>
                        <Link to={'/'}>
                            <li>Home</li>
                        </Link>
                        <Link to={'/wallet'}>
                            <li>Wallet</li>
                        </Link>
                        <Link to={'/authuser'}>
                            <li>Profile</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;