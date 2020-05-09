import React from 'react'
// import Animation from './Animation.jsx'
const About2 = () => {
    return (
        <div class='full-container blue-container'>
              <div style={{flexWrap: "wrap"}} className="row valign-wrapper">
                <div className="col s12 m6 push-m6">
                <h4 className="white-text">My career as a Software Engineer</h4>
                        <p className="flow-text white-text">
                            As far as I can remember, I have always admired the potential for technology and have been interested in
                            learning more about it. After moving to Silicon Valley, I had the opportunity to meet and speak with a
                            number of tech professionals, and <span className="yellow-text">I got inspired by their ability to turn ideas into reality.</span> At the
                            same time, I started confirming the possibility of myself doing the same thing: creating things I could
                            only imagine.
                        </p>
                </div>
                <div className="col s12 m6 pull-m6 about-left black-text center-align">
                    {/* <Animation/> */}
                    <img class="blink_me" style={{marginTop: "30px", height: "auto", width: "100%", borderRadius: "2%"}} src={process.env.PUBLIC_URL + '/mountain.jpeg'} alt='journey'/>
                </div>
            </div>
          
        </div>
    )
}

export default About2
