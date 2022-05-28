import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DisplayReview from './DisplayReview';

const Review = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('http://localhost:5000/review').then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='my-12'>
        <h1 className='text-center text-primary font-bold text-4xl lg:mt-4'>Customer Reviews</h1>
        <div className='flex justify-center'>
            <div className='grid lg:grid-cols-3 gap-2'>
                {
                    reviews.map(review => <DisplayReview key={review._id} review={review}></DisplayReview>)
                }
            </div>
        </div>
    </div>
    );
};

export default Review;