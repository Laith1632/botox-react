import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
// import logo from './images/logo.jpeg'
import './Navbar.css'



const Navbar = () => {
const [click, setClick] =useState(false)

const handleClick = () => setClick(!click)

  return (
    <div className='header'>
            <nav className='navbar'>
                {/* <a href='/' className='logo'>
                    <img src={logo} alt='logo'/>
                </a> */}
                <div classname='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{color: '#fffff'}}/>) :
                    (<FaBars size={30} style={{color: '#ffffff'}}/> )}

                </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
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