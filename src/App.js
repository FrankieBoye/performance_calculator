import React, {Component} from 'react';

class App extends Component {
  state = {
    drivetrain: '',
  }

drivetrain = (e) => {
  this.setState({
    drivetrain: e.target.value,
  })
  console.log(e.target.value)
}

  render() {
    return (
      <div
      className="header">
      <h1>Performance Calculator</h1>
      <p>Select drivetrain</p>
      <button onClick={this.drivetrain} value="RWD">RWD</button>
      <button onClick={this.drivetrain} value="FWD">FWD</button>
      <button onClick={this.drivetrain} value="AWD">AWD</button>
      </div>
    );
  }
}
export default App;
