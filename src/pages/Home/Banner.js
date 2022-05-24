import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{"backgroundImage":"url(https://i.ibb.co/51Y5rqk/morgan-13-1024x576.jpg)"}}>
            <div class="hero-overlay bg-opacity-40"></div>
            <div class=" text-center text-white">
                <div class="mx-auto w-3/5">
                    <h1 class="mb-5 text-5xl font-bold">Buy your car parts online and pick them up in store in 30 minutes!</h1>
                    <p class="mb-5">Receive free standard shipping on orders over $35 to addresses.</p>
                    <button class="btn btn-secondary">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;