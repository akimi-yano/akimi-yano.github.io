import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import CopyrightIcon from '@material-ui/icons/Copyright';
import HttpIcon from '@material-ui/icons/Http';


const Contact = () => {
    return (
        <footer>
            <div id='contact' className='container center-align'>
                <div className='row'>
                    <div className='col l12 m12 s12'>
                        <h2>Contact Me</h2>
                        <h6 className='pink-text text-accent-1'>Please feel free to reach out to me:</h6>
                    </div>
                </div>
                <div className='row'>
                    <div className="col s6 m3 l3">
                        <a href='mailto:akimi.mimi.yano@gmail.com' target='_blank' rel='noopener noreferrer'>
                            <EmailIcon style={{ fontSize: '80px', color: 'black' }} />
                            <h6>Email</h6></a>
                    </div>
                    <div className="col s6 m3 l3">
                        <a href='https://linkedin.com/in/akimi-yano' target='_blank' rel='noopener noreferrer'>
                            <LinkedInIcon style={{ fontSize: '80px', color: 'black' }} />
                            <h6>LinkedIn</h6></a>
                    </div>
                    <div className="col s6 m3 l3">
                        <a href='https://github.com/akimi-yano' className='contactlink' target='_blank' rel='noopener noreferrer'>
                            <GitHubIcon style={{ fontSize: '70px', color: 'black' }} />
                            <h6>GitHub</h6></a>
                    </div>
                    <div id="imageicon" className="col s6 m3 l3"><a href='https://github.com/akimi-yano' target='_blank' rel='noopener noreferrer'>
                        <img style={{ height: '70px', color: 'black' }} src={process.env.PUBLIC_URL + '/kaggle.png'} alt='' />
                        <h6>AI Competition</h6></a>
                    </div>
                </div>
                <div className="row ">
                    <div className="col s6 m3 l3">
                        <a href='mailto:akimi.mimi.yano@gmail.com' className='contactlink' target='_blank' rel='noopener noreferrer'>
                            <HttpIcon style={{ fontSize: '80px', color: 'black' }} />
                            <h6>Animated Portfolio</h6></a>
                    </div>
                    <div className="col s6 m3 l3">

                        <a href='https://linkedin.com/in/akimi-yano' className='contactlink' target='_blank' rel='noopener noreferrer'>
                            <HttpIcon style={{ fontSize: '80px', color: 'black' }} />
                            <h6>Leetcode</h6></a>
                    </div>
                    <div className="col s6 m3 l3">
                        <a href='https://github.com/akimi-yano' className='contactlink' target='_blank' rel='noopener noreferrer'>
                            <TwitterIcon style={{ fontSize: '70px', color: 'black' }} />
                            <h6>Twitter</h6></a>
                    </div>

                    <div id="imageicon" className="col s6 m3 l3">
                        <a href='https://github.com/akimi-yano' className='contactlink' target='_blank' rel='noopener noreferrer'>
                            <img style={{ height: '60px', color: 'black' }} src={process.env.PUBLIC_URL + '/kaggle.png'} alt='' />
                            <h6>Medium</h6></a>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12">
                        © 2020 Akimi Yano
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Contact
