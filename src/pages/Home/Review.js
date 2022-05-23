import React from 'react';

const Review = () => {
    return (
        <div className='text-center'>
            <h2 className='text-primary text-5xl py-8'>Customer Reviews</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4'>
                <div>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://api.lorem.space/image/face?hash=3174" />
                        </div>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus soluta natus, magnam sequi, quas distinctio ullam tenetur cum ad reprehenderit harum nobis. Molestias provident fugit sequi, accusamus veritatis quo aperiam?</p>


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
                            <img src="https://api.lorem.space/image/face?hash=3174" />
                        </div>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus soluta natus, magnam sequi, quas distinctio ullam tenetur cum ad reprehenderit harum nobis. Molestias provident fugit sequi, accusamus veritatis quo aperiam?</p>


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
                            <img src="https://api.lorem.space/image/face?hash=3174" />
                        </div>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus soluta natus, magnam sequi, quas distinctio ullam tenetur cum ad reprehenderit harum nobis. Molestias provident fugit sequi, accusamus veritatis quo aperiam?</p>


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