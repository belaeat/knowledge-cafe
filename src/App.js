import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import QnA from './components/QnA/QnA'
import Sidebar from './components/Sidebar/Sidebar'
import Blogs from './components/Blogs/Blogs'
import Blog from './components/Blog/Blog'

function App() {
  return (
    <div >

      <div className='m-10'>
        <Header></Header>
      </div>

      <div className='main'>

        <div className='blog'>
          <Blogs></Blogs>
        </div>

        <div className='sidebar'>
          <Sidebar></Sidebar>
        </div>

      </div>
      <QnA></QnA>
    </div>
  )
}

export default App