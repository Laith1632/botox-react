import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero' id='home'>
            
            <div className='content'>
                <p >Lisa Andrade</p>
                <p>Beautification and Medical Aesthetics</p>
                <p>509-595-3154 (Text/Call)</p>
                <p>Email: MedAsYou@yahoo.com</p>
                <p>1801 W. Norton Rd. suite 100 Springfield, MO. 65803</p>
                <p> (Office located inside the Laser Studio)</p>
                {/* <button href='#' className='button'>Free Consultation</button> */}
            </div>
        </div>
    )
}

export default Hero