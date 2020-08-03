
import React from 'react';
import './AirportSelected.css';

class AirportSelected extends React.Component{
    constructor(){
        super();
        this.state ={}
    }
    render(){
        return(
            <div className="selected">
                <h6>You have selected the following : </h6>
                <div className="row">                
                    <div className="col-md-4">
                        <img src="airport.jpg" alt="Airport" width="100%"/>
                    </div>
                    <div className="col-md-8">
                        <div className="location-name">{this.props.selected.name} 
                            <span className="location-code">({this.props.selected.code})</span>
                        </div>
                        <div>
                            <div className="inline common">{this.props.selected.city} , </div>
                            <div className="inline common">{this.props.selected.country}</div>
                        </div>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Carriers</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">State</th>
                                    <th scope="col">TZ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.props.selected.carriers}</td>
                                    <td>{this.props.selected.lat} , {this.props.selected.lon}</td>
                                    <td>{this.props.selected.state}</td>
                                    <td>{this.props.selected.tz}</td>
                                </tr>                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        )

    }
}

export default AirportSelected;