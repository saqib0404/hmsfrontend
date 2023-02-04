import React from 'react';

const ConfirmModal = ({ title, disable, data }) => {
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="Confirm-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Confirm-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <div className='flex justify-center mt-8'>
                        <label onClick={() => disable(data)} htmlFor="Confirm-modal" className="btn btn-sm btn-error mr-3">Yes</label>
                        <label htmlFor="Confirm-modal" className="btn btn-sm">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;