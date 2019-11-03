import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom'
import Home from './components/home/Home';
import Confirm from './components/confirm/Confirm';
import Roulette from './components/roulette/Roulette';


const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Confirm' component={Confirm} />
        <Route exact path='/Roulette' component={Roulette} />
      </Switch>
    </div>
  </BrowserRouter>
)
export default App;

