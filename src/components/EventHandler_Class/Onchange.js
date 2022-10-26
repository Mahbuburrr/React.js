import React, { Component } from 'react'

export default class extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         changedValue:''
      }
    }

    handleOnchange=(e)=>{
        
        this.setState(
            {
                changedValue:e.target.value
            }
            ,()=>{

                console.log(this.state.changedValue)
            }
        )
         

    }
  render() {
    return (
      <div>

        <input type="text" onChange={this.handleOnchange}/>
        <p>{this.state.changedValue}</p>
      </div>
    )
  }
}
