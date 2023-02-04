import React, { useContext, useEffect, useState } from 'react';
import { AUTH_CONTEXT } from '../../context/AuthProvider';

const AllUsers = () => {
    const { user } = useContext(AUTH_CONTEXT)
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users', {
            headers: {
                'Content-Type': 'application/json',
                authorization: window.localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(data => setData(data.data))
    }, [])
    console.log(data);

    return (
        <div>
            <h2 className='text-2xl font-bold text-center pt-10'>All HSM Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-10/12 mx-auto mt-5">
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Email</th>
                            <th>Details</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((item, idx) => <tr key={idx} className={`${user?.email === item?.email && "hidden"}`}>
                                <th>{idx + 1}</th>
                                <td>{item?.email}</td>
                                <td><button className='btn btn-xs btn-success'>Details</button></td>
                                <td><button className='btn btn-xs btn-error'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;