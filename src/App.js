import React, { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import QnA from './components/QnA/QnA'
import Blogs from './components/Blogs/Blogs'


function App() {
  // Set total bookmarked
  const [countBookmark, setCountBookmark] = useState (0)
  const bookmark = (numbers) =>{
    const previousBookmark = JSON.parse(localStorage.getItem('countBookmark'))
    if(previousBookmark){
      const sumOfBookmark = previousBookmark + numbers;
      localStorage.setReadTime('countBookmark', sumOfBookmark)
      setCountBookmark(sumOfBookmark);
    }
    else{
      localStorage.setItem('countBookmark', numbers)
      setCountBookmark(numbers)
    }
  }
  // set title here 
  const [titleOnSidebar, setTitleOnSidebar] = useState ([])
  const showTitle = (newTitle) =>{
    const previousTitle = JSON.parse(localStorage.getItem('titleOnSidebar'))
    if(previousTitle){
      const addTitle = previousTitle + newTitle;
      localStorage.setReadTime('titleOnSidebar', addTitle)
      setTitleOnSidebar(addTitle);
    }
    else{
      localStorage.setItem('titleOnSidebar', newTitle)
      setTitleOnSidebar(newTitle)
    }
  } 

  // Set read time
  const [readTime, setReadTime] = useState()
  const countTime = (time)=>{
    const previousReadTime = JSON.parse(localStorage.getItem('readTime'))
    if(previousReadTime){
      const total = previousReadTime + time;
      localStorage.setItem('readTime', total);
      setReadTime(total)
    }
    else{
      localStorage.setItem('readTime', time);
      setReadTime(time);
    }
  }

  return (
    <div>

      <div className='m-10'>
        <Header></Header>
      </div>

      <div className='main'>

        <div className='blog'>
          <Blogs countTime={countTime} readTime={readTime} bookmark={bookmark} countBookmark={countBookmark} showTitle={showTitle} titleOnSidebar={titleOnSidebar}></Blogs>
        </div>

        <div className='sidebar'>
          
        </div>

      </div>
      <QnA></QnA>
    </div>
  )
}

export default App