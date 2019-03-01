import React, { Component } from 'react';
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import DashboardMenu from "../../components/DashboardMenu/DashBoardMenu";
export default class DashBoard extends Component {
  render() {
    return (
      <div>
        <div style={{width:'100%'}}>
        <NavigationBar />
        </div>
        <div style={{width:'100%'}}>
          <DashboardMenu />
        </div>
      </div>
    )
  }
}
