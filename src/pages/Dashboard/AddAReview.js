import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddAReview = () => {
    const [user] = useAuthState(auth);
    const [selecto, setSelecto] = useState(2);
    console.log(user)

    const handleReview = (e) => {
        e.preventDefault();
        const description = e.target.description.value;

        const review = {
            user: user.displayName,
            email: user.email,
            img: user.photoURL ? user.photoURL : "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png",
            ratings: selecto,
            description
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    console.log('review added successfully')
                }

            })
    }
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl mx-auto">
                <div class="card-body">
                    <h2 class="card-title text-secondary text-3xl">Add Your Best Review</h2>
                    <p>Select Ratings</p>
                    <div class="rating rating-lg">
                        <input type="radio" name="rating-9" class="rating-hidden" />
                        <input onClick={() => setSelecto(1)} type="radio" name="rating-9" class="mask mask-star-2" />
                        <input onClick={() => setSelecto(2)} type="radio" name="rating-9" class="mask mask-star-2" checked />
                        <input onClick={() => setSelecto(3)} type="radio" name="rating-9" class="mask mask-star-2" />
                        <input onClick={() => setSelecto(4)} type="radio" name="rating-9" class="mask mask-star-2" />
                        <input onClick={() => setSelecto(5)} type="radio" name="rating-9" class="mask mask-star-2" />
                    </div>
                    <p>Description</p>
                    <form onSubmit={handleReview}>
                        <input type="text" name='description' required placeholder="Type here" class="input input-bordered input-lg w-full max-w-xs" />
                        <br />
                        <input type='submit' value='post review' class=" btn btn-primary mt-2 text-white" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAReview;