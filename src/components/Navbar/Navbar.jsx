import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const user = useSelector(state => state.userReducer.token);
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
                        <Link to={user ? '/profile' : '/auth'}>
                            <li id='auth'> {user ? "Profile" : "Login"} </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;