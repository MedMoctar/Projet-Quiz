import React, { Component } from 'react';
import logo from './logo.svg';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Login from './Screens/Login/Login';
import Inscription from './Screens/Inscription/Inscription';
import Profile from './Screens/Profile/Profile';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Hom from './Screens/Hom/Hom';
import Achievment from './Screens/Achievment/Achievment';
import Notification from './components/Notification/Notification';

class App extends Component {
  render() {
    return (
      //<NavigationBar />
      //<Login />
      //<Profile />
      //<Inscription />
      //<Achievment />
      /* 
          <Router>
              <div>
               
                <Switch>
                  <Route path="/hom" exact render={() => <Hom /> } />
                 <Route path="/inscription" exact render={() => <Inscription /> } />
                 <Route path="/Login" exact render={() => <Login />} />
                 <Route path="/Profile" exact render={() => <Profile />} />
                </Switch>
              </div>
          </Router>
      */
      
      <div className="container-fluid">
          <Profile />
       </div>
    );
  }
}

export default App;
