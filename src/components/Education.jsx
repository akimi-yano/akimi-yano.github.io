import React from 'react'

const Education = () => {
    return (
        <div>
            <div id="education" className='full-container-title scrollspy'>
                <h2>Education</h2>
                <p className="flow-text center-align">Completed coding bootcamp, 2 masters degrees and bachelors abroad</p>
            </div>
            <div className="full-container">
                <div className="row">
                    <div className="col s12 m3 center-align">
                        <img style={{ paddingTop: "20px", height: "70px" }} src={process.env.PUBLIC_URL + '/dojo.png'}></img>
                    </div>
                    <div className="col s12 m9">
                        <h5>Coding Dojo Bootcamp</h5>
                        <h6>Triple Black Belt</h6>
                        <h6>San Jose, CA | 01/2020 - 05/2020</h6>
                        <li>Achieved Black Belt status, the highest level of knowledge achievement, on all 3 curriculums</li>
                        <li>Built, tested and deployed 3 full stack projects in Python Django, Java Spring Boot and JavaScript MERN</li>
                        <li>Consistently executed beyond the curriculum by integrating self-taught technologies that applied machine learning, computer vision, and speech translation</li>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 m3 center-align">
                        <img style={{ paddingTop: "20px", height: "70px" }} src={process.env.PUBLIC_URL + '/miis.png'}></img>
                    </div>
                    <div className="col s12 m9">
                        <h5>Middlebury Institute of International Studies at Monterey</h5>
                        <h6>Master of Public Administration (MPA)</h6> 
                        <h6>Master in International Trade and Economics</h6>
                        <h6>Monterey, CA | 08/2015 - 05/2018</h6>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 m3 center-align">
                        <img style={{ paddingTop: "20px", height: "70px" }} src={process.env.PUBLIC_URL + '/ritsumeikan.png'}></img>
                    </div>
                    <div className="col s12 m9">
                        <h5>Ritsumeikan University</h5>
                        <h6>Bachelors in International Relations</h6>
                        <h6>Kyoto, Japan | 04/2010 - 09/2014</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
