import React from 'react';

const Signup = () => {
    return (
        <section className='hotel-bg grid place-items-center'>
            <form className='form-box px-10 py-10 rounded-lg w-10/12 md:w-6/12 lg:w-4/12'>
                <h2 className='text-3xl font-semibold text-white text-center '>Sign Up</h2>

                <div className="form-control w-full mt-5">
                    <span className="label-text text-gray-300 font-semibold mb-1 text-lg">Email</span>
                    <input type="email" className="input input-bordered w-full" />
                </div>

                <div className="form-control w-full mt-5">
                    <span className="label-text text-gray-300 font-semibold mb-1 text-lg">Password</span>
                    <input type="password" className="input input-bordered w-full" />
                </div>

                <button className='bg-[#6080f3] w-full rounded-lg py-2 mt-6 text-gray-100 font-semibold'>Sign Up</button>
            </form>
        </section>
    );
};

export default Signup;