import React, { Component } from 'react';
import './VoterStyle.css'
class Voter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      click1:0,
      click2:0,
      click3:0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  Increment2 = ()=>{
    this.setState({ click1: this.state.click1 + 1 });
  }
  Increment3 = ()=>{
    this.setState({ click2: this.state.click2 + 1 });
  }
  Increment4 = ()=>{
    this.setState({ click3: this.state.click3 + 1 });
  }


  render() {
    return (
      <div className="container"  >
          <div class="row">
              <div class="col-md-2"></div>
              <div class="col-md-2"></div>
              <div class="col-md-3">
                <h3>Vote Your Language</h3>
          <div className="vote">
          <p>  { this.state.show ? <p>{this.state.clicks }</p> : '' } </p>
         <span> <p>PHP</p></span>
        <a onClick={this.IncrementItem} style={{color:"Green"}}>click here</a>
        </div>
        <div className="vote"> 
        <p>  { this.state.show ? <p>{ this.state.click1}</p> : '' } </p>
        <p>Python</p>
        <a onClick={this.Increment2} style={{color:"Green"}}>click here</a>
        </div>
        <div className="vote"> 
        <p>  { this.state.show ? <p>{ this.state.click2}</p> : '' } </p>
        <p>Go</p>
        <a onClick={this.Increment3} style={{color:"Green"}}>click here</a>
        </div>
        <div className="vote"> 
        <p>  { this.state.show ? <p>{ this.state.click3}</p> : '' } </p>
        <p>Java</p>
        <a onClick={this.Increment4} style={{color:"Green"}}>click here</a>
        </div>
        <div class="col-md-2"></div>
       
        <div class="col-md-2"></div>
  
       
   
</div>
       
</div>
       
      
      </div>
    );
  }
}

export default Voter;