import React, {useEffect} from 'react'

import M from 'materialize-css';

const Line_Five = () => {
  useEffect(() => {
      let elems = document.querySelectorAll('.parallax');
      M.Parallax.init(elems);
  }, [])

    return (
      <div className="parallax-container" style={{height: "auto"}}>
      <div className='parallax'><img src={process.env.PUBLIC_URL + '/bg3.jpg'} alt='lineone'/>
      </div>
  </div>
    )
}

export default Line_Five
