import React from 'react';
import './App.css';

import 'materialize-css/dist/css/materialize.min.css';
import NavBar from './components/NavBar.jsx'
// import MobileNav from './components/MobileNav.jsx'
import Banner from './components/Banner.jsx'
import About from './components/About.jsx'
import LineOne from './components/Line_One.jsx'
import Skills from './components/Skills.jsx'
import LineTwo from './components/Line_Two.jsx'
import Projects from './components/Projects.jsx'
import LineThree from './components/Line_Three.jsx'
import Contact from './components/Contact.jsx'

import HomeIcon from '@material-ui/icons/Home';

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
            <button class="invisible-button" onClick={(e)=>onClickHandler()}><HomeIcon style={{fontSize:'80px'}}/></button>
        </div>

          {/* <MobileNav/> */}
          <NavBar/>
          <Banner/>
          <About/>
          <LineOne/>
          <Skills/>
          <LineTwo/>
          <Projects/>
          <LineThree/>
          <Contact/>
      </div>
  );
}

export default App;
