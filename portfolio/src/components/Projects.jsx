import React from 'react'
import WebIcon from '@material-ui/icons/Web';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Projects = () => {
    return (
        <div id='portofolio' className='section row container'>
            <div className='row col s12 center-align'>
                <h2 id='projecttitle' className='header raleway'>Projects</h2>
                <ul id='projtitleanimation'>
                    <li className='projtitlescroll'>
                        <h6 id='projectdescript' className='raleway tealfont'>
                        Here are some of the projects I have built.
            </h6>
                    </li>
                </ul>
            </div>
            <ul id='project1animation'>
                <li className='projscroll'>
                    <div id='project1' className='row col s12'>
                        <div className='row col s12'>
                            <h3 className='tealfont raleway projtitle'>Coronavirus Forecast Center</h3>
                        </div>
                        <div className='projdiv row col m6 s12'>
                            <h6 className='raleway projtext'>A world-map view of the predicted spread of confirmed cases and fatalities of the novel COVID-19 virus in 180+ countries using machine learning.</h6>

<h6 className='raleway projtext'>• Built and trained multiple machine-learning models from scratch using Kaggle dataset & Python notebook to generate prediction data over the next 30 days</h6>
<h6 className='raleway projtext'>• Enabled real-time visualization & prediction of the spread of the virus by deploying a Java backend service using serverless Azure Functions</h6>
<h6 className='raleway projtext'>• Demonstrated the accuracy by displaying a graphical comparison of real vs. predicted data</h6>


                            <div className='row'>
                                <div className='col s3'>
                                    <a href='https://github.com/akimi-yano/coronavirus-prediction' target='_blank' rel='noopener noreferrer'><GitHubIcon className="icon_size1" style={{ fontSize: '59px', color:'black', marginTop: '17px' }}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        GitHub
                    </h6>
                                </div>
                                <div className='col s3'>
                                    <a href='https://akimi-yano.github.io/coronavirus-prediction/#/' target='_blank' rel='noopener noreferrer'><WebIcon className="icon_size2" style={{ fontSize: '70px', color:'black', marginTop: '11px' }}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        Website
                    </h6>
                                </div>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><YouTubeIcon className="icon_size3"  style={{ fontSize: '81px', color:'black', marginTop: '5px'}}/></a>
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
                            <h3 className='tealfont raleway projtitle'>Face Labo - Interactive Computer Vision</h3>
                        </div>
                        <div className='projdiv row col m6 s12'>

<h6 className='raleway projtext'>A machine learning / computer vision web app that can count how many times a person blinks / winks or whether the person is sleepy from uploaded photos & videos.</h6>
<h6 className='raleway projtext'>• Applied computer vision techniques using OpenCV and Numpy and numerical calculations of dots placed on facial features to determine whether users are winking, sleepy, blinking, etc.</h6>
<h6 className='raleway projtext'>• Realized interactive experience on a Python Django web app through a display of visual alert and image signaling in response to a triggered event to allow users to experience computer vision technology through exciting UI output</h6>

                            
                            <div className='row'>
                                <div className='col s3'>
                                    <a href='https://github.com/akimi-yano/ml_project' target='_blank' rel='noopener noreferrer'><GitHubIcon className="icon_size1"  style={{ fontSize: '59px', color:'black', marginTop: '17px' }}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>GitHub</h6>
                                </div>
                                <div className='col s3'>
                                    <a href='http://3.101.36.127/' target='_blank' rel='noopener noreferrer'><WebIcon className="icon_size2"  style={{ fontSize: '70px', color:'black', marginTop: '11px'}}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>Website</h6>
                                </div>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><YouTubeIcon className="icon_size3"  style={{ fontSize: '81px', color:'black', marginTop: '5px'}}/></a>
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
                            <h3 className='tealfont raleway projtitle'>ice candi - Multilingual Video Chat</h3>
                        </div>
                        <div className='projdiv row col m6 s12'>
<h6 className='raleway projtext'>A multilingual peer-to-peer video chat application with live speech-to-text translation.</h6>
<h6 className='raleway projtext'>• Delivered a seamless video chat experience by implementing WebRTC negotiation mechanism using the Firestore database and React web app</h6>
<h6 className='raleway projtext'>• Empowered users to communicate through a humanized face-to-face / audial interaction and overcome language barriers using real-time speech-to-text translation between 8 languages powered by Azure Speech Translation API</h6>

                            <div className='row'>
                                <div className='col s3'>
                                    <a href='https://github.com/akimi-yano/multilingual-video-chat' target='_blank' rel='noopener noreferrer'><GitHubIcon className="icon_size1"  style={{ fontSize: '59px', color:'black', marginTop: '17px'}}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        GitHub
                    </h6>
                                </div>
                                <div className='col s3'>
                                    <a href='https://fir-rtc-bf5c0.firebaseapp.com/' target='_blank' rel='noopener noreferrer'><WebIcon className="icon_size2"  style={{ fontSize: '70px', color:'black', marginTop: '11px'}}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        Website
                                    </h6>
                                </div>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><YouTubeIcon className="icon_size3"  style={{ fontSize: '81px', color:'black', marginTop: '5px' }}/></a>
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
                            <h3 className='tealfont raleway projtitle'>IOT Face Recognition (仮)</h3>
                        </div>
                        <div className='projdiv row col m6 s12'>

                            <h6 className='raleway projtext'>
                            I built a machine learning IOT that detect and recognize face of human.
                </h6>
                            <h6 className='raleway projtext'>
                            Built with Raspberry Pi, Python3, Open CV, NumPy, CISCO 
                </h6>
                            <div className='row'>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><GitHubIcon className="icon_size1"  style={{ fontSize: '59px', color:'black', marginTop: '17px' }}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>GitHub</h6>
                                </div>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><WebIcon className="icon_size2"  style={{ fontSize: '70px', color:'black', marginTop: '11px'}}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>Website</h6>
                                </div>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><YouTubeIcon className="icon_size3"  style={{ fontSize: '81px', color:'black', marginTop: '5px'}}/></a>
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
                            <h3 className='tealfont raleway projtitle'>Who's That Pokémon?</h3>
                        </div>
                        <div className='projdiv row col m6 s12'>

                            <h6 className='raleway projtext'>
                            I built a "Who's That Pokémon?" game
                </h6>
                            <h6 className='raleway projtext'>
                            Built with JavaScript, Jquery, CSS, HTML
                </h6>
                            <div className='row'>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><GitHubIcon className="icon_size1"  style={{ fontSize: '59px', color:'black', marginTop: '17px'}}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        GitHub
                    </h6>
                                </div>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><WebIcon className="icon_size2"  style={{ fontSize: '70px', color:'black', marginTop: '11px' }}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        Website
                    </h6>
                                </div>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><YouTubeIcon className="icon_size3"  style={{ fontSize: '81px', color:'black', marginTop: '5px' }}/></a>
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
                            <h3 className='tealfont raleway projtitle'>Climbing Training System Analysis</h3>
                        </div>
                        <div className='projdiv row col m6 s12'>
                            <h6 className='raleway projtext'>
                            Analyzed data from Moon Board rock climbing training system, and identified the easiest Moon Board problems at each difficulty level using Python.
                </h6>
                            <h6 className='raleway projtext'>
                            Built with Python, Jupyter notebook, Anaconda
                </h6>
                            <div className='row'>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><GitHubIcon className="icon_size1" style={{ fontSize: '59px', color:'black', marginTop: '17px' }}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        GitHub
                    </h6>
                                </div>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><WebIcon className="icon_size2" style={{ fontSize: '70px', color:'black', marginTop: '11px' }}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        Website
                    </h6>
                                </div>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><YouTubeIcon className="icon_size3"  style={{ fontSize: '81px', color:'black', marginTop: '5px'}}/></a>
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
