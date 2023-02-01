import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AUTH_CONTEXT } from '../context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AUTH_CONTEXT);
    const location = useLocation();
    
    if (loading) {
        return <div className='h-screen flex justify-center items-center flex-col'>
            <progress className="progress w-56"></progress> <br />
            <h2 className='text-3xl'>Loading..</h2>
        </div>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;