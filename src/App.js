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
  this.bhpPerTonne = this.bhpPerTonne.bind(this);
  this.reset = this.reset.bind(this);
}

drivetrain = (e) => {
  this.setState({
    drivetrain: e.target.value,
  });
}

  weight = (e) => {
    this.setState({
      weight: e.target.value,
    });
  }

  bhp = (e) => {
    this.setState({
      bhp: e.target.value,
    });
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
  }

  quarterMile(){
    var x = ((1000/this.state.weight)*this.state.bhp).toFixed()
    if(isNaN(x)) return '---'
    if(x == Infinity) return '---'
    if(x<107) return "18+ range"
    if(x<120) return "17's"
    if(x<137) return "16's"
    if(x<160) return "15's"
    if(x<190) return "14's"
    if(x<250) return "13's"
    if(x<340) return "12's"
    if(x<550) return "11's"
    if(x<860) return "10's!!"
    if(x>=860) return "less than 10 second range!!"
  }

  bhpPerTonne(){
    var x = ((this.state.bhp/this.state.weight)*1000).toFixed(1)
    if(isNaN(x)) return '---'
    return x
  }

  reset(){
    document.getElementById("calculator").reset();
    this.setState({ weight: '' })
    this.setState({ bhp: '' })
  }

  render() {
    return (
      <div
      className="header">
      <h1>Performance Calculator</h1>
      <input type="button" onClick={this.drivetrain} value="RWD"/>
      <input type="button" onClick={this.drivetrain} value="FWD"/>
      <input type="button" onClick={this.drivetrain} value="AWD"/>

     <form id ="calculator">
        <label>weight kg:</label>
          <input type="number" value={this.state.value} onChange={this.weight} />

          <label>BHP:</label>
            <input type="number" value={this.state.value} onChange={this.bhp} />
             <div><button type="button" onClick={this.reset}>Reset</button></div>
      </form>
      <br></br>
      <div>{this.bhpPerTonne()} bhp per tonne </div>
      <div>0-60 = {this.calculate0to60()} seconds</div>
      <div>0-100 = {this.calculate0to100()} seconds</div>
      <div>quarter mile in the {this.quarterMile()}</div>
      </div>

    );
  }
}
export default App;
