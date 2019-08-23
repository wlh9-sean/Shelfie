import React, {Component} from 'react';
import axios from 'axios'

import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'


export default class App extends Component {
  constructor(){
    super()

    this.state = {
      inventory: []
    }
  }

  componentDidMount = () => {
    axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res.data
        
      })
    }).catch(err => console.log(err))
  }


  render(){
    return(
      <div className='App'>
        <div>
          <Header />
        </div>

        <div>
          <Form />
        </div>

        <div>
          <Dashboard 
            inventory={this.state.inventory}
            getInventory={this.componentDidMount}/>
        </div>
        
      </div>
    )
  }
}
