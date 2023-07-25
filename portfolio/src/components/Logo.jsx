import React, { Component } from 'react'
import logo from '../assets/1.svg'
import { Link } from 'react-router-dom'

export default function Logo () {
  return (
    <div className="logo">
      <Link to='/'>
        <img src={logo}/>
      </Link>
    </div>
  )
}