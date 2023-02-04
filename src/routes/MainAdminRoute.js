import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AUTH_CONTEXT } from '../context/AuthProvider';
import { useMainAdmin } from '../hooks/useMainAdmin';

const MainAdminRoute = ({ children }) => {
    const { user, loading } = useContext(AUTH_CONTEXT);
    const [isMainAdmin, isAdminLoading] = useMainAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className='flex flex-col justify-center items-center h-56'>
            <progress className="progress w-56"></progress>
            <h2 className='text-2xl'>Loading...</h2>
        </div>

    }
    if (user?.email && isMainAdmin) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace={true}></Navigate>

};

export default MainAdminRoute;