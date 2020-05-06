import React, {useEffect} from 'react'
import M from 'materialize-css';

import NavBar from './NavBar.jsx'
import MobileNav from './MobileNav.jsx'
import Banner from './Banner.jsx'
import About1 from './About1.jsx'
import About2 from './About2.jsx'
import About3 from './About3.jsx'
import About4 from './About4.jsx'
import About5 from './About5.jsx'
import LineOne from './Line_One.jsx'
import Skills from './Skills.jsx'
import LineTwo from './Line_Two.jsx'
import Projects from './Projects.jsx'
import LineThree from './Line_Three.jsx'
import Contact from './Contact.jsx'

import LineFour from './Line_Four.jsx'
import Education from './Education.jsx'
import LineFive from './Line_Five.jsx'
import Experience from './Experience.jsx'
import Courses from  './Courses.jsx'

import LineSix from './Line_Six.jsx'

const Body = () => {
    useEffect(() => {
        let elems
        
        elems = document.querySelectorAll('.scrollspy');
        M.ScrollSpy.init(elems, {throttle: 1});

        elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);

        elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {hover: true, constrainWidth: false, coverTrigger: false});

        elems = document.querySelectorAll('.parallax');
        M.Parallax.init(elems);
    }, [])

    return (
        <div>
        <NavBar/>
        <MobileNav/>
        <Banner/>
        <About1/>
        <About2/>
        <About3/>
        <About4/>
        <About5/>
        <LineOne/>
        <Projects/>
        <LineTwo/>
        <Skills/>
        <LineThree/>
        <Education/>
        <LineFour/>
        <Experience/>
        <LineFive/>
        <Courses/>
        <LineSix/>
        <Contact/>
        </div>
    )
}

export default Body
