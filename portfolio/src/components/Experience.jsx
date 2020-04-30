import React from 'react'

const Experience = () => {
    return (
            <div id="experience" className="section row container">
            <div className="row col s12 center-align">
                <ul>
                    <li>
                        <h2 className='header raleway'>Experience</h2>
                    </li>
                    <li>
                        <h6 className='raleway tealfont'>Extensive work experience on data analsys </h6>
                    </li>

                </ul>
            </div>
            <div>
                <ul style={{borderBottom: '3px dotted black'}}>
                    <li><h4>Global Compliance Specialist | Google, LLC</h4></li>
                    <li><h5>Sunnyvale, CA | 09/2019 - 01/2020</h5></li>
                    <li><h5>• Shortened average supplier turnaround time (TAT) by evaluating their performance through data analysis with Google Sheets functions</h5></li>
                    <li><h5>• Identified bottlenecks and presented actionable visualizations to key stakeholders on a monthly basis, leading to reduced operational overhead</h5></li>
                </ul>   

                <ul style={{borderBottom: '3px dotted black'}}>
                    <li><h4>Global Compliance Specialist | Huawei Technologies, Inc.</h4></li>
                    <li><h5>Santa Clara, CA | 06/2018 - 09/2019</h5></li>
                    <li><h5>• Leveraged expertise to direct software / hardware engineers to comply with US and international regulations regarding hardware, software and technology</h5></li>
                    <li><h5>• Successfully drove 100% of the company (2,000+ employees) to complete technology compliance training by using Microsoft Excel functions to track company progress and following up via automated & manual processes</h5></li>
                </ul>

                <ul >
                    <li><h4>Consultancy Work | United Nations</h4></li>
                    <li><h5>Switzerland, Rwanda, Kazakhstan, Japan | 08/2015 - 05/2018</h5></li>
                    <li><h5>• Engaged with government institutions across multiple countries to evaluate impact for government-funded projects</h5></li>
                    <li><h5>• Conducted Exploratory Data Analysis (EDA) on large datasets and derived critical insights through data visualization and numerical analysis</h5></li>
                    <li><h5>• Gave mentorship to graduate students pursuing a career at the United Nations</h5></li>
                </ul>
            </div>
        </div>
    )
}

export default Experience
