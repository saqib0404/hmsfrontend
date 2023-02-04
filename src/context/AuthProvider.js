import React, { createContext, useEffect, useState } from 'react';

export const AUTH_CONTEXT = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("http://localhost:5000/users/user-info", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token: window.localStorage.getItem("token") })
        })
            .then(res => res.json())
            .then(data => {
                
                setUser(data.data)
                setLoading(false)
            })
            .catch(e => {
                console.log(e)
                setLoading(false)
            })
    }, [])


    const value = {
        user,
        setUser,
        loading
    }
    return (
        <AUTH_CONTEXT.Provider value={value}>
            {children}
        </AUTH_CONTEXT.Provider>
    );
};

export default AuthProvider;