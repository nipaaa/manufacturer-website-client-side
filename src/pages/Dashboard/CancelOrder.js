import React from 'react';
import { toast } from 'react-toastify';

const CancelOrder = ({ cancelOrder, setCancelOrder, refetch }) => {
    const { part, _id } = cancelOrder

    const handleCancelOrder = () => {
        fetch(`http://localhost:5000/order/${_id}`, {
            method: 'delete',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast(`${part} is deleted`, {
                        position: toast.POSITION.TOP_CENTER
                    })
                    setCancelOrder(null)
                    refetch()

                }
            })
    }
    return (
        <div>
        <input type="checkbox" id="delete-confirmation-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-red-500">Are you sure? You want to cancel order for {part}?</h3>
                <div className="modal-action">
                    <button onClick={handleCancelOrder} className="btn btn-error btn-xs">Yes, Cancel</button>
                    <label htmlFor="delete-confirmation-modal" className="btn btn-xs">Nope</label>
                </div>
            </div>
        </div>
    </div>
    );
};

export default CancelOrder;