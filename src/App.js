import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blog from './components/Blog/Blog'
import QnA from './components/QnA/QnA'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <div >
      <div className='m-10'>
        <Header></Header>
      </div>
      <div className='main'>
        <div className='blog'>
          <Blog></Blog>
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