import React, { Component } from 'react'

export default class CompsntProfil extends Component {
  render() {
    return (
      <div>
        <div className="row" style={{padding : '10px'}}>
            <div className="col-md-3 col-sm-6">
                <div className="card text-center">
                    <div className="card-block">
                    <img className="img-fluid" alt="" src={require('../../assets/images/pyt.jpg')}/>
                    <div className="card-title">
                        <h4> Pyton </h4>
                    </div>
                    <div className="card-text" style={{marginLeft : '10px'}}>
                        Pour savoir votre score et votre classement veillez cliquez sur le bouton ci-dessous
                    </div>
                    <a style={{ margin : '10px'}}  href="#" className="btn btn-success">Consulter</a>
                    </div>
                </div>
            </div>

            <div className="col-md-3 col-sm-6"> 
                <div className="card text-center">
                    <div className="card-block">
                    <img className="img-fluid" alt="" src={require('../../assets/images/php.png')}/>
                    <div className="card-title">
                        <h4> PHP </h4>
                    </div>
                    <div className="card-text" style={{marginLeft : '10px'}}>
                        Pour savoir votre score et votre classement veillez cliquez sur le bouton ci-dessous
                    </div>
                    <a style={{ margin : '10px'}}  href="#" className="btn btn-success">Consulter</a>
                    </div>
                </div>
            </div>

            <div className="col-md-3 col-sm-6">
                <div className="card text-center">
                    <div className="card-block">
                    <img className="img-fluid" alt="" src={require('../../assets/images/jvs.png')} style={{padding : '40px'}}/>
                    <div className="card-title">
                        <h4> JavaScript </h4>
                    </div>
                    <div className="card-text" style={{marginLeft : '10px'}}>
                        Pour savoir votre score et votre classement veillez cliquez sur le bouton ci-dessous
                    </div>
                    <a style={{ margin : '10px'}}  href="#" className="btn btn-success">Consulter</a>
                    </div>
                </div>
            </div>
        </div>

        {/* la deuxieme row */}
        <div className="row" style={{padding : '10px'}}>
            <div className="col-md-3 col-sm-6">
                <div className="card text-center">
                    <div className="card-block">
                        <img className="img-fluid" alt="" src={require('../../assets/images/rct.png')}/>
                        <div className="card-title">
                            <h4> React </h4>
                        </div>
                        <div className="card-text" style={{marginLeft : '10px'}}>
                            Pour savoir votre score et votre classement veillez cliquez sur le bouton ci-dessous
                        </div>
                        <a style={{ margin : '10px'}}  href="#" className="btn btn-success">Consulter</a>
                        </div>
                </div>
            </div>

            <div className="col-md-3 col-sm-6">
                <div className="card text-center">
                    <div className="card-block">
                        <img className="img-fluid" alt="" src={require('../../assets/images/html5.png')} style={{padding : '40px'}}/>
                        <div className="card-title">
                            <h4> Html5 </h4>
                        </div>
                        <div className="card-text" style={{marginLeft : '10px'}}>
                            Pour savoir votre score et votre classement veillez cliquez sur le bouton ci-dessous
                        </div>
                        <a style={{ margin : '10px'}}  href="#" className="btn btn-success">Consulter</a>
                        </div>
                </div>
            </div>

            <div className="col-md-3 col-sm-6">
                <div className="card text-center">
                    <div className="card-block">
                        <img className="img-fluid" alt="" src={require('../../assets/images/jva.png')} style={{padding : '40px'}}/>
                        <div className="card-title">
                            <h4> Java </h4>
                        </div>
                        <div className="card-text" style={{marginLeft : '10px'}}>
                            Pour savoir votre score et votre classement veillez cliquez sur le bouton ci-dessous
                        </div>
                        <a style={{ margin : '10px'}}  href="#" className="btn btn-success">Consulter</a>
                        </div>
                </div>
            </div>
        </div>

      </div>
    )
  }
}
