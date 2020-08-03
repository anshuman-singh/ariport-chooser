import React from 'react';

class ListItem extends React.Component{
    constructor(){
        super()
        this.state ={}
    }

    render(){
        return (
            <div onClick={()=> this.props.handleClick(this.props)}>
                <div className="inline">
                    <div className="inline icon">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-geo-alt" fill="#777778" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                    </div>
                    <div className="inline"> {this.props.item.city}, {this.props.item.country}</div>
                    <div className="airport-code inline">({this.props.item.code})</div>
                    <div className="airport-name">{this.props.item.name}</div>
                </div>
            </div>           
        )
    }
    
}

export default ListItem;