import React from 'react'

export default class Form extends React.Component{
    constructor(){
        super()

        this.state = {
            img: '',
            name: '',
            price: ''
        }
    }


    //INPUT FIELDS
    handleChange1(e){
        this.setState({
            img: e.target.value
        })
    }
    handleChange2(e){
        this.setState({
            name: e.target.value
        })
    }
    handleChange3(e){
        this.setState({
            price: e.target.value
        })
    }

    //CANCEL BUTTON
    cancelButton(){
        this.setState({
            img: '',
            name: '',
            price: ''
        })
    }




    render(){
        return(
            <div className='form'>
                
                {/* PREVIEW IMAGE */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/-Insert_image_here-.svg/1280px--Insert_image_here-.svg.png" alt=""/>

                {/* INPUTS */}
                <h2>Image URL:</h2>
                <input type="text"
                onChange={(e)=> this.handleChange1(e)}
                value={this.state.img}
                />
                
                <h2>Product Name:</h2>
                <input type="text"
                  onChange={(e)=> this.handleChange1(e)}
                  value={this.state.name}
                />
                
                <h2>Price:</h2>
                <input type="text"
                  onChange={(e)=> this.handleChange1(e)}
                  value={this.state.price}
                  />

                <hr/>

                {/* BUTTONS */}
                <button
                onClick={()=> this.cancelButton()}
                >Cancel</button>
                <button>Add to Inventory</button>
                </div>
        )
    }
}