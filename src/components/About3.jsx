import React from 'react'

const About3 = () => {
    return (
        <div className="full-container">
            <div className="row">
                <div className="col s12 m6">
                <h4>My first project</h4>
                    <p className="flow-text">
                    Eventually, I started taking coding classes online and in person and made my <span
                    class="green-text">first project</span> using Python. It was a data analysis project I
                completed by pulling data from a rock climbing training system. <span class="pink-text">It was a life changing experience.</span> I
                decided to become a Software Engineer and make more of my dream ideas come true.
                        </p>
                </div>
                <div className="col s12 m6">
                <img style={{width: "200px"}} class="first_project_pic" src="my_first_project.png" alt="my_first_project_img" />
                <p class="description">Used Python to find out which climbing problems have the highest possibility of being
                    completed for each difficulty level in climbing training system called "MoonBoard".</p>
                </div>
            </div>
        </div>

    )
}

export default About3
