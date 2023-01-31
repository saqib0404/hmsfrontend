import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AUTH_CONTEXT } from '../context/AuthProvider';

const Home = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(AUTH_CONTEXT);
    useEffect(() => {
        if (!user?.email) return navigate('/login')
    }, [user, navigate])
    console.log(user);
    return (
        <div>

        </div>
    );
};

export default Home;