import React from 'react'
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
                <div class="title_line">
                <h2>Akimi Yano</h2>
                <h2>Software Engineer</h2>
                </div>
                {/* <a href="" data-activates="mobile-demo" className="button-collapse"><ViewListIcon/></a> */}
                    {/* <a href="" className="titleName" style={{color:'black', margin: '0 20px'}}>Akimi Yano<span className="tealfont"></span></a> */}
                    
                    <ul style={{margin: '0 20px'}} className="right hide-on-med-and-down">
                        <li style={{width: '15vw', textAlign:'center'}} ><a className="navlink blackfont aboutbtn" href="#about"><EmojiNatureIcon style={{marginBottom:'-4px'}}/> About </a></li>
                        <li style={{width: '15vw', textAlign:'center'}} className="projectOption"><a className="navlink blackfont projbtn dropdown-button"><EmojiEventsIcon style={{marginBottom:'-4px'}}/> Projects <ArrowDropDownIcon style={{marginBottom:'-4px'}}/></a>
                        <ul id="dropdown1" className="dropdown-content">
                <li><a id="project1btn" href="#project1" className="blackfont">1. Java/ML Project(仮)</a></li>
                <li><a id="project2btn" href="#project2" className="blackfont">2. Face Labo</a></li>
                <li><a id="project3btn" href="#project3" className="blackfont">3. ice candi</a></li>
                <li><a id="project4btn" href="#project4" className="blackfont">4. IOT Face Recognition(仮)</a></li>
                <li><a id="project4btn" href="#project5" className="blackfont">5. Who's That Pokémon?</a></li>
                <li><a id="project4btn" href="#project6" className="blackfont">6. Climbing Data Analysis</a></li>
            </ul>
                        </li>
                        <li style={{width: '15vw', textAlign:'center'}} ><a className="navlink blackfont techbtn" href="#skills"><StarIcon style={{marginBottom:'-4px'}}/> Skills </a></li>
                        <li style={{width: '15vw', textAlign:'center'}} ><a className="navlink blackfont contactbtn" href="#contact"><ContactMailIcon style={{marginBottom:'-4px'}}/> Contact </a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
