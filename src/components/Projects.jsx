import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Projects = () => {
    return (
        <div>
            <div id="projects-title" className='full-container-title scrollspy'>
                <h2>Projects</h2>
                <p className="flow-text center-align">Here are some of the projects I have built.</p>
            </div>
            <div id='portfolio' className='full-container'>
                <div style={{flexWrap: "wrap"}} className="row valign-wrapper">
                    <div className="col s12 m6">
                        <div div id='project1' className="scrollspy">
                            <h4 className="indigo-text text-darken-1">Coronavirus Forecast Center</h4>
                        </div>
                        <p>A world-map view of the predicted spread of confirmed cases and fatalities of the novel COVID-19 virus in 180+ countries using machine learning.</p>
                        <ul style={{ padding: "4vh 0" }}>
                            <li>• Built and trained multiple machine-learning models from scratch using Kaggle dataset & Python notebook to generate prediction data over the next 30 days</li>
                            <li>• Enabled real-time visualization & prediction of the spread of the virus by deploying a Java backend service using serverless Azure Functions</li>
                            <li>• Demonstrated the accuracy by displaying a graphical comparison of real vs. predicted data</li>
                        </ul>
                        <div className='row center-align'>
                            <div className='col s4'>
                                <a className="tooltipped" data-position="bottom" data-tooltip="Website" href='https://akimi-yano.github.io/coronavirus-prediction/#/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon='external-link-alt' size="4x" color="black" /></a>
                                <h6 className="hide-on-large-only">Website</h6>
                            </div>
                            <div className='col s4'>
                                <a className="tooltipped" data-position="bottom" data-tooltip="Video" href='https://youtu.be/_MbivAzbbWI' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'youtube']} size="4x" color="black" /></a>
                                <h6 className="hide-on-large-only">Video</h6>
                            </div>
                            <div className='col s4'>
                                <a className="tooltipped" data-position="bottom" data-tooltip="GitHub" href='https://github.com/akimi-yano/coronavirus-prediction' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'github']} size="4x" color="black" /></a>
                                <h6 className="hide-on-large-only">GitHub</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6">
                        <img className="valign-center proj-gif" src={process.env.PUBLIC_URL + '/gifs/coronavirus.gif'} alt='Project GIF' />
                    </div>
                </div>

                <div className="divider grey darken-1"></div>

                <div style={{flexWrap: "wrap"}} className="row valign-wrapper">
                    <div className="col s12 m6">
                        <div div id='project2' className="scrollspy">
                            <h4 className="cyan-text text-darken-1">Face Labo - Interactive Computer Vision</h4>
                        </div>
                        <p>A machine learning / computer vision web app that can count how many times a person blinks / winks or whether the person is sleepy from uploaded photos & videos.</p>
                        <ul style={{ padding: "4vh 0" }}>
                            <li>• Applied computer vision techniques using OpenCV and Numpy and numerical calculations of dots placed on facial features to determine whether users are winking, sleepy, blinking, etc.</li>
                            <li>• Realized interactive experience on a Python Django web app through a display of visual alert and image signaling in response to a triggered event to allow users to experience computer vision technology through exciting UI output</li>
                        </ul>
                        <div className='row center-align'>
                            <div className='col s4'>
                                <a className="tooltipped" data-position="bottom" data-tooltip="Website" href='http://54.183.232.224/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon='external-link-alt' size="4x" color="black" /></a>
                                <h6 className="hide-on-large-only">Website</h6>
                            </div>
                            <div className='col s4'>
                                <a className="tooltipped" data-position="bottom" data-tooltip="Video" href='https://youtu.be/keb4yA6N1Lc' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'youtube']} size="4x" color="black" /></a>
                                <h6 className="hide-on-large-only">Video</h6>
                            </div>
                            <div className='col s4'>
                                <a className="tooltipped" data-position="bottom" data-tooltip="GitHub" href='https://github.com/akimi-yano/ml_project' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'github']} size="4x" color="black" /></a>
                                <h6 className="hide-on-large-only">GitHub</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6">
                        <img className="valign-center proj-gif" src={process.env.PUBLIC_URL + '/gifs/facelabo.gif'} alt='Project GIF' />
                    </div>
                </div>

                <div className="divider grey darken-1"></div>

                <div style={{flexWrap: "wrap"}} className="row valign-wrapper">
                    <div className="col s12 m6">
                        <div div id='project3' className="scrollspy">
                            <h4 className="pink-text text-lighten-2">ice candi - Multilingual Video Chat</h4>
                        </div>
                        <p>A multilingual peer-to-peer video chat application with live speech-to-text translation.</p>
                        <ul style={{ padding: "4vh 0" }}>
                            <li>• Delivered a seamless video chat experience by implementing WebRTC negotiation mechanism using the Firestore database and React web app</li>
                            <li>• Empowered users to communicate through a humanized face-to-face / audial interaction and overcome language barriers using real-time speech-to-text translation between 8 languages powered by Azure Speech Translation API</li>
                        </ul>
                        <div className='row center-align'>
                            <div className='col s4'>
                                <a className="tooltipped" data-position="bottom" data-tooltip="Website" href='https://fir-rtc-bf5c0.web.app/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon='external-link-alt' size="4x" color="black" /></a>
                                <h6 className="hide-on-large-only">Website</h6>
                            </div>
                            <div className='col s4'>
                                <a className="tooltipped" data-position="bottom" data-tooltip="Video" href='https://youtu.be/QaJl8ayN62E' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'youtube']} size="4x" color="black" /></a>
                                <h6 className="hide-on-large-only">Video</h6>
                            </div>
                            <div className='col s4'>
                                <a className="tooltipped" data-position="bottom" data-tooltip="GitHub" href='https://github.com/akimi-yano/multilingual-video-chat' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'github']} size="4x" color="black" /></a>
                                <h6 className="hide-on-large-only">GitHub</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6">
                        <img className="valign-center proj-gif" src={process.env.PUBLIC_URL + '/gifs/ic.gif'} alt='Project GIF' />
                    </div>
                </div>

                <div className="divider grey darken-1"></div>

                <div style={{flexWrap: "wrap"}} className="row valign-wrapper">
                    <div className="col s12 m6">
                        <div div id='project4' className="scrollspy">
                            <h4 className="pokemon-text">Who's That Pokémon?</h4>
                        </div>
                        <p>I built a "Who's That Pokémon?" game.</p>
                        <ul style={{ padding: "4vh 0" }}>
                            <li>• Built with JavaScript, Jquery, CSS, HTML</li>
                        </ul>
                        <div className='row center-align'>
                            <div className='col s4'>
                                <a className="tooltipped" data-position="bottom" data-tooltip="Website" href='https://akimi-yano.github.io/v1-portfolio/pokemon_guess.html' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon='external-link-alt' size="4x" color="black" /></a>
                                <h6 className="hide-on-large-only">Website</h6>
                            </div>
                            <div className='col s4'>
                                <a className="tooltipped" data-position="bottom" data-tooltip="Video" href='https://youtu.be/nFHi27qW1vQ' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'youtube']} size="4x" color="black" /></a>
                                <h6 className="hide-on-large-only">Video</h6>
                            </div>
                            <div className='col s4'>
                                <a className="tooltipped" data-position="bottom" data-tooltip="GitHub" href='https://github.com/akimi-yano/v1-portfolio/blob/master/pokemon_guess.html' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'github']} size="4x" color="black" /></a>
                                <h6 className="hide-on-large-only">GitHub</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6">
                        <img className="valign-center proj-gif" src={process.env.PUBLIC_URL + '/gifs/pokemon.gif'} alt='Project GIF' />
                    </div>
                </div>

                <div className="divider grey darken-1"></div>

                <div style={{flexWrap: "wrap"}} className="row valign-wrapper">
                    <div className="col s12 m6">
                        <div div id='project5' className="scrollspy">
                            <h4 className="yellow-text text-darken-3">Climbing Training System Analysis</h4>
                        </div>
                        <p>Analyzed data from Moon Board rock climbing training system, and identified the easiest Moon Board problems at each difficulty level using Python</p>
                        <ul style={{ padding: "4vh 0" }}>
                            <li>• Built with Python, Jupyter notebook, Anaconda</li>
                        </ul>
                        <div className='row center-align'>
                            <div className='col s4'>
                                <a className="tooltipped" data-position="bottom" data-tooltip="Report" href='https://drive.google.com/open?id=1npccW930XvvozNk889DIkrJqdSbG1_-4' target='_blank' rel='noopener noreferrer'>
                                    <FontAwesomeIcon icon='file-pdf' size='4x' color='black' />
                                </a>
                                <h6 className="hide-on-large-only">Report</h6>
                            </div>
                            <div className='col s4'>
                            </div>
                            <div className='col s4'></div>
                        </div>
                    </div>
                    <div className="col s12 m6 center-align">
                        <img style={{height: "300px", width: "auto", border: "1px solid gray"}} className="valign-center proj-gif" src={process.env.PUBLIC_URL + '/my_first_project.png'} alt='Project GIF' />
                    </div>
                </div>

                <div className="divider grey darken-1"></div>

                <div style={{flexWrap: "wrap"}} className="row valign-wrapper">
                    <div className="col s12 m6">
                        <div div id='project6' className="scrollspy">
                            <h4 className="teal-text text-darken-1">IOT Face Recognition (仮)</h4>
                        </div>
                        <p>I am building a machine learning IOT that detect and recognize face of human. Work in progress.</p>
                        <ul style={{ padding: "4vh 0" }}>
                            <li>• Building with Raspberry Pi, Python3, Open CV, NumPy, Intel Neural Compute Stick 2</li>
                        </ul>
                        <div className='row center-align'>
                            <div className='col s4'></div>
                            <div className='col s4'></div>
                            <div className='col s4'></div>
                        </div>
                    </div>
                    <div className="col s12 m6">
                        <h4 className="grey center-align white-text">under construction ... <FontAwesomeIcon icon='wrench'  color="blue"/></h4>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects
