import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BootcampTimeline from './BootcampTimeline'
const About4 = () => {
    return (
        <div class='full-container blue-container'>
            <div className="row">
                <div className="col s12 m6 push-m6">
                    <h4 className="white-text">My coding bootcamp training</h4>
                    <p className="flow-text white-text">
                        After thorough reflections, I made a decision to join an immersive coding bootcamp at Coding Dojo.
                        During <span style={{color: "rgb(266,206,61)"}}>15 weeks </span> of my bootcamp period, I intensively coded, searched, read, and coded more. It was such an incredible learning experience for me that I would love to <span style={{color: "rgb(266,206,61)"}}>join or organize an immersive coding training opportunity</span> in the future. This is what my bootcamp experience looks like:
                        </p>
                </div>
                <div className="col s12 m6 pull-m6 about-left black-text" >
                    <BootcampTimeline/>
                </div>
            </div>
        </div>
    )
}

export default About4
