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
                        During 15 weeks of my bootcamp period, I intensively coded, searched, read, and coded more. It was an incredible learning experience for me, and I would love to join or organize an immersive coding training opportinuty in the future. This is what my bootcamp experience looks like:
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
