import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Asia from './components/Asia';
import CovidData from './components/CovidData';
import NavbarNew from './components/NavbarNew';
import "./layout.css";

function App() {
  return (
    <div className="container">
      <NavbarNew />
      <Switch>
        <Route exact path='/covid-19-update'>
         <CovidData />
        </Route>
        <Route path='/covid-19-update/asia'>
         <Asia />
        </Route>
        <Redirect to='/covid-19-update' />
     </Switch>
    </div>
  );
}

export default App;
