import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Banner = () => {
    return (
        <div>
            <div id='banner' className='parallax-container center-align' style={{ height: 'auto' }}>
                <div id='parallax-zero'  >
                    <div className="row">
                        <div className="col s12 m6">
                            <div class="img-container">
                                <img src="img_akimi.jpg" alt="profile_image" className="profile_img" />
                                <div className="outerring">
                                    <div className="ball"><FontAwesomeIcon icon="star" /></div>
                                    <div className="ball2"><FontAwesomeIcon icon="heart" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m6 valign-wrapper banner-text">
                            <div className="container">
                                <h4 className="flow-text white-text">"I want to be able to create anything I can imagine."<br />『自分が思い描いたものを創れるようになりたい。』</h4>
                                <h6 className="flow-text pink-text text-lighten-4">Software Engineer | Computer Vision | Machine Learning | Data Science</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner   