import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    drivetrain: '',
    weight: '',
    bhp: ''
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
    var x = (1000/this.state.weight)*this.state.bhp
    alert(x.toFixed())
  }

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

      <button onClick={this.calculate} value="calculate">calculate</button>
      </div>

    );
  }
}
export default App;
