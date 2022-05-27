import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeletePart from './DeletePart';

const ManageProduct = () => {
    const { data: parts, isLoading, refetch
    } = useQuery('parts', () =>
        fetch('http://localhost:5000/parts')
            .then(res => res.json()))
    const [deletingPart, setDeletingPart] = useState(null)
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
        <h2 className='text-2xl text-center font-bold my-5'>Manage Products</h2>
        <div className="overflow-x-auto">
            <table className="lg:table md:table w-3/5 mx-auto table-auto">

                <thead>
                    <tr>
                        <th></th>
                        <th className='text-lg'>Part</th>
                        <th className='text-lg'>Image</th>
                        <th className='text-lg'>Price</th>
                        <th className='text-lg'>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        parts.map((part, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <td>{part.name}</td>
                                <td>
                                    <img width={'50px'} src={part.img} alt="" />
                                </td>
                                <td>${part.price}</td>
                                <td>
                                    <label onClick={() => setDeletingPart(part)} htmlFor="delete-confirmation-modal" className="text-accent font-bold hover:text-blue-400">Delete</label>

                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
        {
            deletingPart && <DeletePart
                deletingPart={deletingPart}
                setDeletingPart={setDeletingPart}
                refetch={refetch}
            ></DeletePart>
        }
    </div>
    );
};

export default ManageProduct;