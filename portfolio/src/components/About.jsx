import React, {useEffect} from 'react'
import $ from 'jquery'
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import ChildCareIcon from '@material-ui/icons/ChildCare';
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
    return (
        <div id='about' className='section container row'>
            <div className='row container col s12'>
                <h2 className="header raleway center-align">About Me</h2>
            </div>
            <div style={{display: 'inline-block'}}>
            <div id='abouttxtdiv' className="row container abtdiv col m12 s12">
                <ul id='abouttextanimation'>
                    <li className='abouttextscroll'>
                        <h6>Hello, my name is Akimi <ChildCareIcon/>.</h6>
                        <h6>I am a Silicon Valley based Software Engineer . I love to code <LaptopMacIcon/>. </h6>
                        <h6>What drives me in coding is my strong desire to turn ideas into reality <WbIncandescentIcon/>.</h6>
                        <h6>I have completed several projects and machine learning competition including Kaggle <WhatshotIcon/> .</h6>
                        <h6>My learning speed is something that I can be proud of, and I will keep learning new things <FlashOnIcon/>.</h6>
                    </li> 
                </ul>

            </div>
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
            
        </div>
    )
}

export default About
