import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import CancelOrder from './CancelOrder';
import OrderRow from './OrderRow';



const ManageOrder = () => {
    const [cancelOrder, setCancelOrder] = useState(null)

    const { data: products, isLoading, refetch } = useQuery('parts', () =>
        fetch(` https://shrouded-badlands-19612.herokuapp.com/allorders`, {

            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-center text-2xl font-bold text-secondary my-12'>Total {products.length} Orders Found</h2>
            <div className="overflow-x-auto">
                <table className="lg:table md:table w-3/4 mx-auto table-auto">

                    <thead>
                        <tr>
                            <th></th>
                            <th>User</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((order) => <OrderRow
                            key={order._id}

                            order={order}
                            setCancelOrder={setCancelOrder}
                            refetch={refetch}
                        ></OrderRow>)}

                    </tbody>
                </table>
            </div>
            {
                cancelOrder && <CancelOrder
                    cancelOrder={cancelOrder}
                    setCancelOrder={setCancelOrder}
                    refetch={refetch}
                ></CancelOrder>
            }
        </div>
    );
};

export default ManageOrder;