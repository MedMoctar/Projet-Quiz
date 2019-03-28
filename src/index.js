import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Achievment from '../src/Screens/Achievment/Achievment';
import Challenge from '../src/Screens/challenge/Challenge';
import Inscription from '../src/Screens/Inscription/Inscription';
import Login from '../src/Screens/Login/Login';
import Profile from '../src/Screens/Profile/Profile';
import DashBoard from './Screens/DashBoard/DashBoard';
import Friends from './Screens/friens/Friends';
import QuizFacile from './Screens/quiz/QuizFacile';
import QuizDificile from './Screens/quiz/QuizDificile';
import QuizExpert from './Screens/quiz/QuizExpert';
import QuizFacilePhp from './Screens/quiz/quizPhp/QuizFacilePhp';
import QuizDificilPhp from './Screens/quiz/quizPhp/QuizDificilPhp';
import QuizExpertPhp from './Screens/quiz/quizPhp/QuizExpertPhp';

import * as serviceWorker from './serviceWorker';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Settings from './Screens/Settings/Settings';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App} >
            <IndexRoute component={DashBoard} />
            <Route path='/Achievment' component={Achievment} />
            <Route path='/Challenge' component={Challenge} />
            <Route path='/Settings' component={Settings} />
            <Route path='/Profile' component={Profile} />
            <Route path='/dashBoard' component={DashBoard} /> 
            <Route path='/friends' component={Friends} />
            <Route path='/Quiz/medium' component={QuizFacile} /> 
            <Route path='/Quiz/hard' component={QuizDificile} /> 
            <Route path='/Quiz/expert' component={QuizExpert} />
            <Route path='/Quiz/quizPhp/medium' component={QuizFacilePhp} />
            <Route path='/Quiz/quizPhp/hard' component={QuizDificilPhp} />
            <Route path='/Quiz/quizPhp/expert' component={QuizExpertPhp} />
            
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
