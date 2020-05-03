import React, { useEffect } from 'react'
import ViewListIcon from '@material-ui/icons/ViewList';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import CreateIcon from '@material-ui/icons/Create';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import EmailIcon from '@material-ui/icons/Email';
import StarIcon from '@material-ui/icons/Star';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

import M from 'materialize-css';

const NavBar = () => {

    // const onClickHandler=(e)=>{
    //     e.preventDefault();
    //     let target = this.hash;
    //     let $target = $(target);

    //     $('html, body').stop().animate({
    //         'scrollTop': $target.offset().top
    //     }, 800, 'swing', function () {
    //         window.location.hash = target;
    //     });
    // }
    // onClick={(e)=>onClickHandler(e)}
    useEffect(() => {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {hover: true, constrainWidth: false, coverTrigger: false});
    }, [])

    return (
        <div className="navbar-fixed">
            <ul id="dropdown1" className="dropdown-content">
                <li><a href="#project1">1. Coronavirus Prediction</a></li>
                <li><a href="#project2">2. Face Labo</a></li>
                <li><a href="#project3">3. ice candi</a></li>
                <li><a href="#project4">4. IOT Face Recognition(仮)</a></li>
                <li><a href="#project5">5. Who's That Pokémon?</a></li>
                <li><a href="#project6">6. Climbing Data Analysis</a></li>
            </ul>
            <nav>
                <div className="nav-wrapper" >
                    <a href="#" class="brand-logo" style={{marginLeft: "1vw"}}>Akimi Yano</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#about"><EmojiNatureIcon style={{ marginBottom: '-4px', marginRight: '6px'}} />About</a></li>
                        <li>
                            <a style={{outline: 'none'}} class='dropdown-trigger' href='#projecttitle' data-target='dropdown1'>
                                <EmojiEventsIcon style={{ marginBottom: '-4px', marginRight: '6px' }} />
                                Projects
                                <ArrowDropDownIcon style={{ marginBottom: '-4px', marginRight: '4px' }} />
                            </a>
                        </li>
                        <li><a href="#skills"><StarIcon style={{ marginBottom: '-4px', marginRight: '4px' }} />Skills</a></li>
                        <li><a href="#education"><FitnessCenterIcon style={{ marginBottom: '-4px', marginRight: '6px' }} />Education</a></li>
                        <li><a href="#experience"><WhatshotIcon style={{ marginBottom: '-4px', marginRight: '4px' }} />Experience</a></li>
                        <li><a href="#courses"><DoneOutlineIcon style={{ marginBottom: '-4px', marginRight: '4px' }} />Courses</a></li>
                        <li><a href="#contact"><ContactMailIcon style={{ marginBottom: '-4px', marginRight: '10px' }} />Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
