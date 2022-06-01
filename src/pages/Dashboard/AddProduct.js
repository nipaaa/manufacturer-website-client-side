import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const handleSubmit = e => {
        e.preventDefault()
        const partName = e.target.name.value;
        const description = e.target.description.value;
        const img = e.target.image.value;
        const quantity = parseInt(e.target.quantity.value);
        const price = parseInt(e.target.price.value);

        const part = {
            name: partName,
            description: description,
            img,
            quantity,
            price
        }
        console.log(part);
        fetch(' https://shrouded-badlands-19612.herokuapp.com/part', {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
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
                    <input type="text" placeholder="product Name" name='name' className="input input-bordered my-4" required />
                    <input type="text" placeholder="image url" name='image' className="input input-bordered my-4" required />

                    <textarea className="textarea textarea-bordered my-4" name='description' placeholder="Description" required></textarea>

                    <input type="number" placeholder="Quantity" name='quantity' className="input input-bordered my-4" required />
                    <input type="number" placeholder="Price" className="input input-bordered my-4" required />

                    <button className="btn btn-primary my-4">Add</button>
                </form>
            </div>

        </div>
    );
};

export default AddProduct;