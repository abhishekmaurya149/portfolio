import React from 'react'
import './Contact.css'
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'

const Contact = () => {
    return (
        <>

            <div className='  contact' id='contact'>
                <div className='card card0 border-0'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-xk-6 col-sm-12'>
                            <div className='card1'>
                                <div className='row border-line'>
                                    <img
                                        className='image'
                                        src='https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000'
                                        alt='contact' />
                                    {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAu-eefXP87BePP6QvArlO2Nmy3zUN38BvbA&usqp=CAU' alt='contact' /> */}
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                            <div className='card2 d-flex card border-0 px-4 py-3'>
                                <div className='row'>
                                    <div className='row'>
                                        <h6>Contact With
                                            <BsLinkedin color='blue' size={'30px'} className='ms-2' />
                                            <BsGithub color='black' size={'30px'} className='ms-2' />
                                            <BsTwitter color='blue' size={'30px'} className='ms-2' />

                                        </h6>
                                    </div>
                                    <div className='row px-3 mb-4'>
                                        <div className='line' />
                                        <small className='or text-center'>OR</small>
                                        <div className='line' />
                                    </div>
                                    <div className='row px-3'>
                                        <input
                                            type='text'
                                            name='name'
                                            placeholder='Enter your Name'
                                            className='mb-3'
                                        />
                                    </div>
                                    <div className='row px-3'>
                                        <input
                                            type='email'
                                            name='email'
                                            placeholder='Enter your Email'
                                            className='mb-3'
                                        />
                                    </div>

                                    <div className='row px-3'>
                                        <textarea
                                            type='text'
                                            name='msg'
                                            placeholder='Write your Message'
                                            className='mb-3'
                                        />
                                    </div>
                                    <div className='row px-3'>
                                        <button className="button">SEND MESSAGE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Contact