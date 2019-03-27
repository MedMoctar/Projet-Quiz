import React, { Component } from 'react'
import {Link} from 'react-router';
import Champ from '../../components/Champ/Champ';
export default class Friends extends Component {
  render() {
    return (
      <div className="container">
      <div class="row" style={{marginLeft:'400px',marginTop:'100px'}}>
            <div className="col-4">
                 <input type="text" aria-label="First name" class="form-control" placeholder="Recherche"></input>
            </div>
            <div className="col-2">
                <button type="reset" className="btn btn-primary" style={{marginLeft:'20px'}}>Cancel</button>
            </div>
       </div>
        <div className="row" style={{backgroundColor:'#ebebe0',borderColor:'#D6EAF9',borderWidth:'1px',marginTop:'10px'}}>

                        <div  className="row" style={{marginLeft:'100px' ,width:'85%',height:'8%'}}>

                            <div className="col-3" style={{backgroundColor: '#D6EAF8',borderWidth:'1px',borderStyle:'solid',boxShadow: '1px 1px 1px 1px #1C2833',textAlign:"center",position:'relative',verticalAlign:'middle'}}>
                                <div className="row">
                                    <div className="col-2" style={{marginTop:'9px'}}>
                                        <div>
                                            <img src={require('../../assets/images/th.jpg')} style={{height: '50px', width:'50px', borderRadius: '30px'}} />
                                    
                                        </div>
                                    </div>
                                        <div className="col-2" style={{marginTop:'15px',marginLeft:'50px'}}>
                                            <Link to="/Quiz" style={{color:'black',fontSize:'15px'}}>Amine</Link>
                                        </div>
                                    
                                </div>

                            </div>

                            <div className="col-3" style={{backgroundColor: '',borderWidth:'1px',borderStyle:'solid',boxShadow: '1px 1px 1px 1px #1C2833',textAlign:"center",position:'relative',verticalAlign:'middle'}}>
                                <div className="row">
                                    <div className="col-2" style={{marginTop:'9px'}}>
                                        <div>
                                            <img src={require('../../assets/images/th.jpg')} style={{height: '50px', width:'50px', borderRadius: '30px'}} />
                                    
                                        </div>
                                    </div>
                                        <div className="col-2" style={{marginTop:'15px',marginLeft:'50px'}}>
                                            <Link to="/Quiz" style={{color:'black',fontSize:'15px'}}>Hamza</Link>
                                        </div>
                                   
                                </div>

                            </div>

                            <div className="col-3" style={{backgroundColor: '',borderWidth:'1px',borderStyle:'solid',boxShadow: '1px 1px 1px 1px #1C2833',textAlign:"center",position:'relative',verticalAlign:'middle'}}>
                                <div className="row">
                                    <div className="col-2" style={{marginTop:'9px'}}>
                                        <div>
                                            <img src={require('../../assets/images/th.jpg')} style={{height: '50px', width:'50px', borderRadius: '30px'}} />
                                    
                                        </div>
                                    </div>
                                        <div className="col-2" style={{marginTop:'15px',marginLeft:'50px'}}>
                                            <Link to="/Quiz" style={{color:'black',fontSize:'15px'}}>Fahd</Link>
                                        </div>
                                    
                                </div>

                            </div>

                            <div className="col-3" style={{backgroundColor: '',borderWidth:'1px',borderStyle:'solid',boxShadow: '1px 1px 1px 1px #1C2833',textAlign:"center",position:'relative',verticalAlign:'middle'}}>
                                <div className="row">
                                    <div className="col-2" style={{marginTop:'9px'}}>
                                        <div>
                                            <img src={require('../../assets/images/th.jpg')} style={{height: '50px', width:'50px', borderRadius: '30px'}} />
                                    
                                        </div>
                                    </div>
                                        <div className="col-2" style={{marginTop:'15px',marginLeft:'50px'}}>
                                            <Link to="/Quiz" style={{color:'black',fontSize:'15px'}}>Nicolas</Link>
                                        </div>
                                    
                                </div>

                            </div>

                            
            
                      </div>  
                      <div  className="row" style={{marginLeft:'100px' ,width:'85%',height:'8%',marginTop:'8px'}}>

                            <div className="col-3" style={{backgroundColor: '#D6EAF8',borderWidth:'1px',borderStyle:'solid',boxShadow: '1px 1px 1px 1px #1C2833',textAlign:"center",position:'relative',verticalAlign:'middle'}}>
                                <div className="row">
                                    <div className="col-2" style={{marginTop:'9px'}}>
                                        <div>
                                            <img src={require('../../assets/images/th.jpg')} style={{height: '50px', width:'50px', borderRadius: '30px'}} />
                                    
                                        </div>
                                    </div>
                                        <div className="col-2" style={{marginTop:'15px',marginLeft:'50px'}}>
                                            <Link to="/Quiz" style={{color:'black',fontSize:'15px'}}>Amine</Link>
                                        </div>
                                    
                                </div>

                            </div>

                            <div className="col-3" style={{backgroundColor: '',borderWidth:'1px',borderStyle:'solid',boxShadow: '1px 1px 1px 1px #1C2833',textAlign:"center",position:'relative',verticalAlign:'middle'}}>
                                <div className="row">
                                    <div className="col-2" style={{marginTop:'9px'}}>
                                        <div>
                                            <img src={require('../../assets/images/th.jpg')} style={{height: '50px', width:'50px', borderRadius: '30px'}} />
                                    
                                        </div>
                                    </div>
                                        <div className="col-2" style={{marginTop:'15px',marginLeft:'50px'}}>
                                            <Link to="/Quiz" style={{color:'black',fontSize:'15px'}}>Hamza</Link>
                                        </div>
                                   
                                </div>

                            </div>

                            <div className="col-3" style={{backgroundColor: '',borderWidth:'1px',borderStyle:'solid',boxShadow: '1px 1px 1px 1px #1C2833',textAlign:"center",position:'relative',verticalAlign:'middle'}}>
                                <div className="row">
                                    <div className="col-2" style={{marginTop:'9px'}}>
                                        <div>
                                            <img src={require('../../assets/images/th.jpg')} style={{height: '50px', width:'50px', borderRadius: '30px'}} />
                                    
                                        </div>
                                    </div>
                                        <div className="col-2" style={{marginTop:'15px',marginLeft:'50px'}}>
                                            <Link to="/Quiz" style={{color:'black',fontSize:'15px'}}>Fahd</Link>
                                        </div>
                                    
                                </div>

                            </div>

                            <div className="col-3" style={{backgroundColor: '',borderWidth:'1px',borderStyle:'solid',boxShadow: '1px 1px 1px 1px #1C2833',textAlign:"center",position:'relative',verticalAlign:'middle'}}>
                                <div className="row">
                                    <div className="col-2" style={{marginTop:'9px'}}>
                                        <div>
                                            <img src={require('../../assets/images/th.jpg')} style={{height: '50px', width:'50px', borderRadius: '30px'}} />
                                    
                                        </div>
                                    </div>
                                        <div className="col-2" style={{marginTop:'15px',marginLeft:'50px'}}>
                                            <Link to="/Quiz" style={{color:'black',fontSize:'15px'}}>Nicolas</Link>
                                        </div>
                                    
                                </div>

                            </div>

                            
            
                        </div>

                             <div  className="row" style={{marginLeft:'100px' ,width:'85%',height:'8%',marginTop:'8px'}}>

                            <div className="col-3" style={{backgroundColor: '#D6EAF8',borderWidth:'1px',borderStyle:'solid',boxShadow: '1px 1px 1px 1px #1C2833',textAlign:"center",position:'relative',verticalAlign:'middle'}}>
                                <div className="row">
                                    <div className="col-2" style={{marginTop:'9px'}}>
                                        <div>
                                            <img src={require('../../assets/images/th.jpg')} style={{height: '50px', width:'50px', borderRadius: '30px'}} />
                                    
                                        </div>
                                    </div>
                                        <div className="col-2" style={{marginTop:'15px',marginLeft:'50px'}}>
                                            <Link to="/Quiz" style={{color:'black',fontSize:'15px'}}>Amine</Link>
                                        </div>
                                    
                                </div>

                            </div>

                            <div className="col-3" style={{backgroundColor: '',borderWidth:'1px',borderStyle:'solid',boxShadow: '1px 1px 1px 1px #1C2833',textAlign:"center",position:'relative',verticalAlign:'middle'}}>
                                <div className="row">
                                    <div className="col-2" style={{marginTop:'9px'}}>
                                        <div>
                                            <img src={require('../../assets/images/th.jpg')} style={{height: '50px', width:'50px', borderRadius: '30px'}} />
                                    
                                        </div>
                                    </div>
                                        <div className="col-2" style={{marginTop:'15px',marginLeft:'50px'}}>
                                            <Link to="/Quiz" style={{color:'black',fontSize:'15px'}}>Hamza</Link>
                                        </div>
                                   
                                </div>

                            </div>

                            <div className="col-3" style={{backgroundColor: '',borderWidth:'1px',borderStyle:'solid',boxShadow: '1px 1px 1px 1px #1C2833',textAlign:"center",position:'relative',verticalAlign:'middle'}}>
                                <div className="row">
                                    <div className="col-2" style={{marginTop:'9px'}}>
                                        <div>
                                            <img src={require('../../assets/images/th.jpg')} style={{height: '50px', width:'50px', borderRadius: '30px'}} />
                                    
                                        </div>
                                    </div>
                                        <div className="col-2" style={{marginTop:'15px',marginLeft:'50px'}}>
                                            <Link to="/Quiz" style={{color:'black',fontSize:'15px'}}>Fahd</Link>
                                        </div>
                                    
                                </div>

                            </div>

                            <div className="col-3" style={{backgroundColor: '',borderWidth:'1px',borderStyle:'solid',boxShadow: '1px 1px 1px 1px #1C2833',textAlign:"center",position:'relative',verticalAlign:'middle'}}>
                                <div className="row">
                                    <div className="col-2" style={{marginTop:'9px'}}>
                                        <div>
                                            <img src={require('../../assets/images/th.jpg')} style={{height: '50px', width:'50px', borderRadius: '30px'}} />
                                    
                                        </div>
                                    </div>
                                        <div className="col-2" style={{marginTop:'15px',marginLeft:'50px'}}>
                                            <Link to="/Quiz" style={{color:'black',fontSize:'15px'}}>Nicolas</Link>
                                        </div>
                                    
                                </div>

                            </div>

                            
            
                        </div>

                             <div  className="row" style={{marginLeft:'100px' ,width:'85%',height:'8%',marginTop:'8px'}}>

                            <div className="col-3" style={{backgroundColor: '#D6EAF8',borderWidth:'1px',borderStyle:'solid',boxShadow: '1px 1px 1px 1px #1C2833',textAlign:"center",position:'relative',verticalAlign:'middle'}}>
                                <div className="row">
                                    <div className="col-2" style={{marginTop:'9px'}}>
                                        <div>
                                            <img src={require('../../assets/images/th.jpg')} style={{height: '50px', width:'50px', borderRadius: '30px'}} />
                                    
                                        </div>
                                    </div>
                                        <div className="col-2" style={{marginTop:'15px',marginLeft:'50px'}}>
                                            <Link to="/Quiz" style={{color:'black',fontSize:'15px'}}>Amine</Link>
                                        </div>
                                    
                                </div>

                            </div>

                            <div className="col-3" style={{backgroundColor: '',borderWidth:'1px',borderStyle:'solid',boxShadow: '1px 1px 1px 1px #1C2833',textAlign:"center",position:'relative',verticalAlign:'middle'}}>
                                <div className="row">
                                    <div className="col-2" style={{marginTop:'9px'}}>
                                        <div>
                                            <img src={require('../../assets/images/th.jpg')} style={{height: '50px', width:'50px', borderRadius: '30px'}} />
                                    
                                        </div>
                                    </div>
                                        <div className="col-2" style={{marginTop:'15px',marginLeft:'50px'}}>
                                            <Link to="/Quiz" style={{color:'black',fontSize:'15px'}}>Hamza</Link>
                                        </div>
                                   
                                </div>

                            </div>

                            <div className="col-3" style={{backgroundColor: '',borderWidth:'1px',borderStyle:'solid',boxShadow: '1px 1px 1px 1px #1C2833',textAlign:"center",position:'relative',verticalAlign:'middle'}}>
                                <div className="row">
                                    <div className="col-2" style={{marginTop:'9px'}}>
                                        <div>
                                            <img src={require('../../assets/images/th.jpg')} style={{height: '50px', width:'50px', borderRadius: '30px'}} />
                                    
                                        </div>
                                    </div>
                                        <div className="col-2" style={{marginTop:'15px',marginLeft:'50px'}}>
                                            <Link to="/Quiz" style={{color:'black',fontSize:'15px'}}>Fahd</Link>
                                        </div>
                                    
                                </div>

                            </div>

                            <div className="col-3" style={{backgroundColor: '',borderWidth:'1px',borderStyle:'solid',boxShadow: '1px 1px 1px 1px #1C2833',textAlign:"center",position:'relative',verticalAlign:'middle'}}>
                                <div className="row">
                                    <div className="col-2" style={{marginTop:'9px'}}>
                                        <div>
                                            <img src={require('../../assets/images/th.jpg')} style={{height: '50px', width:'50px', borderRadius: '30px'}} />
                                    
                                        </div>
                                    </div>
                                        <div className="col-2" style={{marginTop:'15px',marginLeft:'50px'}}>
                                            <Link to="/Quiz" style={{color:'black',fontSize:'15px'}}>Nicolas</Link>
                                        </div>
                                    
                                </div>

                            </div>

                            
            
                        </div> 

                             <div  className="row" style={{marginLeft:'100px' ,width:'85%',height:'8%',marginTop:'8px'}}>

                            <div className="col-3" style={{backgroundColor: '#D6EAF8',borderWidth:'1px',borderStyle:'solid',boxShadow: '1px 1px 1px 1px #1C2833',textAlign:"center",position:'relative',verticalAlign:'middle'}}>
                                <div className="row">
                                    <div className="col-2" style={{marginTop:'9px'}}>
                                        <div>
                                            <img src={require('../../assets/images/th.jpg')} style={{height: '50px', width:'50px', borderRadius: '30px'}} />
                                    
                                        </div>
                                    </div>
                                        <div className="col-2" style={{marginTop:'15px',marginLeft:'50px'}}>
                                            <Link to="/Quiz" style={{color:'black',fontSize:'15px'}}>Amine</Link>
                                        </div>
                                    
                                </div>

                            </div>

                            <div className="col-3" style={{backgroundColor: '',borderWidth:'1px',borderStyle:'solid',boxShadow: '1px 1px 1px 1px #1C2833',textAlign:"center",position:'relative',verticalAlign:'middle'}}>
                                <div className="row">
                                    <div className="col-2" style={{marginTop:'9px'}}>
                                        <div>
                                            <img src={require('../../assets/images/th.jpg')} style={{height: '50px', width:'50px', borderRadius: '30px'}} />
                                    
                                        </div>
                                    </div>
                                        <div className="col-2" style={{marginTop:'15px',marginLeft:'50px'}}>
                                            <Link to="/Quiz" style={{color:'black',fontSize:'15px'}}>Hamza</Link>
                                        </div>
                                   
                                </div>

                            </div>

                            <div className="col-3" style={{backgroundColor: '',borderWidth:'1px',borderStyle:'solid',boxShadow: '1px 1px 1px 1px #1C2833',textAlign:"center",position:'relative',verticalAlign:'middle'}}>
                                <div className="row">
                                    <div className="col-2" style={{marginTop:'9px'}}>
                                        <div>
                                            <img src={require('../../assets/images/th.jpg')} style={{height: '50px', width:'50px', borderRadius: '30px'}} />
                                    
                                        </div>
                                    </div>
                                        <div className="col-2" style={{marginTop:'15px',marginLeft:'50px'}}>
                                            <Link to="/Quiz" style={{color:'black',fontSize:'15px'}}>Fahd</Link>
                                        </div>
                                    
                                </div>

                            </div>

                            <div className="col-3" style={{backgroundColor: '',borderWidth:'1px',borderStyle:'solid',boxShadow: '1px 1px 1px 1px #1C2833',textAlign:"center",position:'relative',verticalAlign:'middle'}}>
                                <div className="row">
                                    <div className="col-2" style={{marginTop:'9px'}}>
                                        <div>
                                            <img src={require('../../assets/images/th.jpg')} style={{height: '50px', width:'50px', borderRadius: '30px'}} />
                                    
                                        </div>
                                    </div>
                                        <div className="col-2" style={{marginTop:'15px',marginLeft:'50px'}}>
                                            <Link to="/Quiz" style={{color:'black',fontSize:'15px'}}>Nicolas</Link>
                                        </div>
                                    
                                </div>

                            </div>

                            
            
                        </div>

                        
                    
         </div>
      </div>
    )
  }
}
