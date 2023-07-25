import { React, useState } from 'react'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Logo from './components/Logo'
import './App.css'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <div className='appContainer'>
        <div className='top'>
          <Logo />
          <Nav />
        </div>
        <div className='main'>
          <Header />
          <Main />
        </div>
        <div className='bottom'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App

//ADD GOOGLE ANALYTICS TO THIS SITE

//USE LIGHTHOUSE TEST 