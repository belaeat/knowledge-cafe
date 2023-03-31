import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blog from './components/Blog/Blog'
import QnA from './components/QnA/QnA'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <div className="App m-10">
      <Header></Header>
      <Blog></Blog>
      <Sidebar></Sidebar>
      <QnA></QnA>
    </div>
  )
}

export default App