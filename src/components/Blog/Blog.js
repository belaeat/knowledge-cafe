import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Blog = () => {
    return (
        <div className='flex gap-5 my-10'>
            <div className=' w-[75%] bg-black'>
                <h2 className='text-white'>This is Blog space</h2>

                

            </div>
            <div className='w-[25%] bg-slate-600'>
                <h1 className='text-white'>This is Sidebar</h1>
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Blog;