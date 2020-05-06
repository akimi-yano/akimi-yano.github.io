import React from 'react'

const Experience = () => {
    return (
        <div>
            <div id="experience" className='full-container-title scrollspy'>
                <h2>Experience</h2>
                <p className="flow-text center-align">Extensive work experience on data analsys</p>
            </div>
            <div className="full-container">
                <div className="row">
                    <div className="col s12 m3 center-align">
                        <img style={{ paddingTop: "20px", height: "70px" }} src={process.env.PUBLIC_URL + '/google.png'}></img>
                    </div>
                    <div className="col s12 m9">
                        <h5>Global Compliance Specialist</h5>
                        <h6>Google, LLC</h6>
                        <h6>Sunnyvale, CA | 08/2019 - 01/2020</h6>
                        <li>Shortened average supplier turnaround time (TAT) by evaluating their performance through data analysis with Google Sheets functions</li>
                        <li>Identified bottlenecks and presented actionable visualizations to key stakeholders on a monthly basis, leading to reduced operational overhead</li>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 m3 center-align">
                        <img style={{ paddingTop: "20px", height: "70px" }} src={process.env.PUBLIC_URL + '/huawei.png'}></img>
                    </div>
                    <div className="col s12 m9">
                        <h5>Global Compliance Specialist</h5>
                        <h6>Huawei Technologies, Inc.</h6>
                        <h6>Santa Clara, CA | 06/2018 - 08/2019</h6>
                        <li>Leveraged expertise to direct software / hardware engineers to comply with US and international regulations regarding hardware, software and technology</li>
                    <li>Successfully drove 100% of the company (2,000+ employees) to complete technology compliance training by using Microsoft Excel functions to track company progress and following up via automated & manual processes</li>

                    </div>
                </div>

                <div className="row">
                    <div className="col s12 m3 center-align">
                        <img style={{ paddingTop: "20px", height: "70px" }} src={process.env.PUBLIC_URL + '/un.svg'}></img>
                    </div>
                    <div className="col s12 m9">
                        <h5>Consultancy Work</h5>
                        <h6>United Nations</h6>
                        <h6>Switzerland, Rwanda, Kazakhstan, Japan | 08/2015 - 05/2018</h6>
                        <li>Engaged with government institutions across multiple countries to evaluate impact for government-funded projects</li>
                    <li>Conducted Exploratory Data Analysis (EDA) on large datasets and derived critical insights through data visualization and numerical analysis</li>
                    <li>Gave mentorship to graduate students pursuing a career at the United Nations</li>
 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
