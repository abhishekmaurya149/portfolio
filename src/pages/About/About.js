import React from 'react'
import './About.css';
import Pic from '../../assets/images/profile.jpg'

const About = () => {
    return (
        <>

            <div className='about' id='about'>
                <div className='row'>
                    <div className='col-md-6 col-lg-6 col-xl-6 col-xs-12 about-image'>
                        <img src={Pic} alt='Profile_pic' />
                    </div>
                    <div className='col-md-5 about-content'>
                        <h1>About Me</h1>
                        <p>
                            Web developer, with extensive knowledge and years of experience, working in web technologies and Ui/Ux design, delivering quality work.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About