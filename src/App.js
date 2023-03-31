import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blog from './components/Blog/Blog'
import QnA from './components/QnA/QnA'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Blog></Blog>
      <QnA></QnA>
    </div>
  )
}

export default App