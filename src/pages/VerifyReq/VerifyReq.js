import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AUTH_CONTEXT } from '../../context/AuthProvider';
import ConfirmModal from '../Shared/Modals/ConfirmModal';

const VerifyReq = () => {
    const [disableData, setDisableData] = useState('')
    const { user } = useContext(AUTH_CONTEXT)
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users/all', {
            headers: {
                'Content-Type': 'application/json',
                authorization: window.localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(data => setData(data.data))
    }, [])
    const handleVerify = (email) => {
        fetch(`http://localhost:5000/users/verify-user/${email}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                authorization: window.localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(data => {
                window.location.reload();
                toast.success("Account Verified")
            })
    }
    return (
        <div>
            <h2 className='text-2xl font-bold text-center pt-10'>All Verify Requests</h2>
            <div className="overflow-x-auto">
                <table className="table w-10/12 mx-auto mt-5">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((item, idx) => <tr key={idx} className={`${user?.email === item?.email && "hidden"} ${item.pendingStatus === null || "hidden"}`}>
                                
                                <td>{item?.email}</td>
                                <td>
                                    {item?.isActive ?
                                        <label htmlFor="Confirm-modal" onClick={() => setDisableData(item?.email)} className='btn btn-xs btn-info'>Verify</label>
                                        :
                                        <label className='text-info text-sm font-semibold'>Verified</label>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
                {
                    setDisableData &&
                    <ConfirmModal title={"Do you want to Verify this user"} disable={handleVerify} data={disableData} />
                }
            </div>
        </div>
    );
};

export default VerifyReq;