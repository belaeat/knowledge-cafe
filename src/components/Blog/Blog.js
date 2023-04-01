import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = ({ blog, countTime, bookmark, showTitle }) => {
    // const { id, name, title, featureImage, authorImage, readingTime, countTime} = props.blog;

    // const markAsRead = props.markAsRead;


    return (
        <div>
            <div className='m-auto w-[90%]'>
                <div className="card w-[90%] m-auto bg-green-50 p-5 my-5" id={blog.id}>
                    <img src={blog.featureImage} alt="" />
                    <div className="flex my-5 items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img className='w-10 rounded-full btn-circle avatar' src={blog.authorImage} alt="" />
                            <div>
                                <h3 className='author text-2xl font-bold'>{blog.name}</h3>
                                <p><small>Mar 14 (5 Days ago)</small></p>
                            </div>
                        </div>
                        <div className="flex">
                            <p className='mr-2'><small><span className='readingTime'>{blog.readingTime}</span> min read</small></p>
                            <div className='btn' onClick={() => showTitle(blog.title)}>
                                <FontAwesomeIcon icon={faBookmark} />
                            </div>
                        </div>
                    </div>
                    <h1 className='card-title text-4xl font-bold'>{blog.title}</h1>
                    <div className="flex gap-5 my-3">
                        <p><small>#beginner</small></p>
                        <p><small>#programming</small></p>
                    </div>
                    <button onClick={() => countTime(blog.readingTime)} className='underline text-blue-600 font-semibold text-left my-5'>Mark as read</button>


                </div>
            </div>
        </div>
    );
};

export default Blog;