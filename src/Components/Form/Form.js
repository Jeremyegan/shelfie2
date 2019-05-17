import React, { Component } from 'react';


export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0,
            imgUrl: ''
        }
        this.handleChangeImg = this.handleChangeImg.bind(this)
    }

    handleChangeImg(res) {
        this.setState({
            imgUrl: res.data
        })
    }
    handleChangeName = (res) => {
        this.setState({
            name: res.data
        })
    }
    handleChangePrice = (res) => {
        this.setState({
            price: res.data
        })
    }

    handleClickClear = (value) => {
        document.getElementById("formInputs").reset()  // clears the input fields by their id name assigned to the full form below
        this.setState({
            name: '',
            price: 0,
            imgUrl: ''
        })
    }

    handleClickCreate = (res) => {
        this.setState({
            name: res.data,
            price: res.data,
            imgUrl: res.data
        })
    }

    



    render() {
        return (
            <div>
                <h1>Form</h1>
                <form id="formInputs">
                <input type="text" onChange={(e) => this.handleChangeImg(e.target.value)} value={this.state.id}></input>
                <input type="text" onChange={(e) => this.handleChangeName(e.target.value)} value={this.state.id}></input>
                <input type="text" onChange={(e) => this.handleChangePrice(e.target.value)} value={this.state.id}></input>
                </form>
                <button onClick={this.handleClickClear}>Cancel</button>
                <button onClick={this.handleClickCreate}>Add to Inventory</button>
            </div>
        )
    }
}