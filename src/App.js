import React from 'react';
import './App.css';

import 'materialize-css/dist/css/materialize.min.css';
import Content from './components/Content.jsx'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas, } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas)


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
        {/* <div class="backtotop">
            <button class="invisible-button" onClick={(e)=>onClickHandler()}><HomeIcon style={{fontSize:'50px'}}/></button>
        </div> */}
          <Content/>
      </div>
  );
}

export default App;
