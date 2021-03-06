import React, { useEffect } from 'react'
import $ from 'jquery'

const About1 = () => {
    useEffect(() => {
        let current = 0
        let previous = 3
        for (let i = 1; i < 4; i++) {
            $('#pic' + i).hide()
        }
        let interval = setInterval(function () {
            if (current == 3) {
                current = 0
                previous = 3
            } else {
                current += 1
                previous = current - 1
            }
            $('#pic' + previous).hide()
            $('#pic' + current).fadeIn(800)
            $('#mark' + current).addClass("marked")
            $('#mark' + previous).removeClass("marked");
            $('#text' + current).addClass("highlight")
            $('#text' + previous).removeClass("highlight")

        }, 2000)

        return () => clearInterval(interval);
    }, [])

    return (
        <div id='about' className="full-container scrollspy">
            <div style={{flexWrap: "wrap"}} className="row valign-wrapper">
                <div className="col s12 m6">
                    <h3 className="center-align">About Me</h3>
                    <p className="flow-text">Software Engineer based in Silicon Valley. I love to focus and code.</p>
                    <p className="flow-text">I am passionate about driving <span className="highlight" id="text0">Computer Vision</span> / <span id="text1">Machine Learning</span> project ideas into reality. In my spare time, I enjoy <span id="text2">learning foreign languages</span> and <span id="text3">rock climbing</span>.</p>
                </div>
                <div style={{paddingTop: "20px"}} className="col s12 m6 center-align">
                        <img style={{height: 'auto', width: "300px", maxWidth: "100%", borderRadius: "2%"}} src={process.env.PUBLIC_URL + '/intro/intro1.jpg'} alt="" id="pic0" class="carousel" />
                        <img style={{height: 'auto', width: "300px", maxWidth: "100%", borderRadius: "2%"}} src={process.env.PUBLIC_URL + '/intro/intro2.jpg'} alt="" id="pic1" class="carousel hidden" />
                        <img style={{height: 'auto', width: "300px", maxWidth: "100%", borderRadius: "2%"}} src={process.env.PUBLIC_URL + '/intro/intro3.jpg'} alt="" id="pic2" class="carousel hidden" />
                        <img style={{height: 'auto', width: "300px", maxWidth: "100%", borderRadius: "2%"}} src={process.env.PUBLIC_URL + '/intro/intro4.jpg'} alt="" id="pic3" class="carousel hidden" />
                    <div class="markers">
                        <div id="mark0" class="marker marked"></div>
                        <div id="mark1" class="marker"></div>
                        <div id="mark2" class="marker"></div>
                        <div id="mark3" class="marker"></div>
                    </div>
                    {/* <div style={{marginTop: "25px", borderRadius: "5%"}} className="carousel light-blue darken-1">
                        <div className="carousel-item">
                        <img style={{height: "auto"}} src={process.env.PUBLIC_URL + '/carousel1.png'}/>
                        </div>
                        <img style={{height: "auto"}} className="carousel-item" src={process.env.PUBLIC_URL + '/languages_map.png'}/>
                        <img style={{height: "auto"}} className="carousel-item" src={process.env.PUBLIC_URL + '/climbing_graph.jpg'}/>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default About1
