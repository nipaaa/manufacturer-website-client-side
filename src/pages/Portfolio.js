import React from 'react';
import portfolio from '../images/nipa.jpg'

const Portfolio = () => {
    return (
        <div className='bg-base-200'>
            <h1 class="text-5xl text-center pt-8 text-primary font-bold">My Portfolio</h1>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={portfolio} class="lg:max-w-lg sm:max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-4xl text-secondary font-bold">Nipa Akter</h1>
                        <p><span className='text-accent font-bold'>Email:</span> akternipa941@gmail.com</p>
                        <p><span className='text-accent font-bold'>Education:</span>Bachelor of Science (BSc)</p>
                        <p><span className='text-accent font-bold'>Major:</span>Computer Science and Engineering (CSE)</p>
                        <p><span className='text-accent font-bold'>Technologies/Skills:</span> HTML5, CSS3, Bootstrap4, Tailwind CSS, React, Redux, Firebase, Node, Express, MongoDB, Github</p>
                        <p><span className='text-accent font-bold'>Projects Live Site Link:</span>
                            https://independent-service-prov-8c99d.web.app <br />
                            https://assignment-11-404c7.web.app <br />
                            https://cookie-store-analysis.netlify.app </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Portfolio;