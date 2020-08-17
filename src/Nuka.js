import React from 'react';
import { Link } from 'react-router-dom'

const Nuka = () => {

  return (
    <div>
      <h1>ENJOY</h1>
      <div className="nuka"></div>
      <p className="back"><Link exact to="/">Go Back</Link></p>
    </div>
  )
}

export default Nuka;