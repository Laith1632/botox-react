import React from 'react'
import lisa from './images/about.jpg'
import greg from './images/Dr. Sannoval.jpg'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img className='lisa' src={lisa} alt='Lisa Andrade' />
                <div className='col-2'>
                    <h2>About Lisa</h2>
                    <span className='line'></span>
                    <p className='about-font'>Lisa Andrade is a Registered Nurse, with additional certifications in
Rehabilitation Nursing. She earned her RN degree in 1999, however has
worked in the medical field in many capacities since 1989, including as
a CNA, and LPN. She earned her CRRN in 2006, and has continued
working on an Acute Rehabilitation Unit as the Charge Nurse. She then
completed the past 4years as the Rehab Intake Coordinator.  </p>
                    <p>She earned a Certification in Legal Nurse Consultation in June, 2015.
She has participated in teaching events within the community at Job
fairs, fair booths, and preceptor to nursing students and new nurses.
She provides transfer training throughout the hospital for ongoing
education and safety prevention. She is a member of ARN (Association
of Rehabilitation Nurse).</p>
                    {/* <button className='button'>Explore More</button> */}
                    <img className='lisa' src={greg} alt='Gregory Sainnoval' />
                    <h2>About Dr. Sainnoval</h2>
                    <span className='line'></span>
                    <p className='about-font'>
                    Dr. Gregory Sainnoval is the medical director and has two decades of surgical experience. He is well liked by his patients and treats all patients with respect. Great knowledge of anatomy and potential complications and ways to prevent them in the first place.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About