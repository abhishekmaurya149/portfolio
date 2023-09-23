import React from 'react'
import './WorkExp.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiReact } from 'react-icons/si'

const WorkExp = () => {
    return (
        <>

            <div className=' work' id='work_experince'>
                <div className=' container work-exp'>
                    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                        Work Experince
                    </h2>
                    <hr />

                    <VerticalTimeline lineColor='#1e1e1e'>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#fff', color: '#1e1e1e' }}
                            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                            date="2023"
                            iconStyle={{ background: '#1e1e1e', color: '#138781' }}
                            icon={<SiReact />}
                        >
                            <h3 className="vertical-timeline-element-title">FullStack Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">XYZ Pvt. Ltd.</h4>

                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#fff', color: '#1e1e1e' }}
                            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                            date="2023"
                            iconStyle={{ background: '#1e1e1e', color: '#138781' }}
                            icon={<SiReact />}
                        >
                            <h3 className="vertical-timeline-element-title">FullStack Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">XYZ Pvt. Ltd.</h4>

                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#fff', color: '#1e1e1e' }}
                            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                            date="2023"
                            iconStyle={{ background: '#1e1e1e', color: '#138781' }}
                            icon={<SiReact />}
                        >
                            <h3 className="vertical-timeline-element-title">FullStack Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">XYZ Pvt. Ltd.</h4>

                        </VerticalTimelineElement>
                    </VerticalTimeline>



                </div>
            </div>

        </>
    )
}

export default WorkExp