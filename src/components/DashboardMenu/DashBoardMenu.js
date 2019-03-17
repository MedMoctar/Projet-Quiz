import React, { Component } from 'react'
import {Link} from 'react-router';
export default class DashboardMenu extends Component {
  render() {
    return (
      <div className="container">
            <div className="row" style={{backgroundColor:'#ebebe0',height:'589px'}}>

                <div style={{marginTop:'100px', backgroundColor:'#ebebe0' ,width:'90%'}}>

                    <div  className="row" style={{marginLeft:'100px' ,width:'85%',height:'40%'}}>

                        <div className="col-4" style={{backgroundColor: '#8208D4',borderWidth:'1px',borderStyle:'solid',borderColor:'#ff944d',boxShadow: '2px 2px 2px 2px red',textAlign:"center",position:'relative',verticalAlign:'middle'}}><div style={{marginTop:'10px'}}><div><img src={require('../../assets/images/start.png')} style={{height: '125px', width:'125px', borderRadius: '30px'}} /></div><div><Link to="/Quiz" style={{color:'black',fontSize:'20px'}}>Start</Link></div></div></div>

                        <div className="col-4" style={{backgroundColor: '#b30000',borderWidth:'1px',borderStyle:'solid',borderColor:'#ff944d',boxShadow: '2px 2px 2px 2px red',textAlign:"center",position:'relative',verticalAlign:'middle'}}><div style={{marginTop:'10px'}}><div><img src={require('../../assets/images/trophie.png')} style={{height: '125px', width:'125px', borderRadius: '30px'}} /></div><div><Link to="/Achievment" style={{color:'black',fontSize:'20px'}}>Achievements</Link></div></div></div>

                        <div className="col-4"  style={{backgroundColor: '#03A86F',borderWidth:'1px',borderStyle:'solid',borderColor:'#ff944d',boxShadow: '2px 2px 2px 2px red',textAlign:"center",position:'relative',verticalAlign:'middle'}}><div style={{marginTop:'10px'}}><div><img src={require('../../assets/images/challenge.png')} style={{height: '125px', width:'125px', borderRadius: '30px'}} /></div><div><Link to="/Challenge" style={{color:'black',fontSize:'20px'}}>Challenge</Link></div></div></div>
        
                    </div>

                    <div  className="row" style={{marginTop:'2px',marginLeft:'100px',width:'85%',height:'40%'}}>

                        <div className="col-2" style={{backgroundColor: '#3D91F2',borderWidth:'1px',borderStyle:'solid',borderColor:'#ff944d',boxShadow: '2px 2px 2px 2px red',textAlign:"center",position:'relative',verticalAlign:'middle'}}><div style={{marginTop:'10px'}}><div><img src={require('../../assets/images/settings.png')} style={{height: '125px', width:'120px', borderRadius: '30px'}} /></div><div><Link to="/Settings" style={{color:'black',fontSize:'20px'}}>Settings</Link></div></div></div>

                        <div className="col-2" style={{backgroundColor: '#ff8080',borderWidth:'1px',borderStyle:'solid',borderColor:'#ff944d',boxShadow: '2px 2px 2px 2px red',textAlign:"center",position:'relative',verticalAlign:'middle'}}><div style={{marginTop:'10px'}}><div><img src={require('../../assets/images/start.png')} style={{height: '125px', width:'125px', borderRadius: '30px'}} /></div><div><Link to="/Achievment" style={{color:'black',fontSize:'20px'}}>Top Score</Link></div></div></div>

                        <div className="col-4" style={{backgroundColor: '#34cbcb',borderWidth:'1px',borderStyle:'solid',borderColor:'#ff944d',boxShadow: '2px 2px 2px 2px red',textAlign:"center",position:'relative',verticalAlign:'middle'}}><div style={{marginTop:'10px'}}><div><img src={require('../../assets/images/friends.png')} style={{height: '125px', width:'125px', borderRadius: '30px'}} /></div><div><Link to="/Achievment" style={{color:'black',fontSize:'20px'}}>Friends</Link></div></div></div>

                        <div className="col-2" style={{backgroundColor: '#F77043',borderWidth:'1px',borderStyle:'solid',borderColor:'#ff944d',boxShadow: '2px 2px 2px 2px red',textAlign:"center",position:'relative',verticalAlign:'middle'}}><div style={{marginTop:'10px'}}><div><img src={require('../../assets/images/profil.png')} style={{height: '125px', width:'125px', borderRadius: '30px',display: 'flex'}} /></div><div><Link to="/Profile" style={{color:'black',fontSize:'20px'}}>My Profile</Link></div></div></div>

                        <div className="col-2" style={{backgroundColor: '#ff0080',borderWidth:'1px',borderStyle:'solid',borderColor:'#ff944d',boxShadow: '2px 2px 2px 2px red',textAlign:"center",position:'relative',verticalAlign:'middle'}}><div style={{marginTop:'10px'}}><div><img src={require('../../assets/images/disconnect.png')} style={{height: '125px', width:'125px', borderRadius: '30px',backgroundSize: 'cover',display: 'flex'}} /></div><div><Link to="/Achievment" style={{color:'black',fontSize:'20px'}}>Disconect</Link></div></div></div>


                     </div>

                </div>

            </div>
      </div>
    )
  }
}
