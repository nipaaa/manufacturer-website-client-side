import React from 'react';

const Blog = ({blog}) => {
    const {id,Question,Ans} = blog;
    return (
        <div tabIndex={id} class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-6">
            <div class="collapse-title text-xl font-medium text-secondary">
                {Question}
            </div>
            <div class="collapse-content">
                <p> tabIndex={id} {Ans}</p>
            </div>
        </div>
    );
};

export default Blog;