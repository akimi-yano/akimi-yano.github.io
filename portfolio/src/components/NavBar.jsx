import React from 'react'
import ViewListIcon from '@material-ui/icons/ViewList';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import CreateIcon from '@material-ui/icons/Create';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import EmailIcon from '@material-ui/icons/Email';

const NavBar = () => {
    return (
        <div className="navbar-fixed">
           
            <nav className="noboxshadow banner-hidden">
                <div className="nav-wrapper clear" >
                {/* <a href="" data-activates="mobile-demo" className="button-collapse"><ViewListIcon/></a> */}
                    <a href="" className="brand-logo raleway hide-on-med-and-down" style={{color:'black', margin: '0 20px'}}>Akimi Yano<span className="tealfont"></span></a>
                    
                    <ul style={{margin: '0 20px'}} className="right hide-on-med-and-down">
                        <li ><a className="navlink blackfont aboutbtn" href="#about"><PersonIcon/> About </a></li>
                        <li ><a className="navlink blackfont techbtn" href="#skills"><SettingsIcon/> Skills </a></li>
                        <li  style={{width: '15vw'}} className="projectOption"><a className="navlink blackfont projbtn dropdown-button" href="" data-activates="dropdown1"><CreateIcon/> Projects <ArrowDropDownIcon/></a>
                        <ul id="dropdown1" className="dropdown-content">
                <li><a id="project1btn" href="#project1" className="blackfont">Face Labo</a></li>
                <li><a id="project2btn" href="#project2" className="blackfont">ice candi</a></li>
                <li><a id="project3btn" href="#project3" className="blackfont">Guess Pokemon</a></li>
                <li><a id="project4btn" href="#project4" className="blackfont">Climbing Analysis</a></li>
            </ul>
                        </li>
                        <li ><a className="navlink blackfont contactbtn" href="#contact"><EmailIcon/> Contact </a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
