import React from 'react'
import './Education.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from 'react-icons/md'

const Education = () => {
    return (
        <>

            <div className='education' id='education'>
                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                    Education
                </h2>
                <hr />

                <VerticalTimeline lineColor='#138781'>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#fff)', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid #fff' }}
                        date="2022-2024"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">MCA</h3>
                        <h4 className="vertical-timeline-element-subtitle">UIT RGPV Bhopal</h4>

                    </VerticalTimelineElement>



                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#fff)', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid #fff' }}
                        date="2019-2022"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">BCA</h3>
                        <h4 className="vertical-timeline-element-subtitle">BARKATULLAH Univrsity Bhopal</h4>

                    </VerticalTimelineElement>
                </VerticalTimeline>


            </div>

        </>
    )
}

export default Education