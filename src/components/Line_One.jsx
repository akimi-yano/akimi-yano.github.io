import React from 'react'

const Line_One = () => {
    return (
    <div className="parallax-container" style={{height: "auto"}}>
        <div className='parallax'><img src={process.env.PUBLIC_URL + '/bg2.jpg'} alt='lineone'/>
        </div>
    </div>
    )
}

export default Line_One
