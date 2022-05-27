import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ "backgroundImage": "url(https://i.ibb.co/JCzsXSD/morgan-13-1024x576.jpg)" }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className=" text-center text-white">
                <div className="mx-auto w-3/5">
                    <h1 className="mb-5 text-5xl font-bold">Buy your car parts online and pick them up in store in 30 minutes!</h1>
                    <p className="mb-5">Receive free standard shipping on orders over $35 to addresses.</p>
                    <button className="btn btn-secondary">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;