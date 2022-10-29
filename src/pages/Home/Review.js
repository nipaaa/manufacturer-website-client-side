import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DisplayReview from './DisplayReview';

const Review = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch(' https://shrouded-badlands-19612.herokuapp.com/review').then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='my-12'>
            <h1 className='text-center text-secondary font-bold text-3xl lg:mt-4 mb-8'>Customer Reviews</h1>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto'>
                    {
                        reviews.slice(-3).map(review => <DisplayReview key={review._id} review={review}></DisplayReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Review;