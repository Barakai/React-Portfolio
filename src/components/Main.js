import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './Landingpage';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/About" component={About} />
    <Route path="/Contact" component={Contact} />
    <Route path="/Portfolio" component={Portfolio} />
    

  </Switch>
)

export default Main;