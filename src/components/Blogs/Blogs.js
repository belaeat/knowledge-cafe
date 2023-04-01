import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Blog from '../Blog/Blog';

const Blogs = () => {

    const blogs = [
        {
            id: 1,
            name: 'M. Mark',
            title: 'How to get your first job as a self-taught programmer?',
            featureImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
            authorImage: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            readingTime: 5
        },
        {
            id: 2,
            name: 'M. Angelo',
            title: 'How to get your first job as a self-taught programmer?',
            featureImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
            authorImage: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            readingTime: 8
        },
        {
            id: 3,
            name: 'S. Hussain',
            title: 'How to get your first job as a self-taught programmer?',
            featureImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
            authorImage: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            readingTime: 7
        },
        {
            id: 4,
            name: 'Shakib Khan',
            title: 'How to get your first job as a self-taught programmer?',
            featureImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
            authorImage: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            readingTime: 6
        }
    ];

    return (
        <div className='flex gap-5 my-10 bg-slate-100'>

            <div>
                {
                    blogs.map(blog => <Blog key ={blog.id} blog = {blog}></Blog>)
                }
            </div>

            <div className='w-[25%]'>
                <Sidebar></Sidebar>
            </div>

        </div>
    );
};

export default Blogs;