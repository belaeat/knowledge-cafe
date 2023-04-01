import React from 'react';

const Blog = (props) => {
    const {id, name, title,  featureImage, authorImage, readingTime} = props.blog;
    return (
        <div>
            <div className='m-auto w-[90%]'>
                <div className="card m-15 w-[90%] m-auto bg-white p-5 my-10" id={id}>
                    <img src={featureImage} alt="" />
                    <div className="flex my-5 items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img className='w-10 rounded-full btn-circle avatar' src={authorImage} alt="" />
                            <div>
                                <h3 className='author text-2xl font-bold'>{name}</h3>
                                <p><small>Mar 14 (5 Days ago)</small></p>
                            </div>
                        </div>
                        <div className="flex">
                            <p><small><span className='readingTime'>{readingTime}</span> min read</small></p>

                        </div>
                    </div>
                    <h1 className='card-title text-4xl font-bold'>{title}</h1>
                    <div className="flex gap-5 my-3">
                        <p><small>#beginner</small></p>
                        <p><small>#programming</small></p>
                    </div>
                    <a href="#" className='underline text-blue-600 font-semibold my-5'>Mark as read</a>

                </div>
            </div>
        </div>
    );
};

export default Blog;