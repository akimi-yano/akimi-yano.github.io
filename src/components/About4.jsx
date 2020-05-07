import React from 'react'

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
                <div className="col s12 m6 pull-m6 about-left white black-text" style={{marginTop: '3vh', borderRadius: '2%'}}>
                    <h5>January</h5>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech1.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech14.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech17.png'}></img>
                    <h5>February</h5>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech2.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech4.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech9.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech10.png'}></img>
                    <h5>March</h5>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech16.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech18.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech8.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech15.png'}></img>

                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech5.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech6.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech7.png'}></img>
                    
                    <h5>April</h5>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech3.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech12.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech13.png'}></img>
                </div>
            </div>
            </div>
    )
}

export default About4
