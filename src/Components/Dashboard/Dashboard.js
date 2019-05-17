import React, { Component } from 'react';
import Product from './../Product/Product';



export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }

    


    render() {
        console.log(this.props.inventory, 'this is whats on inventory')
        const duh = this.props.inventory.map((product, i) => {
            return <Product 
            key={ i } 
            product={product} 
            name={product.name}
            price={product.price}
            imgUrl={product.imgUrl}
             />
        })
        return (
            <div>
                <h1>Dashboard</h1>
                {duh}
                
            </div>
        )
    }
}