import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    drivetrain: '',
    weight: '',
    bhp: '',
  }
  this.calculate0to60 = this.calculate0to60.bind(this);
  this.calculate0to100 = this.calculate0to100.bind(this);
}

drivetrain = (e) => {
  this.setState({
    drivetrain: e.target.value,
  },()=>console.log(this.state.drivetrain));
}

  weight = (e) => {
    this.setState({
      weight: e.target.value,
    },()=>console.log(this.state.weight));
  }

  bhp = (e) => {
    this.setState({
      bhp: e.target.value,
    },()=>console.log(this.state.bhp));
  }

  calculate0to60() {
    var x = 0
      if(this.state.drivetrain==='RWD') x=+0.17
      if(this.state.drivetrain==='FWD') x=+0.69
      if(this.state.drivetrain==='AWD') x=-0.39

    var y = ((this.state.weight / (this.state.bhp * 0.8))+x).toFixed(1)
    if(isNaN(y)) return '---'
    if(y == Infinity) return '---'
    return y
    console.log(y)
  }

  calculate0to100() {
    var x = 0
      if(this.state.drivetrain==='RWD') x=+4.87
      if(this.state.drivetrain==='FWD') x=+5.39
      if(this.state.drivetrain==='AWD') x=+5.19

    var y = ((this.state.weight / (this.state.bhp * 0.8))+x).toFixed(1)
    if(isNaN(y)) return '---'
    if(y == Infinity) return '---'
    return y
    console.log(y)
  }

  // (1000/this.state.weight)*this.state.bhp = bhp per tonne
  // this.state.weight / (this.state.bhp * 0.8) = 0-60 time in seconds

  render() {
    return (
      <div
      className="header">
      <h1>Performance Calculator</h1>
      <input type="button" onClick={this.drivetrain} value="RWD"/>
      <input type="button" onClick={this.drivetrain} value="FWD"/>
      <input type="button" onClick={this.drivetrain} value="AWD"/>

     <form>
        <label>weight:</label>
          <input type="number" value={this.state.value} onChange={this.weight} />

          <label>BHP:</label>
            <input type="number" value={this.state.value} onChange={this.bhp} />
      </form>
      <br></br>
      <div>0-60 = {this.calculate0to60()} seconds</div>
      <div>0-100 = {this.calculate0to100()} seconds</div>
      </div>

    );
  }
}
export default App;
