import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/nuka">
          <NukaCola />
        </Route>
        <Route exact path='/krisp'>
          <Krisp />
        </Route>
        <Route exact path="/chocolate">
          <Chocolate />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
