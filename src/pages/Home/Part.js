import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({part}) => {
    const { name, img, description, price, minOrderQuantity, availableQuantity} = part;

    const navigate = useNavigate()
    const navigateToPartsDetails = id => {
        navigate(`/parts/${id}`);
    }

    return (
        <div class="card w-auto bg-base-100 shadow-xl">
        <figure><img height={500} src={img} alt="" /></figure>
        <div class="card-body">
          <h2 class="card-title text-secondary">{name}</h2>
          <p>{description}</p>
          <p><span className='text-accent'>Price (per unit): </span>$ {price}</p>
          <p><span className='text-accent'>Minimum Order Quantity: </span>{minOrderQuantity}</p>
          <p><span className='text-accent'>Available Quantity: </span>{availableQuantity}</p>
         
        
          <div class="card-actions justify-end">
            <button onClick={()=> navigateToPartsDetails()} class="btn btn-primary bg-gradient-to-r from-primary to-secondary">Purchase</button>
          </div>
        </div>
      </div>
    );
};

export default Part;