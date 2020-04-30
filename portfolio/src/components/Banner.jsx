import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const Banner = () => {
    return (
        <div id='banner' className='parallax-container'>
            <div id='parallax-zero'  >
            <div className="first_impression">
                <div class="img-container">
                    <img src="img_akimi.jpg" alt="profile_image" className="profile_img" />
                    <div className="outerring">
                        <StarBorderIcon className="ball" />
                        <FavoriteBorderIcon className="ball2" />
                    </div>
                </div>
                <div class="follow_you">
                    <h1 className="quote">"I want to be able to create anything I can imagine."<br/>『自分が思い描いたものを創れるようになりたい。』</h1>
                    <h5 className='center-align raleway banner-hidden' style={{textAlign:"left", color: 'pink'}}>Software Development | AI | Data Science</h5>
 
                </div>
            </div>
            </div>

        </div>
    )
}

export default Banner   