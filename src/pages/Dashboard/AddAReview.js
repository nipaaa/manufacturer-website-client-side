import React from 'react';

const AddAReview = () => {
    return (
        <div>
            <h1 className='text-primary text-3xl text-center font-bold my-8'>Add Your Review Here</h1>
            <div class="card-body">
                <div class="form-control w-4/5 mx-auto">
                    <input type="text" placeholder="Name" class="input input-bordered my-4" required />
               
                    <textarea class="textarea textarea-bordered my-4" placeholder="Description" required></textarea>
               
                    <input type="number" placeholder="Rating" class="input input-bordered my-4" min="1" max="5" required/>
                
                    <button class="btn btn-primary my-4">Add</button>
                </div>
            </div>



        </div>
    );
};

export default AddAReview;