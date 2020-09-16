import React from 'react';
import { Link } from 'react-router-dom';

const Chocolate = () => {
  //adding a comment to test ssh connection on github
  return (
    <div>
      <h1>ENJOY</h1>
      <div className="chocolate"></div>
      <p className="back"><Link exact to="/">Go Back</Link></p>
    </div>
  )
}

export default Chocolate;