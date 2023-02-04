import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AUTH_CONTEXT } from '../../context/AuthProvider';
import ConfirmModal from '../Shared/Modals/ConfirmModal';

const AllUsers = () => {
    const [disableData, setDisableData] = useState('')
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
    const handleDisable = (email) => {
        fetch(`http://localhost:5000/users/disable/${email}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                authorization: window.localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(data => {
                window.location.reload();
                toast.success("Account disabled")
            })
    }

    const handleActivate = (email) => {
        fetch(`http://localhost:5000/users/able/${email}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                authorization: window.localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(data => {
                window.location.reload();
                toast.success("Account Activated")
            })
    }

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
                            <th>Disable</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((item, idx) => <tr key={idx} className={`${user?.email === item?.email && "hidden"}`}>
                                <th>{idx + 1}</th>
                                <td>{item?.email}</td>
                                <td><button className='btn btn-xs btn-success'>Details</button></td>
                                <td>
                                    {item?.isActive ?
                                        <label htmlFor="Confirm-modal" onClick={() => setDisableData(item?.email)} className='btn btn-xs btn-error'>Disable</label>
                                        :
                                        <label onClick={() => handleActivate(item?.email)} className='btn btn-xs btn-warning'>Activate</label>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
                {
                    setDisableData &&
                    <ConfirmModal title={"Do you want to disable this user"} handleDisable={handleDisable} disableData={disableData} />
                }
            </div>
        </div >
    );
};

export default AllUsers;