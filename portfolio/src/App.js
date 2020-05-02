import React from 'react';
import './App.css';

import 'materialize-css/dist/css/materialize.min.css';
import NavBar from './components/NavBar.jsx'
// import MobileNav from './components/MobileNav.jsx'
import Banner from './components/Banner.jsx'
import About from './components/About.jsx'
import About2 from './components/About2.jsx'
import About3 from './components/About3.jsx'
import About4 from './components/About4.jsx'
import About5 from './components/About5.jsx'
import LineOne from './components/Line_One.jsx'
import Skills from './components/Skills.jsx'
import LineTwo from './components/Line_Two.jsx'
import Projects from './components/Projects.jsx'
import LineThree from './components/Line_Three.jsx'
import Contact from './components/Contact.jsx'

import LineFour from './components/Line_Four.jsx'
import Education from './components/Education.jsx'
import LineFive from './components/Line_Five.jsx'
import Experience from './components/Experience.jsx'
import Courses from  './components/Courses.jsx'
import HomeIcon from '@material-ui/icons/Home'; 

import LineSix from './components/Line_Six.jsx'

const onClickHandler=(e)=>{
  window.scrollTo({
    top:0,
    left:0,
    behavior:'smooth'
})
}

function App() {
  return (
     <div id='main' className='app'>
        <div class="backtotop">
            <button class="invisible-button" onClick={(e)=>onClickHandler()}><HomeIcon style={{fontSize:'50px'}}/></button>
        </div>

          {/* <MobileNav/> */}
          <NavBar/>
          <Banner/>
          <About/>
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
  );
}

export default App;
