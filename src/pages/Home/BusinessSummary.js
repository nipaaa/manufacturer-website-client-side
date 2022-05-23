import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='my-12'>
            <h1 className='text-center text-primary text-5xl mt-8 font-bold'>Business Summary</h1>
            <h2 className='text-center font-mono ... text-3xl mb-8 mt-2'>Try Our Best To Understand Users Expectation</h2>
            <div class="stats stats-vertical w-full text-center lg:stats-horizontal text-primary shadow">

                <div class="stat">
                    <div class="stat-title  text-5xl font-bold"><i class="fa-solid fa-people-line"></i></div>
                    <div class="stat-value  py-4">300+ </div>
                    <div class="stat-desc text-3xl font-bold">customers</div>
                </div>
                <div class="stat">
                    <div class="stat-title  text-5xl font-bold"><i class="fa-solid fa-sack-dollar"></i></div>
                    <div class="stat-value  py-4">31K+</div>
                    <div class="stat-desc text-3xl  font-bold">Annual Revenue</div>
                </div>
                <div class="stat">
                    <div class="stat-title  text-5xl font-bold"><i class="fa-regular fa-comments"></i></div>
                    <div class="stat-value  py-4">31M+</div>
                    <div class="stat-desc text-3xl  font-bold">Reviews</div>
                </div>
                <div class="stat">
                    <div class="stat-title text-5xl font-bold"><i class="fa-solid fa-screwdriver-wrench"></i></div>
                    <div class="stat-value  py-4">10,000+</div>
                    <div class="stat-desc text-3xl font-bold">Parts</div>
                </div>

               

            </div>

        </div>
    );
};

export default BusinessSummary;