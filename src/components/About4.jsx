import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                <div className="col s12 m6 pull-m6 about-left black-text" >
                    {/* <div style={{borderLeft: "0.5vw solid black", marginBottom:'1vh'}}>
                        <h5 style={{backgroundColor:'black', color:'white'}}>January</h5>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech1.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech14.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech17.png'}></img>
                        <h5 style={{backgroundColor:'black', color:'white'}}>February</h5>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech2.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech4.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech13.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech9.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech10.png'}></img>
                        <h5 style={{backgroundColor:'black', color:'white'}}>March</h5>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech16.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech18.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech8.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech15.png'}></img>

                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech5.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech6.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech7.png'}></img>
                        
                        <h5 style={{backgroundColor:'black', color:'white'}}>April</h5>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech3.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech12.png'}></img>
                        <h6><FontAwesomeIcon icon='hand-point-right' size='4x' color='black' />Continue to My Life These Days</h6>
                    </div>  */}



                        {/* <div class="main-container">
  <section id="timeline" class="timeline-outer">
    <div class="container" id="content">
      <div class="row">
        <div class="col s12 m12 l12">
          <ul class="timeline">
            <li class="event" data-date="January">
              <h3>Started my bootcamp</h3>
              <p>
              <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech1.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech14.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech17.png'}></img>
              </p>
            </li>
            <li class="event" data-date="February">
              <h3>Python</h3>
              <p>
              <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech2.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech4.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech13.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech9.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech10.png'}></img>
              </p>
             
            </li>
            <li class="event" data-date="March">
              <h3>MERN</h3>
              <p>
              <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech16.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech18.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech8.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech15.png'}></img>

                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech5.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech6.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech7.png'}></img>
              </p>
            </li>
            <li class="event" data-date="April">
              <h3>Java</h3>
              <p>
              <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech3.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech12.png'}></img>
              </p>
            </li>
            <li class="event" data-date="May">
              <h3>Graduated</h3>
              <p>
              <FontAwesomeIcon icon='hand-point-right' size='4x' color='black' />Continue to My Life These Days
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  
</div>       */}

<div >
<ul class="timeline white" style={{borderRadius:"0%"}}>
<li class="event" data-date="January" style={{paddingTop:'4px'}}>
                        <h5 >Web Fundamentals</h5>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech1.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech14.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech17.png'}></img>
                    </li>  
                    <li class="event" data-date="February">
                        <h5 >Python</h5>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech2.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech4.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech13.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech9.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech10.png'}></img>
                        </li> 
                    <li class="event" data-date="March">  
                        <h5 >MERN / JavaScript</h5>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech16.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech18.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech8.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech15.png'}></img>
                      
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech5.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech6.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech7.png'}></img>
                        </li> 
                    <li class="event" data-date="April">    
                        <h5>Java</h5>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech3.png'}></img>
                        <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech12.png'}></img>
        </li> 
        <li class="event" data-date="May" style={{paddingBottom:'5px'}}>
              <h5>Graduated</h5>
              <p>
              Continue to My Life These Days <FontAwesomeIcon icon='hand-point-down' size='4x' color='black' />
              </p>
            </li>
        </ul>
    </div> 
                </div>
            </div>
            </div>
    )
}

export default About4
