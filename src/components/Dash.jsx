import React from 'react'
import Product from './Product'
import Form from './Form'

export default class Dash extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div>
                Dash.jsx
                <Product />
                <Form />
            </div>
        )
    }
}