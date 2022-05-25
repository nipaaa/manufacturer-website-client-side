import React from 'react';

const MyOrders = () => {
    return (
        <div class="overflow-x-auto">
            <h1 className='text-primary text-3xl text-center font-bold my-8'>My Orders</h1>
        <table class="table w-full">
        
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Job</th>
              <th>payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>
                  {/* condition{paid}? <span className='text-green-600' >paid</span> : <button className='btn btn-primaryy'> make payment</button> */}
                  <button className='btn btn-xs btn-success'> make payment</button>
              </td>
              <td>
                  {/*  <i class=" text-green-600 fa-solid fa-circle-check"></i> : <i className="fs-5 text-red-600 fa-solid fa-trash-can"></i> */}
                  <i className="fs-5 text-red-600 fa-solid fa-trash-can"></i>
                 
              </td>
            </tr>
          
          </tbody>
        </table>
      </div>
    );
};

export default MyOrders;