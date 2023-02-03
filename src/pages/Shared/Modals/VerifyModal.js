import React, { useContext } from 'react';
import { AUTH_CONTEXT } from '../../../context/AuthProvider';

const VerifyModal = () => {
    const { user } = useContext(AUTH_CONTEXT);
    return (
        <div>

            <input type="checkbox" id="verify-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="verify-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Verifiaction </h3>
                    <p className="py-4">Verify your account by submiting your NID or driving lisence Id , Front page and back page photos.</p>

                    <form
                        action={`http://localhost:5000/users/apply-for-verify/${user?.userId}`}
                        method='post'
                        encType='multipart/form-data'
                        className='w-10/12 mx-auto'>
                        <div className='mb-3'>
                            <span className='mr-12'>Id Number</span>
                            <input name='idNumber' type="text" className='border-2 w-8/12 px-2 py-1' required /> <br />
                        </div>

                        <div className='mb-3'>
                            <span className='mr-12'>Front Page</span>
                            <input name='id_card_front_page' className='w-8/12' type="file" required /><br />
                        </div>

                        <div className='mb-3'>
                            <span className='mr-14'>Back Page</span>
                            <input name='id_card_back_page' className='w-8/12' type="file" required />
                        </div>

                        <div className='grid place-items-center mt-6 mb-2'>
                            <button htmlFor="verify-modal" className='bg-indigo-500 text-white font-semibold px-6 py-2 text-sm rounded-sm cursor-pointer'>Verify</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default VerifyModal;