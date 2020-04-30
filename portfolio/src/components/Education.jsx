import React from 'react'

const Education = () => {
    return (
        <div id="education" className="section row container">
            <div className="row col s12 center-align">
                <ul>
                    <li>
                        <h2 className='header raleway'>Education</h2>
                    </li>
                    <li>
                        <h6 className='raleway tealfont'>Completed courses, certificates, degrees </h6>
                    </li>

                </ul>
            </div>
            <div>
                <ul style={{borderBottom: '3px dotted black'}}>
                    <li><h4>Coding Dojo Bootcamp | Triple Black Belt</h4></li>                                                                                                                                  
                    <li><h5>San Jose, CA | 01/2020 - 05/2020</h5></li>
                    <li><h5>• Achieved Black Belt status, the highest level of knowledge achievement, on all 3 curriculums</h5></li>
                    <li><h5>• Built, tested and deployed 3 full stack projects in Python Django, Java Spring Boot and JavaScript MERN</h5></li>
                    <li><h5>• Consistently executed beyond the curriculum by integrating self-taught technologies that applied machine learning, computer vision, and speech translation</h5></li>
                </ul>

                <ul style={{borderBottom: '3px dotted black'}}>
                    <li><h4>Middlebury Institute of International Studies at Monterey</h4></li>                                                                                                                                                                                                                      
                    <li><h4>Master of Public Administration</h4></li>  
                    <li><h4>Master in International Trade and Economics</h4></li>  
                    <li><h5>Monterey, CA | 08/2015 - 05/2018</h5></li>
                </ul>

                <ul style={{borderBottom: '3px dotted black'}}>
                    <li><h4>Ritsumeikan University</h4></li>                                                                                                                                                                                                                      
                    <li><h4>Bachelors in International Relations</h4></li>  
                    <li><h5>Kyoto, Japan | 04/2010 - 09/2014</h5></li>
                </ul>
                <ul >
                    <li><h4>Courses:</h4></li>
                    <li><h5>-Machine Learning (Udemy)</h5></li>
                </ul>
            </div>

        </div>
    )
}

export default Education
