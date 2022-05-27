import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const handleSubmit = async data => {

        const part = {
            name: data.part,
            img: data.image,
            description: data.description,
            minOrderQuantity: parseInt(data.minOrder),
            availableQuantity: parseInt(data.availableQuantity),
            price: parseFloat(data.price)
        }
        console.log(part);
        fetch('https://shrouded-badlands-19612.herokuapp.com/part', {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(part)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Part added successfully', {
                        position: toast.POSITION.TOP_CENTER
                    })

                }
                else {
                    toast.error('Failed to add the part', {
                        position: toast.POSITION.TOP_CENTER
                    })
                }
            })
    }
    return (
        <div>

            <h1 className='text-primary text-3xl text-center font-bold my-8'>Add A Product</h1>
            <div className="card-body">
                <form onSubmit={handleSubmit} className="form-control w-4/5 mx-auto">
                    <input type="text" placeholder="product Name" className="input input-bordered my-4" required />
                    <input type="text" placeholder="image url" className="input input-bordered my-4" required />

                    <textarea className="textarea textarea-bordered my-4" placeholder="Description" required></textarea>

                    <input type="number" placeholder="Available Quantity" className="input input-bordered my-4" required />
                    <input type="number" placeholder="Minimum Order Quantity" className="input input-bordered my-4" required />
                    <input type="number" placeholder="Price" className="input input-bordered my-4" required />

                    <button className="btn btn-primary my-4">Add</button>
                </form>
            </div>

        </div>
    );
};

export default AddProduct;