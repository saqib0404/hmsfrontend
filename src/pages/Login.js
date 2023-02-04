import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AUTH_CONTEXT } from '../context/AuthProvider';

const Login = () => {
    const { user, setUser } = useContext(AUTH_CONTEXT);
    console.log(user);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        fetch("http://localhost:5000/users/login", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.token) {
                    window.localStorage.setItem("token", data.token);
                    window.location.reload();
                    toast.success("Logged in successfully")
                    window.location.href="/"
                }
                else {
                    toast.error(data?.message)
                    setUser(null)
                }
            })
    }

    return (
        <section className='hotel-bg grid place-items-center'>
            <form onSubmit={handleSubmit} className='form-box px-10 pt-10 pb-16 rounded-lg w-10/12 md:w-6/12 lg:w-4/12'>
                <h2 className='text-3xl font-semibold text-white text-center '>Login</h2>

                <div className="form-control w-full mt-5">
                    <span className="label-text text-gray-300 font-semibold mb-1 text-lg">Email</span>
                    <input name="email" type="email" className="input input-bordered w-full" required />
                </div>

                <div className="form-control w-full mt-5">
                    <span className="label-text text-gray-300 font-semibold mb-1 text-lg">Password</span>
                    <input name="password" type="password" className="input input-bordered w-full" required />
                </div>

                <button className='bg-[#6080f3] w-full rounded-lg py-2 mt-6 text-gray-100 font-semibold'>Login</button>
            </form>
        </section>
    );
};

export default Login;