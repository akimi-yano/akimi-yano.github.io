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
                            I want to do more and more exciting projects!
            </h6>
                    </li>
                </ul>
            </div>
            <ul id='project1animation'>
                <li className='projscroll'>
                    <div id='project1' className='row col s12'>
                        <div className='row col s12'>
                            <h3 className='tealfont raleway projtitle'>Face Labo</h3>
                        </div>
                        <div className='projdiv row col m6 s12'>

                            <h6 className='raleway projtext'>
                            I built a machine learning web application that allows users to upload images and videos of faces to experience face recognition technology. It can detect face, shape, parts, blink, wink, sleepiness and show different png images depending on the findings.
                </h6>
                            <h6 className='raleway projtext'>
                            Built with Python3, Django, Open CV, NumPy
                </h6>
                            <div className='row'>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><GitHubIcon className="icon_size"  style={{ fontSize: '70px', color:'black' }}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>GitHub</h6>
                                </div>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><WebIcon className="icon_size"  style={{ fontSize: '70px', color:'black' }}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>Website</h6>
                                </div>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><YouTubeIcon className="icon_size"  style={{ fontSize: '70px', color:'black' }}/></a>
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
            <ul id='project2animation'>
                <li className='projscroll'>
                    <div id='project2' className='row col s12'>
                        <div className='row col s12'>
                            <h3 className='tealfont raleway projtitle'>ice candi</h3>
                        </div>
                        <div className='projdiv row col m6 s12'>
                            <h6 className='raleway projtext'>
                            I built a peer-to-peer multi-lingual video chat webapp. A user can connect with another peer and communicate in different languages using the voice translation feature.
                </h6>
                            <h6 className='raleway projtext'>
                            Built with React, Material UI, Web RTC, Firebase/Firestore, Azure Cloud Functions, Azure Speech Translation API, Web Speech API, Leaflet, Mapbox, Illustrator and Photoshop
                </h6>
                            <div className='row'>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><GitHubIcon className="icon_size"  style={{ fontSize: '70px', color:'black'}}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        GitHub
                    </h6>
                                </div>
                                <div className='col s3'>
                                    <a href='http://leforge.co' target='_blank' rel='noopener noreferrer'><WebIcon className="icon_size"  style={{ fontSize: '70px', color:'black' }}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        Website
                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className='projdiv container row col m6 s12 valign-wrapper'>
                            <img className='projgif valign materialboxed' src="https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/mapshare.gif" alt='project2gif' />
                        </div>
                    </div>
                </li>
            </ul>
            <ul id='project3animation'>
                <li className='projscroll'>
                    <div id='project3' className='row col s12'>
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
                                    <a href='#' target='_blank' rel='noopener noreferrer'><GitHubIcon className="icon_size"  style={{ fontSize: '70px', color:'black'}}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        GitHub
                    </h6>
                                </div>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><WebIcon className="icon_size"  style={{ fontSize: '70px', color:'black' }}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        Website
                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className='projdiv container row col m6 s12 valign-wrapper'>
                            <img className='projgif valign materialboxed' src="https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/mapshare.gif" alt='project3gif' />
                        </div>
                    </div>
                </li>
            </ul>
            <ul id='project4animation'>
                <li className='projscroll'>
                    <div id='project4' className='row col s12'>
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
                                    <a href='#' target='_blank' rel='noopener noreferrer'><GitHubIcon className="icon_size" style={{ fontSize: '70px', color:'black' }}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        GitHub
                    </h6>
                                </div>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><WebIcon className="icon_size" style={{ fontSize: '70px', color:'black' }}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        Website
                    </h6>
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
