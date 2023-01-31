import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) return setError("Password must be at least 6 charecters")

        fetch("http://localhost:5000/users/signup", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.message?.includes("success")) {
                    toast.success("User Created Successfully, Please Login.")
                    navigate('/login')
                }
                else {
                    toast.error(data?.message)
                }
            })
    }

    return (
        <section className='hotel-bg grid place-items-center'>
            <form onSubmit={handleSubmit} className='form-box px-10 pt-10 pb-16 rounded-lg w-10/12 md:w-6/12 lg:w-4/12'>
                <h2 className='text-3xl font-semibold text-white text-center '>Sign Up</h2>

                <div className="form-control w-full mt-5">
                    <span className="label-text text-gray-300 font-semibold mb-1 text-lg">Email</span>
                    <input name='email' type="email" className="input input-bordered w-full" required />
                </div>

                <div className="form-control w-full mt-5">
                    <span className="label-text text-gray-300 font-semibold mb-1 text-lg">Password</span>
                    <input name='password' type="password" className={`${error && "border-red-600 border-2"} input input-bordered w-full`} required />
                    <span className='text-red-800 font-bold'>{error}</span>
                </div>

                <button className='bg-[#6080f3] w-full rounded-lg py-2 mt-6 text-gray-100 font-semibold'>Sign Up</button>
            </form>
        </section>
    );
};

export default Signup;