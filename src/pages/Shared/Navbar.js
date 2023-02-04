import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AUTH_CONTEXT } from '../../context/AuthProvider';
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { FaUsers, FaHotel } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { useMainAdmin } from '../../hooks/useMainAdmin';

const Navbar = () => {
    const { user, setUser } = useContext(AUTH_CONTEXT);
    const navigate = useNavigate();
    const [isMainAdmin] = useMainAdmin(user?.email)
    console.log(isMainAdmin);
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
                <>


                    <div className="dropdown dropdown-bottom dropdown-end">
                        <label tabIndex={0}><BsThreeDotsVertical className='cursor-pointer' /></label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 text-sm shadow bg-base-100 rounded-box w-44">
                            {
                                isMainAdmin &&
                                <>
                                    <li><Link to='/all-users' className='bg-indigo-400 text-white px-4 py-1 mb-2 rounded-lg hover:bg-indigo-500'><FaUsers />All Users</Link></li>
                                    <li><Link to='/all-users' className='bg-indigo-400 text-white px-4 py-1 mb-2 rounded-lg hover:bg-indigo-500'><MdVerified />Verify requests</Link></li>
                                    <li><Link to='/all-users' className='bg-indigo-400 text-white px-4 py-1 mb-2 rounded-lg hover:bg-indigo-500'><FaHotel />Hotel requests</Link></li>
                                </>
                            }
                            <li><button onClick={handleLogout} className='bg-indigo-400 text-white px-4 py-1 rounded-lg hover:bg-indigo-500'><FiLogOut />Log Out</button></li>
                        </ul>
                    </div>

                </>
            }
        </nav>
    );
};

export default Navbar;