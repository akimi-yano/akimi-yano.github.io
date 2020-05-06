import React from 'react'

const Skills = () => {
    return (
        <div>
            <div id="skills" className='full-container-title scrollspy'>
                <h3>Skills</h3>
                <p className="flow-text center-align">Major skills I acquired so far</p>
            </div>
            <div className='full-container'>
                <div className="row valign-wrapper">
                    <div className="col s12 m6 right-align">
                        <h5>Languages</h5>
                    </div>
                    <div className="col s12 m6">
                        <h6>Python, Java, JavaScript, HTML / CSS</h6>
                    </div>
                </div>
                <div className="row valign-wrapper">
                    <div className="col s12 m6 right-align">
                        <h5>Machine Learning</h5>
                    </div>
                    <div className="col s12 m6">
                        <h6>OpenCV, NumPy, Pandas, Scikit-learn, matplotlib / seaborn</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <ul>
                            <p>Machine Learning: OpenCV, NumPy, Pandas, Scikit-learn, matplotlib / seaborn</p>
                            <p>Web Servers & Frameworks: Django, Flask, Spring Boot, Node.js, Express.js, Gunicorn, Nginx, Apache Tomcat, Apache HTTP Server</p>
                            <p>Web Libraries: WebRTC, Socket.IO</p>
                            <p>Cloud Services: AWS EC2, Google Cloud Functions, Firebase, Azure Cloud Functions</p>
                            <p>Front End: ReactJS, jQuery, Axios, Bootstrap, Mapbox, Materialize, Material-UI</p>
                            <p>Databases: MongoDB, MySQL, Cloud Firestore</p>
                            <p>Software: Git, Linux</p>
                            <p>Concepts & Patterns: RESTful/CRUD, API, AJAX</p>
                            <p>Misc: Photoshop / Illustrator</p>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
