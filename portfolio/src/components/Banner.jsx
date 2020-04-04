import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const Banner = () => {
    return (
        <div id='banner' className='parallax-container'>
            
                    <div style={{zIndex:'2', position: 'absolute'}} class="first_impression">
                        <div class="img-container">
                            <img src="img_akimi.jpg" alt="profile_image" class="profile_img"/>
                                <div class="outerring">
                                    <StarBorderIcon className="ball"/>
                                    <FavoriteBorderIcon className="ball2"/>
                                </div>
            </div>
                            <div class="follow_you">
                                <h1  class="quote">『自分が思い描いたものを創れるようになりたい。』 </h1>
                                <h1 class="quote">"I want to be able to create anything I can imagine."</h1>
                <h3 id='name' className='whitefont center-align raleway banner-hidden'>Akimi Yano</h3>
                    <h3 id='title' className='center-align raleway banner-hidden'>Software Engineer</h3>
            </div>
                            </div>
            
            <div id='parallax-zero' className="parallax-container">

            </div>
            {/* <div>
                <img src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/IMG_2635.JPG' alt='banner' />
            </div> */}
        </div>
    )
}

export default Banner   