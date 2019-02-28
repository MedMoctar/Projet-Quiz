import React, { Component } from 'react';
import Champ from '../../components/Champ/Champ';
//import { Link } from 'react-router-dom';

export default class Inscription extends Component {
  render() {
    return (
        <div>
            <div style={{margin:'20px' }}>
                <img className="rounded mx-auto d-block" 
                src={require('../../assets/images/logo.png')}  
                style={{height: '200px', width:'200px'}} />
            </div>
            <div className="d-flex justify-content-center align-items-center" >
                <form style={{ width:"350px"}}>
                    <Champ label="User Name" type="text" placeholder="Angelina"/>
                    
                    <Champ label="Email" type="email" placeholder="name@example.com" />
                    
                    <Champ label="Email Confirmation :" type="email" placeholder="name@example.com" />

                    <Champ label="Password" type="password" placeholder="Password" />
                    
                    <Champ label="Password Confirmation" type="password" placeholder="Password" />
                    <div align="center">
                         {/* <Link to="/hom"> */}
                            <button type="submit" className="btn btn-primary"> Sign Up</button>
                         {/* </Link> */}
                        <button type="reset" className="btn btn-primary" style={{marginLeft:'20px'}}>Cancel</button>
                    </div>
                </form>    
            </div>
    </div>
    )
  }
}
