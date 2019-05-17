import React, { Component } from 'react';



export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        } 
    }

    render() {
        return (
            <div>
                <label>
                <img alt='hello' src={this.props.imgUrl}></img>
                </label>
                <h1>Product: {this.props.name}</h1>
                <h2>Price: {this.props.price}</h2>
            </div>
        )
    }
}