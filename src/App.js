import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Friends from './Screens/friens/Friends';

// <Friends />
  


class App extends Component {
  render() {
    return (
      
      <div className="container-fluid">
          <NavigationBar />
          {this.props.children}
       </div>
    );
  }
}

export default App;
