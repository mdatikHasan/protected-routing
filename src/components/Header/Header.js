import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {user, logOut} = useFirebase()
    return (
        <nav>
            <NavLink  to='/'>Home</NavLink>
            <NavLink  to='/services'>Services</NavLink>
            <NavLink  to='/about'>About</NavLink>
            <NavLink  to='/shops'>Shop</NavLink>
            <NavLink  to='/doctor'>Doctor</NavLink>
            {user?.email? <NavLink onClick={logOut} to='/login'>Log Out</NavLink>
            :
            <NavLink  to='/login'>Login</NavLink>
            }
            <span>{user.displayName}</span>
            
        </nav>
    );
};

export default Header;