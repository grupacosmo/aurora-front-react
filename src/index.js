import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './view/LandingPage/LandingPage';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import Experiment from "./section/Experiment/Experiment";

ReactDOM.render(
  <BrowserRouter>
    <div className="container">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/experiment" component={Experiment} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
