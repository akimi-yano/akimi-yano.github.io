import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const NavBar = () => {
    return (
        <div className="navbar-fixed">
            <ul id="dropdown1" className="dropdown-content">
                <li><a className="black-text" href="#project1">1. Coronavirus Prediction</a></li>
                <li><a className="black-text" href="#project2">2. Face Labo</a></li>
                <li><a className="black-text" href="#project3">3. ice candi</a></li>
                <li><a className="black-text" href="#project4">4. Donut Alert</a></li>
                <li><a className="black-text" href="#project5">5. Who's That Pokémon?</a></li>
                <li><a className="black-text" href="#project6">6. Climbing Data Analysis</a></li>
                
            </ul>
            <nav>
                <div className="nav-wrapper white" >
                    <a href="#" className="brand-logo black-text" style={{marginLeft: "1vw"}}>
                        <span class="hide-on-small-only"><FontAwesomeIcon icon="home" style={{margin:'0 2px'}}/></span>
                        <h5 style={{display: "inline-block"}}>Akimi Yano</h5>
                    </a>
                    <ul className="right hide-on-med-and-down ">
                        <li><a className="hover-ver" href="#about"><FontAwesomeIcon icon="seedling" style={{margin:'0 1px'}}/>About</a></li>
                        <li>
                            <a style={{outline: 'none'}} class='dropdown-trigger hover-ver' href='#projects-title' data-target='dropdown1'>
                                <FontAwesomeIcon icon="trophy" style={{margin:'0 3px'}}/>
                                Projects
                                <FontAwesomeIcon icon="caret-down" style={{margin:'0 3px'}}/>
                            </a>
                        </li>
                        <li><a className="hover-ver" href="#skills"><FontAwesomeIcon icon="star" style={{margin:'0 1px'}}/>Skills</a></li>
                        <li><a className="hover-ver" href="#education"><FontAwesomeIcon icon="graduation-cap" style={{margin:'0 3px'}}/>Education</a></li>
                        <li><a className="hover-ver" href="#experience"><FontAwesomeIcon icon="fire-alt" style={{margin:'0 3px'}}/>Experience</a></li>
                        <li><a className="hover-ver" href="#courses"><FontAwesomeIcon icon="check-square" style={{margin:'0 4px'}}/>Courses</a></li>
                        <li><a className="hover-ver" href="#contact"><FontAwesomeIcon icon="paper-plane"style={{margin:'0 3px'}}/>Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
