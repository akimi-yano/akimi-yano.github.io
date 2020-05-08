import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Test = () => {
    return (
    <div>
        <div class="main-container">
  <section id="timeline" class="timeline-outer">
    <div class="container" id="content">
      <div class="row">
        <div class="col s12 m12 l12">
          <h1 class="blue-text lighten-1 header">Bootcamp Timeline</h1>
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
  
</div>      
    </div>
    )
}

export default Test
