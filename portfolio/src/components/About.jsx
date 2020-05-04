import React, { useEffect } from 'react'
import $ from 'jquery'

import About2 from './About2.jsx'
import About3 from './About3.jsx'
import About4 from './About4.jsx'
import About5 from './About5.jsx'
const About = () => {
    useEffect(() => {
        // let max = 7
        let current = 0
        let previous = 7
        for (let i = 1; i < 8; i++) {
            $('#pic' + i).hide()
        }
        setInterval(function () {
            if (current == 7) {
                current = 0
                previous = 7
            } else {
                current += 1
                previous = current - 1
            }
            $('#pic' + previous).hide()
            $('#pic' + current).fadeIn(800)
            $('#mark' + current).addClass("marked")
            $('#mark' + previous).removeClass("marked");

        }, 5800)
    })
    useEffect(() => {
        var climbing_info = false;
        if (climbing_info == false) {
            $('.climbing').hide();
        };
        $('.rock_climbing').hover(function () {
            $('.climbing').toggle();
        });

        var language_info = false;
        if (language_info == false) {
            $('.languages').hide();
        }
        $('.foreign_languages').hover(function () {
            $('.languages').toggle();
        })

        var first_project_info = false;
        if (first_project_info == false) {
            $('.first_project').hide();
        };
        if (first_project_info == false) {
            $('.description').hide();
        };

        $('.my_first_project').hover(function () {
            $('.first_project').fadeIn();
            $('.description').fadeIn();
        });


        var progress_info = false;
        if (progress_info == false) {
            $('.progress').hide();
        }
        $('.progress_matrix').hover(function () {
            $('.progress').slideDown();
        })

        var project_info = false;
        if (project_info == false) {
            $('.project').hide();
        }
        $('.working_projects').hover(function () {
            $('.project').fadeIn();
        })
        $('#contact-link').click(function (e) {
            // e.preventDefault();
            window.scrollTo({
                top: $('#contact').offset().top,
                left: 0,
                behavior: 'smooth'
            })
        })
        $('.invisible-button').click(function () {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        })
    }, [])

    return (
        <div id='about' className="container">
            <div className='row col s12'>
                <h2 className="header raleway center-align">About Me</h2>
            </div>
            <div style={{ display: 'inline-block' }}>
                <div id='abouttxtdiv' className="row container abtdiv col m12 s12">
                    <ul id='abouttextanimation'>
                        <li >
                            <h6>Hello, my name is Akimi, and I am a Silicon Valley based Software Engineer.</h6>
                          
                            <h6>I love to focus and code.</h6>
                
                            <h6>I am passionate about driving Computer Vision / Machine Learning project ideas into reality. (visually show CV projects and kaggle competition)</h6>
                      
                            <h6>In my spare time, I enjoy learning new foreign languages and rock climbing. (visually show climbing and language learning)</h6>
                           
                        </li>
                    </ul>

                </div>
                     

                <div>
                    {/* <div class="main">
                        <div class="summary">
                            <h2>About me</h2>
                            <h3>Hello, my name is Akimi, and I am a Software Engineer Silicon Valley, California. I love to code. In my spare time, I enjoy going <span
                                class="rock_climbing">rock climbing</span> and traveling to learn new <span
                                    class="foreign_languages">foreign languages</span>.</h3>
                        </div>
                        <div class="climbing">
                            <p>Climbing in progress ...</p>
                            <img src="climbing_graph.jpg" alt="climbing_graph" />
                        </div>
                        <div class="languages">
                            <p>Language learning in progress ...</p>
                            <img src="languages_map.png" alt="languages_map" />
                        </div>
                    </div> */}
                    <div class="past_experience">
                        <div className='row container col s12'>
                        </div>

                        <div className="row container abtdiv col m12 s12">
                            <div style={{ display: 'inline-block' }} class="previous">
                                <ul>
                                    <li><h2>My career as a Software Engineer</h2></li>
                                    <li><h3>As far as I can remember, I have always admired the potential for technology and have been interested in
                                    learning more about it. After moving to Silicon Valley, I had the oppportunity to meet and speak with a
                number of tech professionals, and <span>I got inspired by their ability to turn ideas into reality.</span> At the
                same time, I started confirming the possibility of myself doing the same thing: creating things I could
                only imagine.</h3></li>
                                </ul>
                            </div>
                            <div style={{ display: 'inline-block' }}>
                                <div class="images">
                                    <img style={{ width: '40%', height: 'auto', marginLeft: "100px" }} src={process.env.PUBLIC_URL + '/images/0.jpg'} alt="" id="pic0" class="carousel" />
                                    <img style={{ width: '40%', height: 'auto', marginLeft: "100px" }} src={process.env.PUBLIC_URL + '/images/1.jpg'} alt="" id="pic1" class="carousel hidden" />
                                    <img style={{ width: '40%', height: 'auto', marginLeft: "100px" }} src={process.env.PUBLIC_URL + '/images/2.jpg'} alt="" id="pic2" class="carousel hidden" />
                                    <img style={{ width: '40%', height: 'auto', marginLeft: "100px" }} src={process.env.PUBLIC_URL + '/images/3.jpg'} alt="" id="pic3" class="carousel hidden" />
                                    <img style={{ width: '40%', height: 'auto', marginLeft: "100px" }} src={process.env.PUBLIC_URL + '/images/4.jpg'} alt="" id="pic4" class="carousel hidden" />
                                    <img style={{ width: '40%', height: 'auto', marginLeft: "100px" }} src={process.env.PUBLIC_URL + '/images/5.jpg'} alt="" id="pic5" class="carousel hidden" />
                                    <img style={{ width: '40%', height: 'auto', marginLeft: "100px" }} src={process.env.PUBLIC_URL + '/images/6.jpg'} alt="" id="pic6" class="carousel hidden" />
                                    <img style={{ width: '40%', height: 'auto', marginLeft: "100px" }} src={process.env.PUBLIC_URL + '/images/7.jpg'} alt="" id="pic7" class="carousel hidden" />
                                </div>
                                <div class="markers" style={{ width: '40%', height: 'auto', float: "right" }}>
                                    <div id="mark0" class="marker marked"></div>
                                    <div id="mark1" class="marker"></div>
                                    <div id="mark2" class="marker"></div>
                                    <div id="mark3" class="marker"></div>
                                    <div id="mark4" class="marker"></div>
                                    <div id="mark5" class="marker"></div>
                                    <div id="mark6" class="marker"></div>
                                    <div id="mark7" class="marker"></div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
                <div class="project_experience">
                    <div class="past_project">
                        <h2>My first project</h2>
                        <h3>Eventually, I started taking coding classes online and in person and made my <span
                            class="my_first_project">first project</span> using Python. It was a data analysis project I
                completed by pulling data from a rock climbing training system. <span class="life_change">It was a life changing experience.</span> I
                decided to become a Software Engineer and make more of my dream ideas come true.</h3>
                    </div>
                    <div class="first_project">
                        <img class="first_project_pic" src="my_first_project.png" alt="my_first_project_img" />
                        <p class="description">Used Python to find out which climbing problems have the highest possibility of being
                    completed for each difficulty level in climbing training system called "MoonBoard".</p>
                    </div>

                </div>

                <div class="now">
                    <div class="current">
                        <div class="bootcamp">
                            <h2>My coding bootcamp training</h2>
            After thorough reflections, I made a decision to join an immersive coding bootcamp at Coding Dojo.

During 15 weeks of my bootcamp period, I intensively coded, searched, read, and coded more.

Here is my progress matrix during bootcamp:
# of hours coded:	Too many
# of lines committed on Github:	Lost Count
Average # of coffees consumed:	Over 5  Per Day
# of Black Belt obtained: In All Domains !

*Black Belt is the highest level of achievement in knowledge and skills at Coding Dojo

            <h3>Here is my <span
                                class="progress_matrix">progress matrix</span>:</h3>
                        </div>
                        <div class="progress">
                            <table>
                                <tbody>
                                    <tr>
                                        <td class="right-align-me"># of weeks in bootcamps:</td>
                                        <td>2 Weeks</td>
                                    </tr>
                                    <tr>
                                        <td class="right-align-me"># of hours coded:</td>
                                        <td>Too many</td>
                                    </tr>
                                    <tr>
                                        <td class="right-align-me"># of lines committed on Github:</td>
                                        <td>Lost Count</td>
                                    </tr>
                                    <tr>
                                        <td class="right-align-me">Aquired skills:</td>
                                        <td>$(jQuery), MySQL, JavaScript, Python:, CSS, HTML</td>
                                    </tr>
                                    <tr>
                                        <td class="right-align-me"># of coffees consumed:</td>
                                        <td>Over 5 <i class="fas fa-mug-hot"></i> Per Day</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>My life these days (white)</p>
                    </div>
                </div>

            </div>

            <About2 />
            <About3 />
            <About4 />
            <About5 />
        </div>
    )
}

export default About
