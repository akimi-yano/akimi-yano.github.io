import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const BootcampTimeline = () => {
    return (
        <div >
            <ul class="timeline white" style={{ borderRadius: "0%", paddingTop: "1px"}}>
                <li class="event">
                    <h5 >January</h5>
                    <div style={{flexWrap: "wrap"}}class="valign-wrapper">
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech/htmlcss.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech/mysql.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech/jquery.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech/materialize.svg'}></img>
                    </div>
                </li>
                <li class="event">
                    <h5 >February</h5>
                    <div style={{flexWrap: "wrap"}}class="valign-wrapper">
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech/python.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech/opencv.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech/numpy.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech/django.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech/flask.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech/aws.png'}></img>
                    </div>
                </li>
                <li class="event">
                    <h5 >March</h5>
                    <div style={{flexWrap: "wrap"}}class="valign-wrapper">
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech/socketio.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech/mongodb.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech/expressjs.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech/react.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech/nodejs.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech/firebase.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech/webrtc.png'}></img>
                    </div>
                </li>
                <li class="event">
                    <h5>April</h5>
                    <div style={{flexWrap: "wrap"}}class="valign-wrapper">
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech/java.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech/pandas.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech/sklearn.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech/mapbox.png'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech/azure.svg'}></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={process.env.PUBLIC_URL + '/tech/pmml.png'}></img>
                    </div>
                </li>
                <li class="event"  style={{ paddingBottom: '20px' }}>
                    <h5>May</h5>
                    <p>Graduated ! <FontAwesomeIcon icon="graduation-cap" color="indigo" size="2x"/></p>
                    {/* <p>
                        Continue to My Life These Days <FontAwesomeIcon icon='hand-point-down' size='4x' color='black' />
                    </p> */}
                </li>
            </ul>
        </div>
    )
}

export default BootcampTimeline
