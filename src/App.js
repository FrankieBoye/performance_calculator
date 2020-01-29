import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    drivetrain: '',
    weight: '',
    bhp: '',
  }
  this.calculate = this.calculate.bind(this);
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

  calculate() {
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

  // (1000/this.state.weight)*this.state.bhp = bhp per tonne
  // this.state.weight / (this.state.bhp * 0.8) = 0-60 time in seconds

  render() {
    return (
      <div
      className="header">
      <h1>Performance Calculator</h1>
      <button onClick={this.drivetrain} value="RWD">RWD</button>
      <button onClick={this.drivetrain} value="FWD">FWD</button>
      <button onClick={this.drivetrain} value="AWD">AWD</button>

     <form>
        <label>weight:</label>
          <input type="number" value={this.state.value} onChange={this.weight} />

          <label>BHP:</label>
            <input type="number" value={this.state.value} onChange={this.bhp} />
      </form>
      <div>0-60 = {this.calculate()} seconds</div>
      </div>

    );
  }
}
export default App;
