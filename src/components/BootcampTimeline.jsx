import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const BootcampTimeline = () => {
    return (
        <div >
            <ul class="timeline white" style={{ borderRadius: "0%" }}>
                <li class="event" data-date="January" style={{ paddingTop: '4px' }}>
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
                <li class="event" data-date="May" style={{ paddingBottom: '5px' }}>
                    <h5>Graduated !</h5>
                    {/* <p>
                        Continue to My Life These Days <FontAwesomeIcon icon='hand-point-down' size='4x' color='black' />
                    </p> */}
                </li>
            </ul>
        </div>
    )
}

export default BootcampTimeline
