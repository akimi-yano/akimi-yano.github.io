import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Projects = () => {
    return (
        <div id='portofolio' className='section row container'>
            <div className='row col s12 center-align'>
                <h2 id='projecttitle' className='center-align'>Projects</h2>
                <ul id='projtitleanimation'>
                    <li className='projtitlescroll'>
                        <h6 id='projectdescript' className='center-align'>
                        Here are some of the projects I have built.
            </h6>
                    </li>
                </ul>
            </div>
            <ul id='project1animation'>
                <li className='projscroll'>
                    <div id='project1' className='row col s12'>
                        <div className='row col s12'>
                            <h3 className="center-align">Coronavirus Forecast Center</h3>
                        </div>
                        <div className='projdiv row col m6 s12'>
                            <h6 className="flow-text">A world-map view of the predicted spread of confirmed cases and fatalities of the novel COVID-19 virus in 180+ countries using machine learning.</h6>

<h6 className="flow-text">• Built and trained multiple machine-learning models from scratch using Kaggle dataset & Python notebook to generate prediction data over the next 30 days</h6>
<h6 className="flow-text">• Enabled real-time visualization & prediction of the spread of the virus by deploying a Java backend service using serverless Azure Functions</h6>
<h6 className="flow-text">• Demonstrated the accuracy by displaying a graphical comparison of real vs. predicted data</h6>


                            <div className='row'>
                                <div className='col s3'>
                                    <a href='https://github.com/akimi-yano/coronavirus-prediction' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'github']}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        GitHub
                    </h6>
                                </div>
                                <div className='col s3'>
                                    <a href='https://akimi-yano.github.io/coronavirus-prediction/#/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon='columns'/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        Website
                    </h6>
                                </div>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'youtube']}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>Video</h6>
                                </div>
                            </div>
                        </div>
                        <div className='projdiv container row col m6 s12 valign-wrapper'>
                                <img className='projgif valign materialboxed' src="https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/mapshare.gif" alt='project4gif' />
                        </div>
                    </div>
                </li>
            </ul>
            <ul id='project2animation'>
                <li className='projscroll'>
                    <div id='project2' className='row col s12'>
                        <div className='row col s12'>
                            <h3 className="center-align">Face Labo - Interactive Computer Vision</h3>
                        </div>
                        <div className='projdiv row col m6 s12'>

<h6 className="flow-text">A machine learning / computer vision web app that can count how many times a person blinks / winks or whether the person is sleepy from uploaded photos & videos.</h6>
<h6 className="flow-text">• Applied computer vision techniques using OpenCV and Numpy and numerical calculations of dots placed on facial features to determine whether users are winking, sleepy, blinking, etc.</h6>
<h6 className="flow-text">• Realized interactive experience on a Python Django web app through a display of visual alert and image signaling in response to a triggered event to allow users to experience computer vision technology through exciting UI output</h6>

                            
                            <div className='row'>
                                <div className='col s3'>
                                    <a href='https://github.com/akimi-yano/ml_project' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'github']}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>GitHub</h6>
                                </div>
                                <div className='col s3'>
                                    <a href='http://3.101.36.127/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon='columns'/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>Website</h6>
                                </div>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'youtube']}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>Video</h6>
                                </div>

                            </div>
                        </div>
                        <div className='projdiv container row col m6 s12 valign-wrapper'>
                            <img className='projgif valign materialboxed' src="https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/mapshare.gif" alt='project1gif' />
                        </div>
                    </div>
                </li>
            </ul>
            <ul id='project3animation'>
                <li className='projscroll'>
                    <div id='project3' className='row col s12'>
                        <div className='row col s12'>
                            <h3 className="center-align">ice candi - Multilingual Video Chat</h3>
                        </div>
                        <div className='projdiv row col m6 s12'>
