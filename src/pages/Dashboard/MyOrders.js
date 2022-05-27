import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CancelOrder from './CancelOrder';

const MyOrders = () => {
  const navigate = useNavigate()
  const [orders, setOrders] = useState([]);
  const [cancelOrder, setCancelOrder] = useState(null)
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`https://shrouded-badlands-19612.herokuapp.com/order?email=${user.email}`, {
        method: 'get',
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }

      })
        .then(res => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken')
            navigate('/')
          }
          return res.json()
        })
        .then(data => setOrders(data));
    }
  }, [user, navigate])

  return (
    <div>
      <h2 className='text-3xl text-secondary my-8 text-center font-bold'>My orders </h2>
      <div className="overflow-x-auto">

        <table className="table lg:table md:table w-3/5 mx-auto table-auto table-zebra">

          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Product</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              orders?.map((order, index) =>
                <tr key={order._id}>
                  <th>{index + 1}</th>
                  <td>{order.name}</td>
                  <td>{order.part}</td>
                  <td>${order.price}</td>
                  <td>
                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}> <button className="btn btn-xs bg-accent text-black">Pay</button></Link>}
                    {(order.price && order.paid) && <div>
                      <p className="text-blue-500 font-bold">Paid</p>
                      <p className="text-blue-400">Transaction Id: {order.transactionId
                      }</p>
                    </div>}
                    {
                      !order.paid && <label onClick={() => setCancelOrder(order)} htmlFor="delete-confirmation-modal" className="btn btn-xs bg-secondary text-black ml-2 hover:text-blue-400">Cancel</label>
                    }

                  </td>
                </tr>)
            }

          </tbody>
        </table>
      </div>
      {
        cancelOrder && <CancelOrder
          cancelOrder={cancelOrder}
          setCancelOrder={setCancelOrder}
        ></CancelOrder>
      }
    </div>
  );
};

export default MyOrders;