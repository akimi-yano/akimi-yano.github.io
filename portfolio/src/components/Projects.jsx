import React from 'react'
import WebIcon from '@material-ui/icons/Web';
import GitHubIcon from '@material-ui/icons/GitHub';

const Projects = () => {
    return (
        <div id='projects' className='section row container'>
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
            <ul id='getoutanimation'>
                <li className='projscroll'>
                    <div id='project1' className='row col s12'>
                        <div className='row col s12'>
                            <h3 className='tealfont raleway projtitle'>Face Labo</h3>
                        </div>
                        <div className='projdiv row col m6 s12'>

                            <h6 className='raleway projtext'>
                                description
                </h6>
                            <h6 className='raleway projtext'>
                                built with
                </h6>
                            <div className='row'>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><GitHubIcon style={{ fontSize: '70px', color:'black' }}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>GitHub</h6>
                                </div>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><WebIcon style={{ fontSize: '70px', color:'black' }}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        Website
                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className='projdiv container row col m6 s12 valign-wrapper'>
                            <img className='projgif valign materialboxed' src='#' alt='project1gif' />
                        </div>
                    </div>
                </li>
            </ul>
            <ul id='forgeanimation'>
                <li className='projscroll'>
                    <div id='project2' className='row col s12'>
                        <div className='row col s12'>
                            <h3 className='tealfont raleway projtitle'>ice candi</h3>
                        </div>
                        <div className='projdiv row col m6 s12'>
                            <h6 className='raleway projtext'>
                                description
                </h6>
                            <h6 className='raleway projtext'>
                                built with
                </h6>
                            <div className='row'>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><GitHubIcon style={{ fontSize: '70px', color:'black'}}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        GitHub
                    </h6>
                                </div>
                                <div className='col s3'>
                                    <a href='http://leforge.co' target='_blank' rel='noopener noreferrer'><WebIcon style={{ fontSize: '70px', color:'black' }}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        Website
                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className='projdiv container row col m6 s12 valign-wrapper'>
                            <img className='projgif valign materialboxed' src='#' alt='project2gif' />
                        </div>
                    </div>
                </li>
            </ul>
            <ul id='mapshareanimation'>
                <li className='projscroll'>
                    <div id='project3' className='row col s12'>
                        <div className='row col s12'>
                            <h3 className='tealfont raleway projtitle'>Guess Pokemon</h3>
                        </div>
                        <div className='projdiv row col m6 s12'>

                            <h6 className='raleway projtext'>
                                description
                </h6>
                            <h6 className='raleway projtext'>
                                built with
                </h6>
                            <div className='row'>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><GitHubIcon style={{ fontSize: '70px', color:'black'}}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        GitHub
                    </h6>
                                </div>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><WebIcon style={{ fontSize: '70px', color:'black' }}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        Website
                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className='projdiv container row col m6 s12 valign-wrapper'>
                            <img className='projgif valign materialboxed' src='#' alt='project3gif' />
                        </div>
                    </div>
                </li>
            </ul>
            <ul id='iosanimation'>
                <li className='projscroll'>
                    <div id='project4' className='row col s12'>
                        <div className='row col s12'>
                            <h3 className='tealfont raleway projtitle'>Climbing Training System Analysis</h3>
                        </div>
                        <div className='projdiv row col m6 s12'>
                            <h6 className='raleway projtext'>
                                description
                </h6>
                            <h6 className='raleway projtext'>
                                built with
                </h6>
                            <div className='row'>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><GitHubIcon style={{ fontSize: '70px', color:'black' }}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        GitHub
                    </h6>
                                </div>
                                <div className='col s3'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><WebIcon style={{ fontSize: '70px', color:'black' }}/></a>
                                    <h6 className='project-link-label blue-grey-font center-align'>
                                        Website
                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className='projdiv container row col m6 s12 valign-wrapper'>
                            <div className='col s6'>
                                <img className='iosimg materialboxed' src='#' alt='project4gif' />
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Projects
