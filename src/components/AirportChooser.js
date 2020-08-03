import React from 'react';
import ListItem from './ListItem.js';
import Dropdown from 'react-bootstrap/Dropdown';
import airportsAll from '../airports.js'; //  comment this if pulling data from API
import Loader from './Loader.js';
import './AirportChooser.css';

class AirportChooser extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoading : false,
            madeSelection : false,
            airports : [],
            selected : {}
        }
        
    }

    componentDidMount(){
        this.setState({
            isLoading : true
        });


    //-----*****************----Fetch from server (START)-------*******************--------------

        // fetch('https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json')
        //     .then(resp => resp.json())
        //     .then(data => { 
        //         setTimeout(()=>{
        //             this.setState({
        //                     isLoading : false                        
        //             }); 
        //             this.getDataIncrementally(data);
        //         }, 2000)
        //     })
        //     .catch(err => console.log(err));

    //-----***********************----Fetch from server (END)-----********************----------------


    //------#################--------input from a local file (START)---------##############---------

        setTimeout(()=>{
            this.setState({
                isLoading : false
            }); 
            this.getDataIncrementally(airportsAll);
        }, 2000);

    //-------################-------input from a local file (END)---------############----------

    }

    getDataIncrementally(data){
        setTimeout(() => {
            let condition = this.state.airports.length + 1 < data.length;
            this.setState( (prev) => ({
                airports: data.slice(0, prev.airports.length + 1)
            }));
            if (condition) {
                this.getDataIncrementally(data);
            }
        }, 0);
    }   
    
    
    render(){
        let getList =[];
        const data = this.state.airports;
        if(!this.state.isLoading){
            getList = data.map(item =>{
                return (
                    <Dropdown.Item key={item.code} >                        
                        <ListItem  item={item} handleClick={this.props.handleClick}/>
                    </Dropdown.Item>
                )                
            });
        }
        const componentText = this.state.isLoading ?  <Loader />:   getList ;
        return (
            <div className="row airport-component">
                <div className="col-md-6">Please select an airport :</div>
                <Dropdown className="col-md-6">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Get Airports
                    </Dropdown.Toggle>                
                    <Dropdown.Menu>                   
                        {componentText}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}

export default AirportChooser;