import React from 'react'

const About = () => {
    return (
        <div id='about' className='section container row'>
            <div className='row container col s12'>
                <h2 className="header raleway center-align">About Me</h2>
            </div>
            <div id='abouttxtdiv' className="row container abtdiv col m12 s12">
                <ul id='abouttextanimation'>
                    <li className='abouttextscroll'>
                        
                        <h6>Hello, my name is Akimi, and I am a Software Engineer in Silicon Valley, California. I love to code. In my spare time, I enjoy going <span
                        class="rock_climbing">rock climbing</span> and traveling to learn new <span
                        class="foreign_languages">foreign languages</span>.</h6>
                        
                        <h6>What drives me in coding is my strong desire to turn ideas into reality - creating things I could only imagine through the use of technology.</h6>
                    </li> 
                </ul>

            </div>
            {/* <div id='aboutpictures' className="row container abtdiv col m12 s12 center-block">
                <div className="col m3 s6 abtpicdiv">
                    <img className='about-picture materialboxed center-block' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/profile.png' alt='profile' />
                </div>
                <div className="col m3 s6 abtpicdiv">
                    <img className='about-picture materialboxed center-block' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/dance.jpg' alt='dance' />
                </div>
                <div className="col m3 s6 abtpicdiv">
                    <img className='about-picture materialboxed center-block' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/code.png' alt='code' />
                </div>
                <div className="col m3 s6 abtpicdiv">
                    <img className='about-picture materialboxed center-block' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/controller.jpg' alt='controller' />
                </div>
            </div> */}
        </div>
    )
}

export default About
