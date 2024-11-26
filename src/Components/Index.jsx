import { useState } from 'react'

import './asd.css'
import { Link } from 'react-router-dom';

function Index() {
  
const imageSrc = "/userimage.png"
  return (
    <>
     <nav>
      <div className="logo"><img src="" alt="LOGO" /></div>
      <div className="add"><Link to="/Add"><button>AddEmployee</button></Link></div>
     </nav>
     <div className='CardContainer'>
      <div className="card">
        <div className="image"><img src={imageSrc} alt="Photo" /></div>
        <div className="details">
          <h2>Name</h2>
          <h4>Designation</h4>
        </div>
      </div>
    
     </div>
    </>
  )
}

export default Index
