import React from 'react';
import { toast } from 'react-toastify';

const Users = ({ user, refetch }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://shrouded-badlands-19612.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    return (
        <tr>
            <th>*</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs btn-success">Make Admin</button>}</td>
            <td><button className="text-red-600"> <i className="fs-5 text-red-600 fa-solid fa-trash-can"></i></button></td>
        </tr>
    );
};

export default Users;