import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import useLoadSingleTool from "./../../../Hooks/useLoadSingleTool";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { toast } from "react-toastify";

const PurchaseProduct = () => {
  const [user] = useAuthState(auth);
  // console.log(user);
  const { partsId } = useParams();
  const [part, setPart] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/parts/${partsId}`)
      .then(res => res.json())
      .then(data => console.log(data))
  }, [part])

  //const [tool] = useLoadSingleTool(id);
  const user_name = user?.displayName;
  const user_email = user?.email;
  // const [counter, setCounter] = useState(tool.min_quantity);

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
    <div className="container">
      <div className="py-20">
        <h1 className="text-center text-4xl font-bold  text-orange-500 mb-8 flex flex-col items-center">
          PURCHASE YOUR DESIRE PRODUCT WITH CHEAPEST RATE!
          <div className="border-b-8 border-orange-500 w-4/5"></div>
        </h1>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={part.img} alt="Album" />
          </figure>
          <div className="card-body  bg-gray-100">
            <h2 className="font-bold text-center text-2xl">{part.name}</h2>
            <div>
              <h2 className="my-2">
                <strong>DESCRIPTION: </strong>
                {part.description}
              </h2>
              <h2 className="my-2">
                <strong>MINIMUM ORDER QUANTITY: </strong>
                {part.min_quantity}
              </h2>
              <h2 className="my-2">
                <strong>AVAILABLE ORDER QUANTITY: </strong>
                {part.available_quantity}
              </h2>
              <h2 className="my-4">
                <strong>PRICE: </strong>
                <div className="indicator">
                  {part.price}
                  <sup>PER UNIT</sup>
                </div>
              </h2>
            </div>
            <div>
              {/* <h2 className="flex items-center">
                <strong className="mr-4">Order Quantity: </strong>
                <div className="flex mt-[-10px]">
                  <button className="text-6xl" disabled>
                    -
                  </button>
                  <div className="text-4xl flex items-center">{counter}</div>
                  <button className="text-6xl">+</button>
                </div>
              </h2> */}
            </div>
          </div>
        </div>
      </div>
      <div className="pb-20 flex justify-center">
        <div className="card bg-orange-500 shadow-xl w-1/2">
          <div className="card-body">
            <h2 className="text-center font-bold text-4xl">Order Details</h2>
            <div className="flex justify-center">
              <form onSubmit={handleSubmit}>
                <div class="form-control place-order-form">
                  <label class="label">
                    <span class="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    class="input input-bordered w-full max-w-xs"
                    value={user?.displayName}
                    // name={user?.displayName}
                    readOnly
                    disabled
                  />
                </div>
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Your Email</span>
                  </label>
                  <input
                    type="email"
                    class="input input-bordered w-full max-w-xs"
                    value={user?.email}
                    // name={user?.email}
                    readOnly
                    disabled
                  />
                </div>
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Contact Number</span>
                  </label>
                  <input
                    type="number"
                    class="input input-bordered w-full max-w-xs"
                    placeholder="Your Phone Number"
                    name="number"
                    required
                  />
                </div>
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Billing Address</span>
                  </label>
                  <textarea
                    type="textarea"
                    class="input input-bordered w-full max-w-xs"
                    placeholder="Your Detail Address"
                    name="address"
                    required
                  />
                </div>

                <div class="form-control w-full max-w-xs mt-4">
                  <button class="btn btn-outline">Place Order</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseProduct;