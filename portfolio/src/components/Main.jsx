import React from 'react'
// import Header from './Header'
// import Footer from './Footer'
import Projects from './Projects'
import Home from './Home'
import SkillsList from './SkillsList'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
// eslint-disable-next-line
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function Main () {
  return (
    <div className='main1'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutMe' element={<AboutMe />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/SkillsList' element={<SkillsList />} />
        <Route path='/ContactMe' element={<ContactMe />} />
      </Routes>
    </div>
  )
}