import React from 'react';

const AddProduct = () => {
    return (
        <div>
            
            <h1 className='text-primary text-3xl text-center font-bold my-8'>Add A Product</h1>
            <div class="card-body">
                <div class="form-control w-4/5 mx-auto">
                    <input type="text" placeholder="product Name" class="input input-bordered my-4" required />
                    <input type="text" placeholder="image url" class="input input-bordered my-4" required />
               
                    <textarea class="textarea textarea-bordered my-4" placeholder="Description" required></textarea>
               
                    <input type="number" placeholder="Available Quantity" class="input input-bordered my-4" required/>
                    <input type="number" placeholder="Minimum Order Quantity" class="input input-bordered my-4" required/>
                    <input type="number" placeholder="Price" class="input input-bordered my-4" required/>
                
                    <button class="btn btn-primary my-4">Add</button>
                </div>
            </div>
            
        </div>
    );
};

export default AddProduct;