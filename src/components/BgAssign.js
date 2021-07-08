import React, { Component } from 'react'
import './VoterStyle.css'


export default class BgAssign extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            color: '#f2f2f2'
        }
    }
    handleChange(e){
        this.setState({
          color: e.target.value
          
        });
      }
    render() {
      

        return (
           <body>
            <div className="bgc"
             style={{ backgroundColor: `${ this.state.color }` }} >
            <div>
        
        <select className="options" onChange={this.handleChange.bind(this)} >
          <option value="#f2f2f2">Select a color </option>
          <option className="red" value="red">Red</option>
          <option className="blue" value="blue">Blue</option>
          <option className="green" value="green">Green</option>
        </select>
          
            </div>
            </div>
            </body>
        )
    }
}


