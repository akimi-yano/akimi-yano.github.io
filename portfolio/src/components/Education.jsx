import React from 'react'

const Education = () => {
    return (
        <div id="education" className="full-container scrollspy">
            <div className="row col s12 center-align">
                <ul>
                    <li>
                        <h2 className='center-align'>Education</h2>
                    </li>
                    <li>
                        <h6 className='center-align'>Completed courses, certificates, degrees </h6>
                    </li>

                </ul>
            </div>
            <div>
                <ul style={{borderBottom: '3px dotted black'}}>
                    <li><h4 className="flow-text">Coding Dojo Bootcamp | Triple Black Belt</h4></li>                                                                                                                                  
                    <li><h5 className="flow-text">San Jose, CA | 01/2020 - 05/2020</h5></li>
                    <li><h5 className="flow-text">• Achieved Black Belt status, the highest level of knowledge achievement, on all 3 curriculums</h5></li>
                    <li><h5 className="flow-text">• Built, tested and deployed 3 full stack projects in Python Django, Java Spring Boot and JavaScript MERN</h5></li>
                    <li><h5 className="flow-text">• Consistently executed beyond the curriculum by integrating self-taught technologies that applied machine learning, computer vision, and speech translation</h5></li>
                </ul>

                <ul style={{borderBottom: '3px dotted black'}}>
                    <li><h4 className="flow-text">Middlebury Institute of International Studies at Monterey</h4></li>                                                                                                                                                                                                                      
                    <li><h4 className="flow-text">Master of Public Administration</h4></li>  
                    <li><h4 className="flow-text">Master in International Trade and Economics</h4></li>  
                    <li><h5 className="flow-text">Monterey, CA | 08/2015 - 05/2018</h5></li>
                </ul>

                <ul style={{borderBottom: '3px dotted black'}}>
                    <li><h4 className="flow-text">Ritsumeikan University</h4></li>                                                                                                                                                                                                                      
                    <li><h4 className="flow-text">Bachelors in International Relations</h4></li>  
                    <li><h5 className="flow-text">Kyoto, Japan | 04/2010 - 09/2014</h5></li>
                </ul>
               
            </div>

        </div>
    )
}

export default Education
