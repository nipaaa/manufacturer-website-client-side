import React from 'react';


const DisplayReview = ({ review }) => {
    const { ratings, user, description, img } = review;
    console.log(ratings)
    return (
        <div class="card shadow-xl">
            <div class="card-body">
            <div class="avatar">
                    <div class="w-16 rounded-full">
                        <img src={img} alt="" />
                    </div>
                </div>
                <h6 className='font-bold text-xl'>{user}</h6>
                <p className='text-xs'>{description.slice(0, 60)}</p>
               
           
                <h2 class="card-title">
                    <ul className='flex'>

                        <li className={ratings < 1 ? 'hidden' : 'text-orange-500'} ><i class="fa-solid fa-star"></i></li>
                        <li className={ratings < 2 ? 'hidden' : 'text-orange-500'} ><i class="fa-solid fa-star"></i></li>
                        <li className={ratings < 3 ? 'hidden' : 'text-orange-500'} ><i class="fa-solid fa-star"></i></li>
                        <li className={ratings < 4 ? 'hidden' : 'text-orange-500'} ><i class="fa-solid fa-star"></i></li>
                        <li className={ratings < 5 ? 'hidden' : 'text-orange-500'} ><i class="fa-solid fa-star"></i></li>

                    </ul>
                </h2>

            </div>
        </div>
    );
};

export default DisplayReview;