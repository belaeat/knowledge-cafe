import React from 'react';

const Sidebar = ({readTime, titleOnSidebar}) => {
    return (
        <div>
            <div className='p-5 bg-purple-200 rounded-lg'>
                <h3 className='font-bold text-xl text-purple-800'>Spent time on read: {readTime} min</h3>
            </div>
            <div className='p-5 bg-slate-200 rounded-lg my-5'>
                <div>
                    <h3 className='mb-3 font-bold'>Bookmarked blogs: {}</h3>
                    <h3 className='font-bold text-xl bg-white p-3 rounded-lg'>{titleOnSidebar}</h3>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;