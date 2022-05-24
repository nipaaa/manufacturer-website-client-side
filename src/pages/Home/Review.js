import React from 'react';

const Review = () => {
    return (
        <div className='text-center my-24'>
            <h2 className='text-primary text-5xl pb-12'>Customer Reviews</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4'>
                <div>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/dM8XXLT/item-6.jpg" alt=''/>
                        </div>
                    </div>

                    <p>Good sales man and what most impressed me was a long road test on both urban and motorway, pointed out deep scratch on door and he said he would get it done and he did. Good price and even the add on warranty seems pretty good.</p>


                    <div class="rating">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    </div>

                </div>




                <div>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/84Xf93P/item-1.jpg" alt='' />
                        </div>
                    </div>

                    <p>Really pleased with my purchase, saved over £1000 against a similar vehicle I had looked at in the morning. No pushy sales pitch and drove away with the car that day.</p>


                    <div class="rating">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    </div>

                </div>



                
                <div>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/Fw4MZVC/item-7.jpg" alt='' />
                        </div>
                    </div>

                    <p>Felt a very warm welcome when looking for my new car in the forecourt, wasn't pressured into feeling 'I needed' to buy the car but was very helpful with finding out the information I required on it. </p>


                    <div class="rating">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    </div>






                </div>




            </div>

        </div>
    );
};

export default Review;