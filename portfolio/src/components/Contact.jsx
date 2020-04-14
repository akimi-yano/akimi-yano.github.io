import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';



const Contact = () => {
    return (
        <div id='contact' className='section row container'>
            <div className='col s12 row'>
                <h2 className='header raleway center-align'>Contact Me</h2>

            </div>
            <div id='contactimgs' className='col s12 container row center-align' style={{margin:'auto'}}>
                <div className='row col s12 center-align' >
                    <div className="contactdiv col s3">
                        <a href='mailto:akimi.mimi.yano@gmail.com' className='contactlink' target='_blank' rel='noopener noreferrer'><EmailIcon className="icon_size" style={{ fontSize: '80px', color:'black'}} />
                            <h6 className='blue-grey-font contact-label center-align'>Email</h6></a>
                    </div>
                    <div className="contactdiv col s3">

                        <a href='https://linkedin.com/in/akimi-yano' className='contactlink' target='_blank' rel='noopener noreferrer'><LinkedInIcon className="icon_size" style={{ fontSize: '80px', color:'black'}} />
                            <h6 className='blue-grey-font contact-label center-align'>LinkedIn</h6></a>
                    </div>
                    <div className="contactdiv col s3">
                        <a href='https://github.com/akimi-yano' className='contactlink' target='_blank' rel='noopener noreferrer'><GitHubIcon className="icon_size" style={{ fontSize: '80px', color:'black'}} />
                            <h6 className='blue-grey-font contact-label center-align'>GitHub</h6></a>
                    </div>
                    <div className="contactdiv col s3">
                        <a href='#' className='contactlink' target='_blank' rel='noopener noreferrer'><YouTubeIcon className="icon_size" style={{ fontSize: '80px', color:'black' }} />
                            <h6 className='blue-grey-font contact-label center-align'>Youtube</h6></a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Contact
