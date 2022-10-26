import React, { Component } from 'react'
import HomePage from './HomePage'
import LoginPage from './LoginPage'

export default class ConditionalRendering extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
        isloggedIn:false
      }
    }
  render() {

    const {isloggedIn}=this.state
    let element;
    element=isloggedIn ? <HomePage/> :<LoginPage />

    return(

        <div>
            {element}
        </div>
    )
  }
}    
