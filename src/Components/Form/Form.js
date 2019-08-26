import React, {Component} from 'react'

import './Form.css'
import axios from 'axios';

export default class Form extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }


        this.handleCancel = this.handleCancel.bind(this)
    }

    handleInput = (event) => {
        this.setState({
            name: event.target.value,
            price: event.target.value,
            imgurl: event.target.value
        })
    }

    handleCancel(event){
        this.setState({
            name: '',
            price: 0,
            imgurl: ''
        })
    }

    createProduct = (req, res) => {
        const {getInventory} = this.props
        const {name, price, imgurl} = req.body

        axios.post('/api/product', {name: name, price: price, img: imgurl}).then(res => {
            getInventory()
        }).catch(err => console.log(err))
    }

    render(){
        return(
            <div className='Form'>

                <div className='Inputs'>
                    <label>Image URL:
                        <input type='text' name='image' onChange={this.handleInput}/>
                    </label>
                </div>

                <div className='Inputs'>
                    <label>Product Name:
                        <input type='text' name='name' onChange={this.handleInput}/>
                    </label>
                </div>

                <div className='Inputs'>
                    <label>Price:
                        <input type='number' name='price' onChange={this.handleInput}/>
                    </label>
                </div>

                <div className='Buttons'>
                    <button  className='Button' onClick={this.handleCancel}>Cancel</button>
                    <button className='Button'>Add to Inventory</button>
                </div>
                
            </div>
        )
    }
}