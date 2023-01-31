import React, { createContext, useEffect, useState } from 'react';

export const AUTH_CONTEXT = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

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
                console.log(data.data);
                setUser(data.data)
            })
            .catch(e => console.log(e))
    }, [])


    const value = {
        user,
        setUser
    }
    return (
        <AUTH_CONTEXT.Provider value={value}>
            {children}
        </AUTH_CONTEXT.Provider>
    );
};

export default AuthProvider;