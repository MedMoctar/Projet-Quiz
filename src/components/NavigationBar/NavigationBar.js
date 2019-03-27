import React, { Component } from 'react'
import UserInfos from '../UserInfos/UserInfos';
import Notification from '../Notification/Notification';
import {Link} from 'react-router';

export default class NavigationBar extends Component {
  render() {
    return ( 
        <div className="container" style={{marginTop:'10px'}}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/dashBoard" className="navbar-brand"> <i className="fa fa-home"> </i>DashBoard  </Link>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        
                        <li className="nav-item active">
                            <Link to="/Profile" className="nav-link"> <i className="fa fa-user"> </i>Profile  </Link>
                        </li>
                        <li className="nav-item active">
                            
                            <Link to="/Achievment" className="nav-link"> <i className="fa fa-trophy"> </i>Achievements  </Link>
                        </li>
                        
                        <li className="nav-item active">
                            
                            <Link to="/Challenge" className="nav-link"> <i className="fa fa-trash"></i>Challenge  </Link>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link" to="/friends"><i className="fa fa-user"></i>Friends</Link>
                        </li>

                        <li className="nav-item active">
                            <Link to="/Settings" className="nav-link" ><i className="fa fa-cog"></i>Setting</Link>
                        </li>

                        <li className="nav-item active">
                            <a className="nav-link" href="#"><i className="fa fa-tasks"></i>Top Score</a>
                        </li>
                        </ul>
                        <UserInfos />
                        <Notification />
                    </div>
            </nav>
        </div>
);
  }
}
