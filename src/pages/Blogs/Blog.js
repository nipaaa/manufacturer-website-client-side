import React from 'react';

const Blog = ({ blog }) => {
    const { id, Question, Ans } = blog;
    return (
        <div tabIndex={id} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-6">
            <div className="collapse-title text-xl font-medium text-secondary">
                {Question}
            </div>
            <div className="collapse-content">
                <p> {Ans}</p>
            </div>
        </div>
    );
};

export default Blog;