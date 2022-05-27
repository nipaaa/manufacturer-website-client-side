import React from 'react';

const OrderRow = ({ order, index, refetch, setCancelOrder }) => {
    const { name, part, price, paid, _id, shipped } = order

    const handleUpdateStatus = () => {
        const updatedOrder = { ...order, shipped: true }
        fetch(`https://shrouded-badlands-19612.herokuapp.com/order/${_id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updatedOrder)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch()
                    console.log(data);
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{part}</td>
            <td>${price}</td>
            <td>
                {(paid && !shipped) && <>
                    <span className='text-secondary'>Pending</span>
                    <button onClick={handleUpdateStatus} className="btn btn-xs btn-secondary ml-1">Shipped</button>
                </>}
                {(paid && shipped) && <>
                    <span className='text-primary'>Shipped</span>
                </>}

                {
                    !paid && <>
                        <span className='text-secondary'>Unpaid</span>
                        <label onClick={() => setCancelOrder(order)} htmlFor="delete-confirmation-modal" className="btn btn-xs btn-secondary ml-1">Remove</label>
                    </>
                }
            </td>
        </tr>
    );
};

export default OrderRow;