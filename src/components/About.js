import React from 'react'
import lisa from './images/about.jpg'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img className='lisa' src={lisa} alt='Lisa Andrade' />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>At Medically Aesthetically You we're all about family, as a mother of four now grown adults im all about family. I have also been a full time registered nurse (RN) for 25+ years in multiple realms of the medical field  </p>
                    <p>I very much enjoy caring and assisting others. I have currently transitioned to what I have found as my new passion in helping people with really finding their inner beauty and feeling better about themselves mentally and physically.</p>
                    {/* <button className='button'>Explore More</button> */}
                </div>
            </div>
        </div>
    )
}

export default About