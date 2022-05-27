import React from 'react';

const AddAReview = () => {
    return (
        <div>
            <h1 className='text-primary text-3xl text-center font-bold my-8'>Add Your Review Here</h1>
            <div className="card-body">
                <div className="form-control w-4/5 mx-auto">
                    <input type="text" placeholder="Name" className="input input-bordered my-4" required />

                    <textarea className="textarea textarea-bordered my-4" placeholder="Description" required></textarea>

                    <input type="number" placeholder="Rating" className="input input-bordered my-4" min="1" max="5" required />

                    <button className="btn btn-primary my-4">Add</button>
                </div>
            </div>


        </div>
    );
};

export default AddAReview;