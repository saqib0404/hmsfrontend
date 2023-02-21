import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SpecificUser = () => {
    const user = useLoaderData();
    console.log(user.data);
    return (
        <div>

        </div>
    );
};

export default SpecificUser;