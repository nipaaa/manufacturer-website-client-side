import React from 'react';
import { toast } from 'react-toastify';

const DeletePart = ({ deletingPart, setDeletingPart, refetch }) => {
    const { _id, name } = deletingPart;

    const handleDelete = () => {
        fetch(`http://localhost:5000/part/${_id}`, {
            method: 'delete',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast(`${name} is deleted`, {
                        position: toast.POSITION.TOP_CENTER
                    })
                    refetch()
                    setDeletingPart(null)
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirmation-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure? You want to delete {name}?</h3>
                    <div className="modal-action">
                        <button onClick={handleDelete} className="btn btn-error btn-xs">Delete</button>
                        <label htmlFor="delete-confirmation-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeletePart;