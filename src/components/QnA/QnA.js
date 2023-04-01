import React from 'react';

const QnA = () => {
    return (
        <div className='text-center items-center'>
            <div className='rounded bg-slate-200 m-5 p-5'>
                <h2 className='text-3xl font-bold mb-2'>What is the difference between props and state?</h2>
                <p>The difference comes in which component the data are owned. The state is owned locally, and the component itself updates it. Props are owned and read only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child.</p>
            </div>
            <div className='rounded bg-slate-200 m-5 p-5'>
                <h2 className='text-3xl font-bold mb-2'>How does useSate works?</h2>
                <p>useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
            </div>
            <div className='rounded bg-slate-200 m-5 p-5'>
                <h2 className='text-3xl font-bold mb-2'>What does useEffect do except load data?</h2>
                <p>The useEffect in react js allows us to perform side effects in your components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers. The second argument is optional.</p>
            </div>
            <div className='rounded bg-slate-200 m-5 p-5'>
                <h2 className='text-3xl font-bold mb-2'>How does react works?</h2>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
        </div>
    );
};

export default QnA;