import React from 'react'

const MobileNav = () => {
    return (
        <div className="container">
            <ul id="nav-mobile" className="sidenav">
                <li><p className="navlink whitefont center-align navtitle">Navigation</p></li>
                <li><div className="divider" /></li>
                <li><a href="#about">About</a></li>
                <li class="no-padding">
                    <ul className="collapsible collapsible-accordion">
                        <li className="bold"><a href="#projecttitle" className="collapsible-header" style={{padding: "0 32px"}}>Projects</a>
                            <div className="collapsible-body">
                                <ul>
                                    <li><a href="#project1" style={{padding: "0 48px"}}>1. Coronavirus Prediction</a></li>
                                    <li><a href="#project2" style={{padding: "0 48px"}}>2. Face Labo</a></li>
                                    <li><a href="#project3" style={{padding: "0 48px"}}>3. ice candi</a></li>
                                    <li><a href="#project4" style={{padding: "0 48px"}}>4. IOT Face Recognition(仮)</a></li>
                                    <li><a href="#project5" style={{padding: "0 48px"}}>5. Who's That Pokémon?</a></li>
                                    <li><a href="#project6" style={{padding: "0 48px"}}>6. Climbing Data Analysis</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <a href="#" data-target="nav-mobile" class="sidenav-trigger hide-on-large-only" style={{ position: 'fixed', zIndex: 997, top: '18px' }}><i class="material-icons black-text">menu</i></a>
        </div>
    )
}

export default MobileNav
