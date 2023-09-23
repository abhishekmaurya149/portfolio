import React from 'react'
import './Projects.css'

const Projects = () => {
    return (
        <>
            <div className='project' id='projects'>
                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                    TOP REACT PROJECTS
                </h2>
                <hr />
                <p className="pb-3 text-center">
                    here are my top 3 recent project with live links and source code
                    Web developer, with extensive knowledge and years of experience, working in web technologies and Ui/Ux design, delivering quality work.
                </p>
                <div className='row' id='ads'>
                    <div className='col-md-4'>
                        <div className='card rounded'>
                            <div className='card-image'>
                                <span className='card-notify-badge'>Full stack</span>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsbfIMF6YSIVh323nXO2dlqmjnkhZ1PsZFA&usqp=CAU' alt='projects' />
                                <div className='card-image-overly m-auto mt-3 text-center'>
                                    <span className='card-detail-badge'>Node</span>
                                    <span className='card-detail-badge'>Express</span>
                                    <span className='card-detail-badge'>react</span>
                                    <span className='card-detail-badge'>MongoDB</span>
                                </div>
                                <div className='card-body text-center'>
                                    <div className='ad-title m-auto' >
                                        <h5 className='text-uppercase'>Shopping Website</h5>
                                    </div>
                                    <a className='ad-btn' href='#' >View</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='col-md-4'>
                        <div className='card rounded'>
                            <div className='card-image'>
                                <span className='card-notify-badge'>Full stack</span>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsbfIMF6YSIVh323nXO2dlqmjnkhZ1PsZFA&usqp=CAU' alt='projects' />
                                <div className='card-image-overly m-auto mt-3 text-center'>
                                    <span className='card-detail-badge'>Node</span>
                                    <span className='card-detail-badge'>Express</span>
                                    <span className='card-detail-badge'>react</span>
                                    <span className='card-detail-badge'>MongoDB</span>
                                </div>
                                <div className='card-body text-center'>
                                    <div className='ad-title m-auto' >
                                        <h5 className='text-uppercase'>Shopping Website</h5>
                                    </div>
                                    <a className='ad-btn' href='#' >View</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='col-md-4'>
                        <div className='card rounded'>
                            <div className='card-image'>
                                <span className='card-notify-badge'>Full stack</span>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsbfIMF6YSIVh323nXO2dlqmjnkhZ1PsZFA&usqp=CAU' alt='projects' />
                                <div className='card-image-overly m-auto mt-3 text-center'>
                                    <span className='card-detail-badge'>Node</span>
                                    <span className='card-detail-badge'>Express</span>
                                    <span className='card-detail-badge'>react</span>
                                    <span className='card-detail-badge'>MongoDB</span>
                                </div>
                                <div className='card-body text-center'>
                                    <div className='ad-title m-auto' >
                                        <h5 className='text-uppercase'>Shopping Website</h5>
                                    </div>
                                    <a className='ad-btn' href='#' >View</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Projects