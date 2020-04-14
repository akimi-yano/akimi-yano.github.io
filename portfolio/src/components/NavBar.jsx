import React from 'react'
import ViewListIcon from '@material-ui/icons/ViewList';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import CreateIcon from '@material-ui/icons/Create';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import EmailIcon from '@material-ui/icons/Email';
import $ from 'jquery'

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
    return (
        <div className="navbar-fixed">
           
            <nav className="noboxshadow banner-hidden">
                <div className="nav-wrapper clear" >
                {/* <a href="" data-activates="mobile-demo" className="button-collapse"><ViewListIcon/></a> */}
                    <a href="" className="titleName" style={{color:'black', margin: '0 20px'}}>Akimi Yano<span className="tealfont"></span></a>
                    
                    <ul style={{margin: '0 20px'}} className="right hide-on-med-and-down">
                        <li style={{width: '15vw', textAlign:'center'}} ><a className="navlink blackfont aboutbtn" href="#about"><PersonIcon style={{marginBottom:'-4px'}}/> About </a></li>
                        <li style={{width: '15vw', textAlign:'center'}} className="projectOption"><a className="navlink blackfont projbtn dropdown-button"><CreateIcon style={{marginBottom:'-4px'}}/> Projects <ArrowDropDownIcon style={{marginBottom:'-4px'}}/></a>
                        <ul id="dropdown1" className="dropdown-content">
                <li><a id="project1btn" href="#project1" className="blackfont">1. Face Labo</a></li>
                <li><a id="project2btn" href="#project2" className="blackfont">2. ice candi</a></li>
                <li><a id="project3btn" href="#project3" className="blackfont">3. Who's That Pokémon?</a></li>
                <li><a id="project4btn" href="#project4" className="blackfont">4. Climbing Analysis</a></li>
            </ul>
                        </li>
                        <li style={{width: '15vw', textAlign:'center'}} ><a className="navlink blackfont techbtn" href="#skills"><SettingsIcon style={{marginBottom:'-4px'}}/> Skills </a></li>
                        <li style={{width: '15vw', textAlign:'center'}} ><a className="navlink blackfont contactbtn" href="#contact"><EmailIcon style={{marginBottom:'-4px'}}/> Contact </a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
