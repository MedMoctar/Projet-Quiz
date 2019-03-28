import React, { Component } from 'react';
import {Link} from 'react-router';


class Login extends Component {
constructor(props) {
    super(props);
    this.state = {
      userName:'amine',
      password:'amine',
      val:false
    }
}
goToDashBoard=()=>{
    this.setState({
        dashBoardView:true,
    })
}
verification=(user,pass)=>{
   if(user==this.state.userName &&pass==this.state.password){
        this.setState({
            val:!this.state.val
        });
   }else{
        this.setState({
            
        });
   }
}
    
      render() {
          const cViews=this.state.dashBoardView
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
                        {
                            this.state.val ==true ?
                            <button type="button" className="btn btn-dark" data-toggle="modal" onClick={() => this.nextQuestion()} data-target="#exampleModalCenter">
                                Login
                                </button>:
                            <Link to="/dashBoard">
                               <button type="submit" className="btn btn-primary" onClick={()=>this.goToDashBoard()}>log in</button>
                            </Link>
                        }  

               
                                 <div className="modal fade" id="exampleModalCenter"  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Erreur d'Authentification :</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" style={{height:'350px'}}>
                        <h4>Login ou mot de Passe  Incorrect</h4>
                        
                        <div className="modal-footer">
        
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>  
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>      
                           
                           
                           
                           
                           
                           
                           
                           
                            <Link to="/Inscription">
                               <button type="submit" className="btn btn-primary" style={{marginLeft:'20px'}} >Sign up</button>
                            </Link>
                        </div>

                    </form>    
                </div>
            </div>
            
            
        );
      }

}

export default Login;