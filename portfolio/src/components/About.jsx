import React, {useEffect} from 'react'
import $ from 'jquery'
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import CodeIcon from '@material-ui/icons/Code';
const About = () => {
    useEffect(() => {
        // let max = 7
        let current = 0
        let previous = 7
        for(let i = 1; i < 8; i++) {
            $('#pic' + i).hide()
        }
        setInterval(function(){
            if(current == 7) {
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
    
        },5800)
    })
    useEffect(()=>{
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
        $('.invisible-button').click(function() {
            window.scrollTo({
                top:0,
                left:0,
                behavior:'smooth'
            })
        })
    },[])
   
    return (
        <div id='about' className='section container row'>
            <div className='row container col s12'>
                <h2 className="header raleway center-align">About Me</h2>
            </div>
            <div style={{display: 'inline-block'}}>
            <div id='abouttxtdiv' className="row container abtdiv col m12 s12">
                <ul id='abouttextanimation'>
                    <li >
                        {/* <div className="css-typing"> */}
                        <h6>Hello, my name is Akimi<ChildCareIcon style={{color:'rgb(214, 113, 130)'}}/>.</h6>
                        {/* </div>
                        <div className="typing2"> */}
                        <h6>I am a Silicon Valley based Software Engineer <CodeIcon style={{color:'purple'}}/>. </h6>
                        {/* </div>
                        <div className="typing3"> */}
                        <h6>I love to code <LaptopMacIcon style={{color:'red'}}/>. </h6>
                        {/* </div>
                        <div className="typing4"> */}
                        <h6>What drives me in coding is my strong desire to turn ideas into reality <WbIncandescentIcon style={{color:'green'}}/>.</h6>
                        {/* </div>
                        <div className="typing5"> */}
                        <h6>I have completed several projects and machine learning competition including Kaggle <WhatshotIcon style={{color:'blue'}}/> .</h6>
                        {/* </div>
                        <div className="typing6"> */}
                        <h6>My learning speed is something that I can be proud of, and I will keep learning new things <FlashOnIcon style={{color:'orange'}}/>.</h6>
                        {/* </div> */}
                    </li> 
                </ul>

            </div>
          
            {/* <div id='aboutpictures' className="row container abtdiv col m12 s12 center-block">
                <div className="col m3 s6 abtpicdiv">
                    <img className='about-picture materialboxed center-block' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/profile.png' alt='profile' />
                </div>
                <div className="col m3 s6 abtpicdiv">
                    <img className='about-picture materialboxed center-block' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/dance.jpg' alt='dance' />
                </div>
                <div className="col m3 s6 abtpicdiv">
                    <img className='about-picture materialboxed center-block' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/code.png' alt='code' />
                </div>
                <div className="col m3 s6 abtpicdiv">
                    <img className='about-picture materialboxed center-block' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/controller.jpg' alt='controller' />
                </div>
            </div> */}
            <div>
            <div class="main">
                <div class="summary">
                <h2>About me</h2>
                <h3>Hello, my name is Akimi, and I am a Software Engineer Silicon Valley, California. I love to code. In my spare time, I enjoy going <span
                        class="rock_climbing">rock climbing</span> and traveling to learn new <span
                        class="foreign_languages">foreign languages</span>.</h3>
                </div>
                <div class="climbing">
                    <p>Climbing in progress ...</p>
                    <img src="climbing_graph.jpg" alt="climbing_graph"/>
                </div>
                <div class="languages">
                    <p>Language learning in progress ...</p>
                    <img src="languages_map.png" alt="languages_map"/>
                </div>
            </div>
            <div class="past_experience">

            <div  class="images">
                <img style={{width: '40%', height: 'auto', marginLeft: "100px"}} src={process.env.PUBLIC_URL + '/images/0.jpg'} alt="" id="pic0" class="carousel"/>
                <img style={{width: '40%', height: 'auto', marginLeft: "100px"}} src={process.env.PUBLIC_URL + '/images/1.jpg'}  alt="" id="pic1" class="carousel hidden"/>
                <img style={{width: '40%', height: 'auto', marginLeft: "100px"}} src={process.env.PUBLIC_URL + '/images/2.jpg'} alt="" id="pic2" class="carousel hidden"/>
                <img style={{width: '40%', height: 'auto', marginLeft: "100px"}} src={process.env.PUBLIC_URL + '/images/3.jpg'}  alt="" id="pic3" class="carousel hidden"/>
                <img style={{width: '40%', height: 'auto', marginLeft: "100px"}} src={process.env.PUBLIC_URL + '/images/4.jpg'}  alt="" id="pic4" class="carousel hidden"/>
                <img style={{width: '40%', height: 'auto', marginLeft: "100px"}} src={process.env.PUBLIC_URL + '/images/5.jpg'}  alt="" id="pic5" class="carousel hidden"/>
                <img style={{width: '40%', height: 'auto', marginLeft: "100px"}} src={process.env.PUBLIC_URL + '/images/6.jpg'}  alt="" id="pic6" class="carousel hidden"/>
                <img style={{width: '40%', height: 'auto', marginLeft: "100px"}} src={process.env.PUBLIC_URL + '/images/7.jpg'}  alt="" id="pic7" class="carousel hidden"/>
            </div>
            <div class="markers" style={{width: '40%', height: 'auto', float: "right"}}>
                        <div id="mark0" class="marker marked"></div>
                        <div id="mark1" class="marker"></div>
                        <div id="mark2" class="marker"></div>
                        <div id="mark3" class="marker"></div>
                        <div id="mark4" class="marker"></div>
                        <div id="mark5" class="marker"></div>
                        <div id="mark6" class="marker"></div>
                        <div id="mark7" class="marker"></div>
            </div>
            
            
            <div class="previous">
                <h2>My career as a Software Engineer</h2>
                <h3>As far as I can remember, I have always admired the potential for technology and have been interested in
                learning more about it. After moving to Silicon Valley, I had the oppportunity to meet and speak with a
                number of tech professionals, and <span>I got inspired by their ability to turn ideas into reality.</span> At the
                same time, I started confirming the possibility of myself doing the same thing: creating things I could
                only imagine.</h3>
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
            <img class="first_project_pic" src="my_first_project.png" alt="my_first_project_img"/>
            <p class="description">Used Python to find out which climbing problems have the highest possibility of being
                    completed for each difficulty level in climbing training system called "MoonBoard".</p>
            </div>
            
    </div>

    <div class="now">
        <div class="current">
            <div class="bootcamp">  
            <h2>My life these days</h2>
            <h3>Hey, I am currently attending an intensive coding bootcamp at Coding Dojo. Here is my <span
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
        </div>
    </div>
    
    </div>
        </div>
    )
}

export default About
