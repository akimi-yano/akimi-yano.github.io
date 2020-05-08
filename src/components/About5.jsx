import React from 'react'
import Contributions from './Contributions.jsx'

const About5 = () => {
    return (
        <div className="full-container">
            <div style={{flexWrap: "wrap"}} className="row valign-wrapper">
                <div className="col s12 m6">
                    <h4>My life these days</h4>
                    <p className="flow-text">
                        I have been continuously coding and learning. I would like to learn more and more!</p>
                </div>
                <div style={{paddingTop: "20px"}} className="col s12 m6 center-align">
                    {/* <p>-Computer Vision / Machine Learning IoT project <br />
-Algorithm Practices  <br />
-Machine Learning / Deep Learning courses <br />
-Kaggle competition </p> */}
                    <Contributions />
                    <p class="center-align">Check out my progress on <br/>
                    <a href="https://github.com/akimi-yano" target="_blank">GitHub</a>, <a href="https://www.kaggle.com/akimiyano" target="_blank">Kaggle</a> and <a href="https://leetcode.com/codingrobot2020/" target="_blank">LeetCode</a> !</p>
                </div>
            </div>
        </div>
    )
}

export default About5
