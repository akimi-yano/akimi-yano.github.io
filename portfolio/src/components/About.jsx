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
                        <h3>Summary</h3>
                        <h6>Hello, my name is Akimi, and I am a Software Engineer Silicon Valley, California. I love to code. In my spare time, I enjoy going <span
                        class="rock_climbing">rock climbing</span> and traveling to learn new <span
                        class="foreign_languages">foreign languages</span>.</h6>
        
                    </li>
                    <li className='abouttextscroll'>
                    <h3>My career as a Software Engineer</h3>
                        <h6>As far as I can remember, I have always admired the potential for technology and have been interested in
                learning more about it. After moving to Silicon Valley, I had the oppportunity to meet and speak with a
                number of tech professionals, and <span>I got inspired by their ability to turn ideas into reality.</span> At the
                same time, I started confirming the possibility of myself doing the same thing: creating things I could
                only imagine.</h6>
                    </li>

                    <li className='abouttextscroll'>
                    <h3>My first project</h3>
                        <h6>Eventually, I started taking coding classes online and in person and made my <span
                    class="my_first_project">first project</span> using Python. It was a data analysis project I
                completed by pulling data from a rock climbing training system. <span class="life_change">It was a life changing experience.</span> I
                decided to become a Software Engineer and make more of my dream ideas come true.</h6>
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
