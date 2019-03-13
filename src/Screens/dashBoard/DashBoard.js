import React, { Component } from 'react'
import DashboardMenu from '../../components/dashboardMenu/DashboardMenu';

export default class DashBoard extends Component {
  render() {
    return (
      <div className="container">
         <div style={{width:'100%'}}>
            <DashboardMenu />
        </div>  
      </div>
    )
  }
}
