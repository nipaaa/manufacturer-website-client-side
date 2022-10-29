import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { toast } from "react-toastify";

const PurchaseProduct = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [parts, setParts] = useState({});
  const {
    _id,
    name,
    img,
    description,
    price,
    minOrderQuantity,
    availableQuantity,
  } = parts;
  const [newQuantity, setNewQuantity] = useState(10);

  useEffect(() => {
    fetch(`https://manufacturer-web.onrender.com/part/${id}`)
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, [id, parts]);

  const userName = user?.displayName;
  const userEmail = user?.email;

  const handleOrder = (event) => {
    event.preventDefault();

    //const quantity = event.target.quantity.value;
    const address = event.target.address.value;

    const order = {
      orderId: _id,
      productName: name,

      price: price * newQuantity,
      orderQuantity: newQuantity,
      address,
      user: user.email,
      userName: user.displayName,
    };

    fetch("https://manufacturer-web.onrender.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert(`Your Order is Placed`);
        }
      });

    event.target.reset();
    toast("Order Placed Successfully!");
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
                <div className="indicator">{price}</div>
              </h2>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="bg-secondary bg-gradient-to-r from-secondary to-accent w-3/4 mx-auto rounded-xl py-20 mb-20">
        <h1 className="text-white text-3xl text-center font-bold my-8">
          Place Your Order Here...
        </h1>
        <form onSubmit={handleOrder}>
          <div className="card-body">
            <div className="form-control lg:w-4/5 mx-auto">
              <input
                type="text"
                name="userName"
                value={userName}
                className="input input-bordered my-2"
                readOnly
                disabled
              />
              <input
                type="email"
                name="userEmail"
                value={userEmail}
                className="input input-bordered my-2"
                readOnly
                disabled
              />

              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered my-2"
                required
              />

              <textarea
                name="address"
                className="textarea textarea-bordered my-4"
                placeholder="Address"
                required
              ></textarea>

              <input
                onChange={(e) => setNewQuantity(e.target.value)}
                type="number"
                name="quantity"
                min="100"
                max={availableQuantity}
                placeholder="Order quantity, minimum 100"
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />

              <button
                disabled={!newQuantity || newQuantity > availableQuantity}
                type="submit"
                name="order"
                className="border-0 bg-primary w-full max-w-xs rounded text-white fw-bold p-2"
              >
                Buy Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PurchaseProduct;
