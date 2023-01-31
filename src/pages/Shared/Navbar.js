import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AUTH_CONTEXT } from '../../context/AuthProvider';

const Navbar = () => {
    const { user, setUser } = useContext(AUTH_CONTEXT);
    const navigate = useNavigate();

    const handleLogout = () => {
        window.localStorage.clear();
        setUser(null);
        navigate('/login')
    }

    return (
        <nav className='flex justify-center md:justify-end pt-2 md:pr-4 absolute right-0 font-semibold text-xl'>
            {!user?.email ?
                <>
                    <NavLink className={({ isActive }) => isActive ? "active-nav" : "inactive-nav"} to="/login">Login</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active-nav" : "inactive-nav"} to="/signup">Sign Up</NavLink>
                </>
                :
                <button onClick={handleLogout} className='bg-indigo-400 text-white px-4 py-1 rounded-lg hover:bg-indigo-500'>Log Out</button>
            }
        </nav>
    );
};

export default Navbar;