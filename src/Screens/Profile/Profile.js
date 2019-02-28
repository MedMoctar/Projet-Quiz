import React, { Component } from 'react'
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import CompsntProfil from '../../components/compsntProfil/CompsntProfil';

export default class Profile extends Component {
  render() {
    return (
        //le dive pricipale
        <div className="container">
            <h3 style={{margin:'20px', paddingLeft: '8px' }}> My Profile </h3>
            {/* le dive contient le composant */}
            <div >
                {/* la premiere ligne qui contient la phot et le score et le classemnt  */}
                <div className="row" style={{margin:'30px' }}>
                    <div className="col">
                        <img className="rounded-circle" src={require('../../assets/images/th.jpg')}  style={{height: '200px', width:'200px'}} />
                    </div>
                    <div className="col order-1" style={{margin: '70px'}}>
                        <div className="row"><h3>Score</h3></div>
                        <div className="row"><h3> Classment</h3></div>
                    </div>
                    <div className="col order-12" style={{margin: '70px'}}>
                        <div className="row"><h3> 520</h3></div>
                        <div className="row"><h3> 06</h3></div>
                    </div>
                </div>
                    {/* la deuxième ligne qui contient la phot et le score et le classemnt  */}
                    <div>
                    <CompsntProfil />
                    </div>
            </div>
        </div>
        
    )
  }
}
