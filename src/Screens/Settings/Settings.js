import React, { Component } from 'react'
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import CompsntProfil from '../../components/compsntProfil/CompsntProfil';
import Champ from '../../components/Champ/Champ';

export default class Settings extends Component {
  render() {
    return (
        //le dive pricipale
        <div className="container">
            <h3 style={{margin:'20px', paddingLeft: '8px' }}> Settings </h3>
          
            <div className="d-flex justify-content-center align-items-center"  >
               
                        <img className="rounded-circle" src={require('../../assets/images/th.jpg')}  style={{height: '150px', width:'150px'}} />
                   
      		 </div>
      		 <div className="d-flex justify-content-center align-items-center">
	      		  <div>
	                <form style={{ width:"350px"}}>
	                    <Champ label="User Name" type="text" placeholder="Angelina"/>
	                    
	                    <Champ label="Email" type="email" placeholder="name@example.com" />
	                    
	                    <Champ label="Password" type="password" placeholder="Password" />
	                    
	                    <Champ label="Password Confirmation" type="password" placeholder="Password" />
	                    <div align="center">
	                        
	                            <button type="submit" className="btn btn-primary">Update</button>
	                        
	                        
	                    </div>
	                </form>    
	            </div>
            </div>
      		 
       	 </div>
        
    )
  }
  }
