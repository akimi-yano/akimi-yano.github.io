import React from 'react'

const Skills = () => {
    return (
        <div id='skills' className='section row container'>
            <div className="row col s12 center-align">
                <ul>
                    <li>
                        <h2 className='header raleway'>Skills</h2>
                    </li>
                    <li>
                        <h6 className='raleway tealfont'>Major skills I acquired so far:</h6>
                    </li>

                </ul>
            </div>
            <div className="techdiv row col s12 valign">
                <div id='techimgs' className='techrow row col s12 valign-wrapper'>
                    <div className='col s3 valign'>
                        <img className='techimg' src={process.env.PUBLIC_URL + '/tech2.png'} alt='' />
                    </div>
                    <div  className='col s3 valign'>
                        <img className='techimg' src={process.env.PUBLIC_URL + '/tech13.png'} alt='' />
                    </div>
                    <div className='col s3 valign'>
                        <img className='techimg' src={process.env.PUBLIC_URL + '/tech3.png'} alt='' />
                    </div>
                    <div className='col s3 valign'>
                        <img className='techimg' src={process.env.PUBLIC_URL + '/tech4.png'} alt='' />
                    </div>
                </div>
                <div className='techrow row col s12 valign-wrapper'>
                    <div className='col s3 valign'>
                        <img className='techimg' src={process.env.PUBLIC_URL + '/tech5.png'} alt='' />
                    </div>
                    <div className='col s3 valign'>
                        <img className='techimg' src={process.env.PUBLIC_URL + '/tech6.png'} alt='' />
                    </div>
                    <div className='col s3 valign'>
                        <img className='techimg' src={process.env.PUBLIC_URL + '/tech16.png'} alt='' />
                    </div>
                    <div className='col s3 valign'>
                        <img className='techimg' src={process.env.PUBLIC_URL + '/tech8.png'} alt='' />
                    </div>
                </div>
                <div className='techrow row col s12 valign-wrapper'>
                    <div className='col s3 valign'>
                        <img className='techimg' src={process.env.PUBLIC_URL + '/tech9.png'} alt='' />
                    </div>
                    <div className='col s3 valign'>
                        <img className='techimg' src={process.env.PUBLIC_URL + '/tech10.png'} alt='' />
                    </div>
                    <div className='col s3 valign'>
                        <img className='techimg' src={process.env.PUBLIC_URL + '/tech11.png'} alt='' />
                    </div>
                    <div className='col s3 valign'>
                        <img className='techimg' src={process.env.PUBLIC_URL + '/tech12.png'} alt='' />
                    </div>
                </div>
                
                <div className='techrow row col s12 valign-wrapper'>
                  
                    <div className='col s3 valign'>
                        <img className='techimg' src={process.env.PUBLIC_URL + '/tech1.png'} alt='' />
                    </div>
                    <div className='col s3 valign'>
                        <img className='techimg' src={process.env.PUBLIC_URL + '/tech14.png'} alt='' />
                    </div>
                    <div className='col s3 valign'>
                        <img className='techimg' src={process.env.PUBLIC_URL + '/tech15.png'} alt='' />
                    </div>
                    <div className='col s3 valign'>
                        <img className='techimg' src={process.env.PUBLIC_URL + '/tech7.png'} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
