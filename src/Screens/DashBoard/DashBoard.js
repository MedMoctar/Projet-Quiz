import React, { Component } from 'react'
import DashboardMenu from '../../components/DashboardMenu/DashboardMenu';

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
