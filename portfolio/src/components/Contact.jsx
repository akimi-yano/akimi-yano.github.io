import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Contact = () => {
    return (
        <footer>
            <div id='contact' className='container center-align'>
                <div className='row'>
                    <div className='col l12 m12 s12'>
                        <h2>Contact Me</h2>
                        <h6 className='pink-text text-accent-1'>Please feel free to reach out to me:</h6>
                    </div>
                </div>
                <div className='row '>
                    <div className="col s6 m3 l3">
                        <a href='mailto:akimi.mimi.yano@gmail.com' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon='envelope' size='4x' color='black'/>
                            <h6 className="black-text">Email</h6></a>
                    </div>
                    <div className="col s6 m3 l3">
                        <a href='https://linkedin.com/in/akimi-yano' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size='4x' color='black'/>
                            <h6 className="black-text">LinkedIn</h6></a>
                    </div>
                    <div className="col s6 m3 l3">
                        <a href='https://github.com/akimi-yano' className='contactlink' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={['fab', 'github']} size='4x' color='black'/>
                            <h6 className="black-text">GitHub</h6></a>
                    </div>
                    <div className="col s6 m3 l3"><a href='https://github.com/akimi-yano' target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={['fab', 'kaggle']} size='4x' color='black'/>
                        <h6 className="black-text">AI Competition</h6></a>
                    </div>
                </div>
                <div className="row ">
                    <div className="col s6 m3 l3">
                        <a href='mailto:akimi.mimi.yano@gmail.com' className='contactlink' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon="gamepad" size='4x' color='black'/>
                            <h6 className="black-text">Animated Portfolio</h6></a>
                    </div>
                    <div className="col s6 m3 l3">

                        <a href='https://linkedin.com/in/akimi-yano' className='contactlink' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon='laptop-code' size='4x' color='black'/>
                            <h6 className="black-text">Leetcode</h6></a>
                    </div>
                    <div className="col s6 m3 l3">
                        <a href='https://github.com/akimi-yano' className='contactlink' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={['fab', 'twitter']} size='4x' color='black'/>
                            <h6 className="black-text">Twitter</h6></a>
                    </div>

                    <div className="col s6 m3 l3">
                        <a href='https://github.com/akimi-yano' className='contactlink' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={['fab', 'medium-m']} size='4x' color='black'/>
                            <h6 className="black-text">Medium</h6></a>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12">
                        © 2020 Akimi Yano
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Contact
