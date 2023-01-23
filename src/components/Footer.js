import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <ul>
                <li className='nav-item'>
                    <a href='#home'>Home</a>

                </li>
               
                <li className='nav-item'>
                    <a href='#about'>About</a>

                </li>

                <li className='nav-item'>
                    <a href='#pricing'>Pricing</a>

                </li>
            </ul>
            <div className='bottom'>
                <span className='line'></span>
                <p>2023 Medically Aesthetically You, All rights reserved</p>
            </div>


        </div>

    </div>
  )
}

export default Footer