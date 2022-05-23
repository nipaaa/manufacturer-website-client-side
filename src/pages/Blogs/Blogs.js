import React, { useEffect, useState } from 'react';
import Blog from './Blog';


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className='lg:w-1/2 sm:w-5/6 mx-auto my-8'>
            <h2 className='text-center text-primary font-bold text-4xl py-5'>Some Question Answers...</h2>
          
            {
                blogs.map(blog => <Blog
                key={blog.id}
                blog={blog}></Blog>)
            }
          
        </div>
    );
};

export default Blogs;