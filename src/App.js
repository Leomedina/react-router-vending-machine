import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Nuka from './Nuka';
import Crisps from './Crisps';
import Chocolate from './Chocolate';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/nuka">
          <Nuka />
        </Route>
        <Route exact path='/crisps'>
          <Crisps />
        </Route>
        <Route exact path="/chocolate">
          <Chocolate />
        </Route> 
      </BrowserRouter>
    </div>
  );
}

export default App;
