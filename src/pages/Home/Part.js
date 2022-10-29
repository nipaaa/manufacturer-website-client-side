import React from "react";
import { useNavigate } from "react-router-dom";

const Part = ({ part }) => {
  const {
    _id,
    name,
    img,
    description,
    price,
    minOrderQuantity,
    availableQuantity,
  } = part;

  const navigate = useNavigate();

  const navigateToPartsDetails = (id) => {
    navigate(`/parts/${id}`);
  };

  return (
    <div
      data-aos-delay="200"
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="card w-auto bg-base-100 shadow-xl "
    >
      <figure>
        <img
          className="h-60 w-60 object-contain hover:scale-125"
          src={img}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-secondary">{name}</h2>
        <p>{description}</p>
        <p>
          <span className="text-accent">Price (per unit): </span>$ {price}
        </p>
        <p>
          <span className="text-accent">Minimum Order Quantity: </span>
          {minOrderQuantity}
        </p>
        <p>
          <span className="text-accent">Available Quantity: </span>
          {availableQuantity}
        </p>

        <div className="card-actions justify-end">
          <button
            onClick={() => navigateToPartsDetails(_id)}
            className="btn btn-primary bg-gradient-to-r from-primary to-secondary"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Part;
