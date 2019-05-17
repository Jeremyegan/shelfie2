import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Header extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <Link to="/">Dashboard</Link>
                <Link to="/add">Add Inventory</Link>

            </div>
        )
    }
}