import React, {Component} from 'react'

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
                    <button onClick={this.handleCancel}>Cancel</button>
                    <button>Add to Inventory</button>
                </div>
                
            </div>
        )
    }
}