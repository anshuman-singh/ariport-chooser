import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './Loader.css';

class Loader extends React.Component{
    constructor(){
        super();
        this.state ={}
    }
    render(){
        return (
            <Dropdown.Item >
                <div>
                    <div className="loader-message">Please wait...while data loads !!!</div>
                    <div className="loader"></div>                    
                </div>                                
            </Dropdown.Item>
        )
    }

}


export default Loader;