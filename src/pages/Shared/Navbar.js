import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex justify-center md:justify-end pt-2 md:pr-4 absolute right-0 font-semibold text-xl'>
            <NavLink className={({ isActive }) => isActive ? "active-nav" : "inactive-nav"} to="/login">Login</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active-nav" : "inactive-nav"} to="/signup">Sign Up</NavLink>
        </nav>
    );
};

export default Navbar;