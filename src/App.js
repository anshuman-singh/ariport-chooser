import React from 'react';
import AirportChooser from './components/AirportChooser';
import AirportSelected from './components/AirportSelected.js';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      madeSelection: false,
      selected : {}
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(obj){
    this.setState({
        madeSelection: true,
        selected : obj.item
    });
  }

  render(){
    const showSelected = this.state.madeSelection ? 
                        <AirportSelected selected={this.state.selected} /> : 
                        <div className="alert alert-primary" role="alert">You haven't selected any airport !</div>;
    return (
      <div className="container">      
        <AirportChooser handleClick={this.handleClick} />
        {showSelected}
      </div>
    );
  }


  
}

export default App;
