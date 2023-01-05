import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
// import logo from './images/logo.jpeg'
import './Navbar.css'



const Navbar = () => {
  return (
    <div className='header'>
            <nav className='navbar'>
                {/* <a href='/' className='logo'>
                    <img src={logo} alt='logo'/>
                </a> */}
                <div classname='hamburger'>
                    <FaBars/>
                </div>
                    <ul className='nav-menu'>
                        <li className='nav-item'>
                            <a href='/'>Home</a>
                        </li>

                        <li className='nav-item'>
                            <a href='/'>About</a>
                        </li>

                        <li className='nav-item'>
                            <a href='/'>Pricing</a>
                        </li>

                    </ul>
            </nav>

    </div>
  )
}

export default Navbar