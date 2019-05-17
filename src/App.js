import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import axios from 'axios'


class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: []
    }
    console.log(this.state, "this is app state")
  }

  componentDidMount() {
    axios.get('/api/inventory')
    .then((res) => {
      this.setState({
        inventory: res.data
      })
    })
  }

  componentDidUpdate() {
    axios.put('/api/inventory')
    .then((res) => {
      this.setState({
        inventory: res.data
      })
    })
  }

  

  render() {
    return (
      <div className="App">
      
        <Dashboard inventory={this.state.inventory} />
        <Form />
        <Header />
        <Product />
      
      </div>
    );
  }
}

export default App;
