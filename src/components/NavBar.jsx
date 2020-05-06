import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const NavBar = () => {
    return (
        <div className="navbar-fixed">
            <ul id="dropdown1" className="dropdown-content">
                <li><a className="black-text" href="#project1">1. Coronavirus Prediction</a></li>
                <li><a className="black-text" href="#project2">2. Face Labo</a></li>
                <li><a className="black-text" href="#project3">3. ice candi</a></li>
                <li><a className="black-text" href="#project4">4. Who's That Pokémon?</a></li>
                <li><a className="black-text" href="#project5">5. Climbing Data Analysis</a></li>
                <li><a className="black-text" href="#project6">6. IOT Face Recognition(仮)</a></li>
            </ul>
            <nav>
                <div className="nav-wrapper white" >
                    <a href="#" className="brand-logo black-text" style={{marginLeft: "1vw"}}><FontAwesomeIcon icon="home"/>Akimi Yano</a>
                    <ul className="right hide-on-med-and-down ">
                        <li><a className="hover-ver" href="#about"><FontAwesomeIcon icon="seedling"/>About</a></li>
                        <li>
                            <a style={{outline: 'none'}} class='dropdown-trigger hover-ver' href='#projects-title' data-target='dropdown1'>
                                <FontAwesomeIcon icon="trophy"/>
                                Projects
                                <FontAwesomeIcon icon="caret-down"/>
                            </a>
                        </li>
                        <li><a className="hover-ver" href="#skills"><FontAwesomeIcon icon="star"/>Skills</a></li>
                        <li><a className="hover-ver" href="#education"><FontAwesomeIcon icon="graduation-cap"/>Education</a></li>
                        <li><a className="hover-ver" href="#experience"><FontAwesomeIcon icon="fire-alt"/>Experience</a></li>
                        <li><a className="hover-ver" href="#courses"><FontAwesomeIcon icon="check-square"/>Courses</a></li>
                        <li><a className="hover-ver" href="#contact"><FontAwesomeIcon icon="paper-plane"/>Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
