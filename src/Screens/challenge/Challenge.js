import React, { Component } from "react";
import Composant_achievment_RcmdGm from '../../components/composant_achievment_RcmdGm/Composant_achievment_RcmdGm';
import ComposantChallMstPlyd from "../../components/composantChallMstPlyd/ComposantChallMstPlyd";
import ComposantChallReco from "../../components/composantChallReco/ComposantChallReco";

export default class Challenge extends Component {
  render() {
    {
      /*console.log(this.state.currentCategorie);*/ 
    }
    return (
      <div className="container">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              New games
      
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Most played games
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="contact-tab"
              data-toggle="tab"
              href="#contact"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Recommended games
            </a>
          </li>
        </ul>
        <div style={{margin:'20px'}}>
              
        </div>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <h4 style={{marginTop:'20px'}}> The new quizzes </h4>
            <div style={{marginTop:'20px'}}>
              <Composant_achievment_RcmdGm />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <h4 style={{marginTop:'20px'}}> The most played quizzes </h4>
            <div style={{marginTop:'20px'}}>
              <ComposantChallMstPlyd />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <h4 style={{marginTop:'20px'}}> Recommended quizzes </h4>
            <div style={{marginTop:'20px'}}>
              <ComposantChallReco /> 
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}