<h6 className="flow-text">A multilingual peer-to-peer video chat application with live speech-to-text translation.</h6>
<h6 className="flow-text">• Delivered a seamless video chat experience by implementing WebRTC negotiation mechanism using the Firestore database and React web app</h6>
<h6 className="flow-text">• Empowered users to communicate through a humanized face-to-face / audial interaction and overcome language barriers using real-time speech-to-text translation between 8 languages powered by Azure Speech Translation API</h6>

                            <div className='row'>
                                <div className='col s3'>
                                    <a href='https://github.com/akimi-yano/multilingual-video-chat' target='_blank' rel='noopener noreferrer'> <FontAwesomeIcon icon={['fab', 'github']}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        GitHub
                    </h6>
                                </div>
                                <div className='col s3'>
                                    <a href='https://fir-rtc-bf5c0.firebaseapp.com/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon='columns'/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        Website
                                    </h6>
                                </div>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'youtube']}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>Video</h6>
                                </div>
                            </div>
                        </div>
                        <div className='projdiv container row col m6 s12 valign-wrapper'>
                            <img className='projgif valign materialboxed' src="https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/mapshare.gif" alt='project2gif' />
                        </div>
                    </div>
                </li>
            </ul>
            <ul id='project4animation'>
                <li className='projscroll'>
                    <div id='project4' className='row col s12'>
                        <div className='row col s12'>
                            <h3 className="center-align">IOT Face Recognition (仮)</h3>
                        </div>
                        <div className='projdiv row col m6 s12'>

                            <h6 className="flow-text">
                            I built a machine learning IOT that detect and recognize face of human.
                </h6>
                            <h6 className="flow-text">
                            Built with Raspberry Pi, Python3, Open CV, NumPy, CISCO 
                </h6>
                            <div className='row'>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'> <FontAwesomeIcon icon={['fab', 'github']}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>GitHub</h6>
                                </div>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon='columns'/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>Website</h6>
                                </div>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'youtube']}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>Video</h6>
                                </div>

                            </div>
                        </div>
                        <div className='projdiv container row col m6 s12 valign-wrapper'>
                            <img className='projgif valign materialboxed' src="https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/mapshare.gif" alt='project1gif' />
                        </div>
                    </div>
                </li>
            </ul>




            <ul id='project5animation'>
                <li className='projscroll'>
                    <div id='project5' className='row col s12'>
                        <div className='row col s12'>
                            <h3 className='center-align'>Who's That Pokémon?</h3>
                        </div>
                        <div className='projdiv row col m6 s12'>

                            <h6 className="flow-text">
                            I built a "Who's That Pokémon?" game
                </h6>
                            <h6 className="flow-text">
                            Built with JavaScript, Jquery, CSS, HTML
                </h6>
                            <div className='row'>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'github']}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        GitHub
                    </h6>
                                </div>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon='columns'/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        Website
                    </h6>
                                </div>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'youtube']}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>Video</h6>
                                </div>
                            </div>
                        </div>
                        <div className='projdiv container row col m6 s12 valign-wrapper'>
                            <img className='projgif valign materialboxed' src="https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/mapshare.gif" alt='project3gif' />
                        </div>
                    </div>
                </li>
            </ul>
            <ul id='project6animation'>
                <li className='projscroll'>
                    <div id='project6' className='row col s12'>
                        <div className='row col s12'>
                            <h3 className='center-align'>Climbing Training System Analysis</h3>
                        </div>
                        <div className='projdiv row col m6 s12'>
                            <h6 className="flow-text">
                            Analyzed data from Moon Board rock climbing training system, and identified the easiest Moon Board problems at each difficulty level using Python.
                </h6>
                            <h6 className="flow-text">
                            Built with Python, Jupyter notebook, Anaconda
                </h6>
                            <div className='row'>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'github']}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        GitHub
                    </h6>
                                </div>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon='columns'/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        Website
                    </h6>
                                </div>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'youtube']}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>Video</h6>
                                </div>
                            </div>
                        </div>
                        <div className='projdiv container row col m6 s12 valign-wrapper'>
                                <img className='projgif valign materialboxed' src="https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/mapshare.gif" alt='project4gif' />
                        </div>
                    </div>
                </li>
            </ul>
           
        </div>
    )
}

export default Projects
