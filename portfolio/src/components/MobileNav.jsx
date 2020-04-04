import React from 'react'
import $ from 'jquery'

const MobileNav = () => {
    return (
        <div>
            <ul className="side-nav blue-grey" id="mobile-demo">
                <li><p className="navlink whitefont center-align navtitle">Navigation</p></li>
                <li><div className="divider" /></li>
                <li><a className="navlink whitefont aboutbtn" href="" onClick={$('.button-collapse').sideNav('hide')}>About</a></li>
                <li><a className="navlink whitefont skillbtn" href="" onClick={$('.button-collapse').sideNav('hide')}>Skills</a></li>
                <li><a className="navlink whitefont projbtn" href="" onClick={$('.button-collapse').sideNav('hide')}>Projects</a></li>
                <li><a className="navlink whitefont contactbtn" href="" onClick={$('.button-collapse').sideNav('hide')}>Contact</a></li>
            </ul>
        </div>
    )
}

export default MobileNav
