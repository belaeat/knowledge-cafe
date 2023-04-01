import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Blog = () => {

    const blogPost = [
        {
            id: 1,
            name: 'M. Mark',
            featureImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
            authorImage: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            readingTime: 5
        },
        {
            id: 2,
            name: 'M. Angelo',
            featureImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
            authorImage: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            readingTime: 8
        },
        {
            id: 3,
            name: 'S. Hussain',
            featureImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
            authorImage: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            readingTime: 7
        },
        {
            id: 4,
            name: 'Shakib Khan',
            featureImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
            authorImage: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            readingTime: 6
        }
    ];

    return (
        <div className='flex gap-5 my-10'>


            <div className='m-auto w-[90%]'>
                <div className="card m-15 p-5 w-[90%] m-auto">
                    <img src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt="" />
                    <div className="flex my-5 items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img className='w-10 rounded-full btn-circle avatar' src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                            <div>
                                <h3 className='author text-2xl font-bold'>Mr. Mango</h3>
                                <p><small>Mar 14 (5 Days ago)</small></p>
                            </div>
                        </div>
                        <div className="flex">
                            <p><small><span className='time-to-read'>05</span> min read</small></p>
                            {/* bookmark icon ashbe ekhane*/}
                        </div>
                    </div>
                    <h1 className='card-title text-4xl font-bold'>How to get your first job as a self-taught programmer.</h1>
                    <div className="flex gap-5 my-3">
                        <p><small>#beginner</small></p>
                        <p><small>#programming</small></p>
                    </div>
                    <a href="#" className='underline text-blue-600 font-semibold my-5'>Mark as read</a>
                </div>


            </div>

            <div className='w-[25%] bg-slate-600'>
                <h1 className='text-white'>This is Sidebar</h1>
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Blog;