import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hom from '../src/Screens/Hom/Hom';
import Achievment from '../src/Screens/Achievment/Achievment';
import Challenge from '../src/Screens/challenge/Challenge';
import Inscription from '../src/Screens/Inscription/Inscription';
import Login from '../src/Screens/Login/Login';
import Profile from '../src/Screens/Profile/Profile';

import * as serviceWorker from './serviceWorker';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App} >
            <IndexRoute component={Hom} />
            <Route path='/Achievment' component={Achievment} />
            <Route path='/Challenge' component={Challenge} />
            <Route path='/Profile' component={Profile} />
            <Route path='/Hom' component={Hom} />
        </Route>

        <Route path='/Login' component={Login} />
        <Route path='/Inscription' component={Inscription} />
        
    </Router>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
require('react-js-vector-icons/fonts');
