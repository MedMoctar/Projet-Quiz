import React, { Component } from 'react';
import {Link} from 'react-router';


class Login extends Component {

    
      render() {
        return (
            <div>
                <div style={{margin:'80px' }}>
                    <img className="rounded mx-auto d-block" src={require('../../assets/images/logo.png')}  style={{height: '200px', width:'200px'}} />
                </div>
                <div className="d-flex justify-content-center align-items-center" >
                    <form style={{ width:"350px"}}>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Login</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="UserName"></input>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div align="center">
                            <Link to="/Hom">
                               <button type="submit" className="btn btn-primary">log in</button>
                            </Link>
                            <Link to="/Inscription">
                               <button type="submit" className="btn btn-primary" style={{marginLeft:'20px'}}>Sign up</button>
                            </Link>
                        </div>

                    </form>    
                </div>
            </div>
            
            
        );
      }

}

export default Login;