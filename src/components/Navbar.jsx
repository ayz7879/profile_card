import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to={'/Home'} className='navitems'>Home</Link>
        <Link to={'/Profile'} className='navitems'>Profile</Link>
        <Link to={'/Contact'} className='navitems'>Contact</Link>
        <Link to={'/About'} className='navitems'>About</Link>
    </div>
  )
}

export default Navbar   