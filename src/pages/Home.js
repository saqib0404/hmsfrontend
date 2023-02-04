import React, { useContext, useState } from 'react';
import { AUTH_CONTEXT } from '../context/AuthProvider';
import { FaUserAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { toast } from 'react-hot-toast';
import VerifyModal from './Shared/Modals/VerifyModal';

const Home = () => {
    const { user } = useContext(AUTH_CONTEXT);
    const [editable, setEditable] = useState(false);
    // console.log(user);

    const handleUpdate = e => {
        e.preventDefault();
        if(!user?.isActive) return toast.error("Account is disabled")
        const form = e.target;
        const name = form.name.value;
        const birthday = form.birthday.value;
        const p_division = form.p_division.value;
        const p_district = form.p_district.value;
        const p_thana = form.p_thana.value;
        const p_area = form.p_area.value;
        const c_division = form.c_division.value;
        const c_district = form.c_district.value;
        const c_thana = form.c_thana.value;
        const c_area = form.c_area.value;
        // const email = form.email.value;
        const phone = form.phone.value;
        const data = {
            name,
            birthday,
            p_division,
            p_district,
            p_thana,
            p_area,
            c_division,
            c_district,
            c_thana,
            c_area,
            // email,
            phone,

        }
        fetch(`http://localhost:5000/users/update-user/${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: window.localStorage.getItem("token")
            },
            body: JSON.stringify({ data })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data?.message?.includes("success")) {
                    toast.success("Updated successfully")
                }
                setEditable(false)
            })
    }


    return (
        <section className='mx-2 md:mx-16'>
            <form onSubmit={handleUpdate} className='grid grid-cols-12 pt-16'>
                <div className='col-span-2 border-r-2'>
                    <FaUserAlt className='mb-5 mx-auto' size={60} />
                    <div className='mb-5 mx-auto w-5/12'>
                        {
                            user?.pendingStatus === null &&
                            <label htmlFor="verify-modal" className="bg-indigo-500 text-white font-semibold px-4 py-1 text-sm rounded-sm cursor-pointer">Verify</label>
                        }
                        {
                            user?.pendingStatus === true &&
                            <button disabled className="bg-indigo-300 text-white font-semibold px-4 py-1 text-sm rounded-sm">pending</button>
                        }
                    </div>
                </div>

                <div className='col-span-4 ml-4'>

                    <div className='relative mb-2'>
                        <span className='font-semibold text-lg'>Name:</span>
                        <input name='name' disabled={editable ? false : true} defaultValue={user?.name} type="text" className='border-2 absolute right-5 rounded-md px-2 w-7/12' placeholder='Name' /><br />
                    </div>

                    <div className='relative mb-4'>
                        <span className='font-semibold text-lg'>Birthday:</span>
                        <input name='birthday' disabled={editable ? false : true} defaultValue={user?.birthday} type="text" className='border-2 w-7/12 absolute right-5 rounded-md px-2' placeholder='Birthday' /><br />
                    </div>

                    <span className='font-semibold text-lg'>Present Address</span><br />
                    <div className='border-black border px-4 py-2 mb-4 rounded-md'>
                        <div className='relative mb-2'>
                            <span className='font-semibold text-lg'>Division:</span>
                            <input name='c_division' disabled={editable ? false : true} defaultValue={user?.c_division} type="text" className='border-2 w-7/12 absolute right-5 rounded-md px-2' placeholder='Division' /><br />
                        </div>

                        <div className='relative mb-2'>
                            <span className='font-semibold text-lg'>District:</span>
                            <input name='c_district' disabled={editable ? false : true} defaultValue={user?.c_district} type="text" className='border-2 w-7/12 absolute right-5 rounded-md px-2' placeholder='District' /><br />
                        </div>

                        <div className='relative mb-2'>
                            <span className='font-semibold text-lg'>Thana:</span>
                            <input name='c_thana' disabled={editable ? false : true} defaultValue={user?.c_thana} type="text" className='border-2 w-7/12 absolute right-5 rounded-md px-2' placeholder='Thana' /><br />
                        </div>

                        <div className='relative'>
                            <span className='font-semibold text-lg'>Area:</span>
                            <input name='c_area' disabled={editable ? false : true} defaultValue={user?.c_area} type="text" className='border-2 w-7/12 absolute right-5 rounded-md px-2' placeholder='Area' /><br />
                        </div>
                    </div>

                    <span className='font-semibold text-lg'>Permanent Address</span><br />
                    <div className='border-black border px-4 py-2 rounded-md'>
                        <div className='relative mb-2'>
                            <span className='font-semibold text-lg'>Division:</span>
                            <input name='p_division' disabled={editable ? false : true} defaultValue={user?.p_division} type="text" className='border-2 w-7/12 absolute right-5 rounded-md px-2' placeholder='Division' /><br />
                        </div>

                        <div className='relative mb-2'>
                            <span className='font-semibold text-lg'>District:</span>
                            <input name='p_district' disabled={editable ? false : true} defaultValue={user?.p_district} type="text" className='border-2 w-7/12 absolute right-5 rounded-md px-2' placeholder='District' /><br />
                        </div>

                        <div className='relative mb-2'>
                            <span className='font-semibold text-lg'>Thana:</span>
                            <input name='p_thana' disabled={editable ? false : true} defaultValue={user?.p_thana} type="text" className='border-2 w-7/12 absolute right-5 rounded-md px-2' placeholder='Thana' /><br />
                        </div>

                        <div className='relative'>
                            <span className='font-semibold text-lg'>Area:</span>
                            <input name='p_area' disabled={editable ? false : true} defaultValue={user?.p_area} type="text" className='border-2 w-7/12 absolute right-5 rounded-md px-2' placeholder='Area' /><br />
                        </div>
                    </div>

                </div>

                <div className='col-span-4 ml-8 relative'>
                    {/* <div className='relative mb-2'>
                        <span className='font-semibold text-lg'>Email:</span>
                        <input name='email' disabled={editable ? false : true} defaultValue={user?.email} type="text" className='border-2 w-8/12 absolute right-5 rounded-md px-2' placeholder='Email' /><br />
                    </div> */}

                    <div className='relative'>
                        <span className='font-semibold text-lg'>Phone:</span>
                        <input name='phone' disabled={editable ? false : true} defaultValue={user?.phone} type="text" className='border-2 w-8/12 absolute right-5 rounded-md px-2' placeholder='Phone' /><br />
                    </div>

                    {editable ?
                        <div className='mt-3 absolute right-5'>
                            <button type='submit' className='bg-indigo-500 text-white font-semibold px-4 py-1 text-sm rounded-sm mr-3'>Update</button>
                            <button onClick={() => setEditable(false)} className='bg-gray-500 text-white font-semibold px-4 py-1 text-sm rounded-sm'>cancel</button>
                        </div>
                        :
                        <button onClick={() => setEditable(true)} className='flex items-center absolute right-5 mt-4 text-lg text-indigo-500'><CiEdit />Edit</button>

                    }

                </div>
            </form>
            <div className='flex justify-center mt-4'>
                <button className='bg-indigo-500 text-white font-semibold px-6 py-2 rounded-md '>Add Hotel</button>
            </div>

            {/* Modal */}
            <VerifyModal />
        </section >
    );
};

export default Home;