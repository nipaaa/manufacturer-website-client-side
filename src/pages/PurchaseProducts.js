import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { toast } from "react-toastify";

const PurchaseProduct = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [part, setPart] = useState({});
  const { _id, name, img, description, price, minOrderQuantity, availableQuantity } = part;

  useEffect(() => {
    fetch(`https://shrouded-badlands-19612.herokuapp.com/parts/${id}`)
      .then(res => res.json())
      .then(data => setPart(data))
  }, [id, part])


  const user_name = user?.displayName;
  const user_email = user?.email;


  const handleSubmit = (event) => {
    event.preventDefault();
    const name = user_name;
    const email = user_email;
    const phone = event.target.number.value;
    const address = event.target.address.value;

    event.target.reset();
    toast("Order Placed Successfully!");

    console.log(name, email, phone, address);
  };

  return (
    <div className="w-3/4 mx-auto">
      <div className="py-20">
        <h1 className="text-center text-4xl font-bold  text-primary my-8 flex flex-col items-center">
          Parts Details
        </h1>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={img} alt="" />
          </figure>
          <div className="card-body  bg-gray-100">
            <h2 className="font-bold text-center text-2xl">{name}</h2>
            <div>
              <h2 className="my-2">
                <strong>Description: </strong>
                {description}
              </h2>
              <h2 className="my-2">
                <strong>Minimum Order Quantity: </strong>
                {minOrderQuantity}
              </h2>
              <h2 className="my-2">
                <strong>Available Order Quantity: </strong>
                {availableQuantity}
              </h2>
              <h2 className="my-4">
                <strong>Price (per unit): </strong>
                <div className="indicator">
                  {price}
                </div>
              </h2>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-secondary bg-gradient-to-r from-secondary to-accent w-3/4 mx-auto rounded-xl py-20 mb-20">
        <h1 className='text-white text-3xl text-center font-bold my-8'>Place Your Order Here...</h1>
        <form onSubmit={handleSubmit}>
          <div className="card-body">
            <div className="form-control w-4/5 mx-auto">
              <input type="text" value={user?.displayName} className="input input-bordered my-4" readOnly
                disabled />
              <input type="email" value={user?.email} className="input input-bordered my-4" readOnly
                disabled />

              <input type="number" placeholder="Quantity" value="quantity" className="input input-bordered my-4" required />
              <input type="number" placeholder="Phone Number" value="phone" className="input input-bordered my-4" required />
              <textarea className="textarea textarea-bordered my-4" value="address" placeholder="Address" required></textarea>

              <button className="btn btn-primary text-white my-4">Place Order</button>
            </div>
          </div>
        </form>

      </div>

    </div>
  );
};

export default PurchaseProduct;