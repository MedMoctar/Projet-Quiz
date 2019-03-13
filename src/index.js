import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Achievment from '../src/Screens/Achievment/Achievment';
import Challenge from '../src/Screens/challenge/Challenge';
import Inscription from '../src/Screens/Inscription/Inscription';
import Login from '../src/Screens/Login/Login';
import Profile from '../src/Screens/Profile/Profile';
import Quiz from './Screens/quiz/Quiz';
<<<<<<< HEAD
import DashBoard from './Screens/dashBoard/DashBoard';
import Friends from './Screens/friens/Friends';
=======
import DashBoard from './Screens/DashBoard/DashBoard';
>>>>>>> 6890fb312fe3f111755dc0394658917e690a5f61


import * as serviceWorker from './serviceWorker';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App} >
<<<<<<< HEAD
         <IndexRoute component={DashBoard} />
=======
            <IndexRoute component={DashBoard} />
>>>>>>> 6890fb312fe3f111755dc0394658917e690a5f61
            <Route path='/Achievment' component={Achievment} />
            <Route path='/Challenge' component={Challenge} />
            <Route path='/Profile' component={Profile} />
            <Route path='/Quiz' component={Quiz} />
            <Route path='/dashBoard' component={DashBoard} />
<<<<<<< HEAD
            <Route path='/Friends' component={Friends} />
=======
>>>>>>> 6890fb312fe3f111755dc0394658917e690a5f61
            
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
