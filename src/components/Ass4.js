import React, { Component } from 'react';

class Ass4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  Reset = () =>{
    this.setState({ clicks:0});

  }


  render() {
    return (
      <div className="container" >
          <div class="row">
              <div class="col-md-2"></div>
              <div class="col-md-2"></div>
              <div class="col-md-3">
          <div class="card"  style={//inline
                    {
                        fontSize:"30px",
                        marginTop:"80px",
                        textAlign:"center",
                        height:"200px"
                    }
                }>
          <h1>  { this.state.show ? <h2>{ this.state.clicks }</h2> : '' } </h1><br/>
          <div class="card-body">
        <button onClick={this.IncrementItem} style={{background:"Green",width:"60px"}}>+</button>
        <button onClick={this.Reset} style={{background:"orange"}}>Reset</button>
        <button onClick={this.DecreaseItem} style={{background:"Red",width:"60px"}}>-</button>
        </div>
        <div class="col-md-2"></div>
       
        <div class="col-md-2"></div>
  
        </div>
   
</div>
       
</div>
       
      
      </div>
    );
  }
}

export default Ass4;