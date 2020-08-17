import React from 'react';
import { Link } from 'react-router-dom';
import './styles/VendingMachine.css';

const VendingMachine = () => {

  return (
    <div class="home">
      <div class="items">
        <h1>Available Items</h1>
        <p>
          <Link exact to="/nuka">Nuka-Cola</Link>
        </p>
        <p>
          <Link exact to="/crisps">Crisps</Link>
        </p>
        <p>
          <Link exact to="/chocolate">Chocolate</Link>
        </p>
      </div>
      </div>
  );
}

export default VendingMachine;