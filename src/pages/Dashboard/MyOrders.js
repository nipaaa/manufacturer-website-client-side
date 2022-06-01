import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CancelOrder from './CancelOrder';


const MyOrders = () => {

  const [orders, setOrders] = useState([]);
   const [order, setOrder] = useState({})
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(` https://shrouded-badlands-19612.herokuapp.com/order?user=${user?.email}`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }

      })
        .then(res => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken')
            navigate('/');
          }
          return res.json()
        })
        .then(data => setOrders(data));
    }
  }, [user, navigate])

  const handlePay = () => {
    navigate('/payment');
  }

  return (
    <div>
      <h2 className='text-2xl font-bold text-center my-8 text-secondary'>Your Total Order is {orders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table  lg:w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>quantity</th>
              <th>price</th>
              <th>cancel</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((ap, index) =>
                <tr key={ap._id}>
                  <th>{index + 1}</th>
                  <td>{ap.userName}</td>
                  <td>{ap.orderQuantity}</td>
                  <td>{ap.price}</td>
                  <td className='card-actions'>{!ap?.paid && <button className='btn btn-xs bg-red-500 text-white cancel-modal'>
                    <label htmlFor="cancel-modal"
                      onClick={() => setOrders(ap)}
                    >cancel</label>
                  </button>}</td>
                  <td>
                    {(ap.price && !ap.paid) && <button onClick={handlePay} className='btn btn-xs btn-success'>pay</button>}
                  </td>
                </tr>)
            }

          </tbody>
        </table>
      </div>
      {orders && <CancelOrder order={order} setOrder={setOrder}></CancelOrder>}
    </div>
  );
};

export default MyOrders;