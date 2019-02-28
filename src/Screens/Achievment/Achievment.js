import React, { Component } from 'react'
import NavigationBar from '../../components/NavigationBar/NavigationBar';

export default class Achievment extends Component {
  render() {
    return (
        <div  className="container">
            
            <h3 style={{ margin:'20px' }}><i className="fa fa-trophy"></i> Achievment </h3>
            <div style={{ height:'450px',overflow:'auto', border:'solid 1px black', margin:'50px', paddingLeft: '20px' }}>
                <div className="row">
                    {/* la premiere colonne */}
                    <div className="col-sm">
                            <div className="card text-center" style={{marginTop:'10px'}}>
                                <div className="card-block">
                                    <img className="img-fluid" alt="" src={require('../../assets/images/pyt.jpg')}/>
                                        <div className="card-title">
                                            <h4> Pyton <i className="fa fa-trophy"></i></h4>
                                        </div>
                                    <div className="card-text" style={{marginLeft : '10px'}}>
                                        trophy Pyton 
                                    </div>
                                    <a style={{ margin : '10px'}}  href="#" className="btn btn-success">Consulter</a>
                                </div>
                            </div>
                    </div>
                    {/* la Deuxiem colonne */}
                    <div className="col-sm">
                        <div className="card text-center" style={{marginTop:'10px', height:'365px'}}>
                            <div className="card-block">
                                <img className="img-fluid" alt="" src={require('../../assets/images/php.png')}/>
                                <div className="card-title" style={{marginTop:'45px'}}>
                                    <h4> PHP <i className="fa fa-trophy"></i> </h4>
                                </div>
                                <div className="card-text" style={{marginLeft : '10px'}}>
                                    trophy Php
                                </div>
                                <a style={{ margin : '10px'}}  href="#" className="btn btn-success">Consulter</a>
                            </div>
                        </div>
                    </div>
                    {/* la Deuxiem colonne */}
                    <div className="col-sm">
                    One of three columns
                    </div>
                </div>
            </div>
       </div>
    );
  }
}
