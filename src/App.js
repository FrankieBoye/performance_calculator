import React, {Component} from 'react';

class App extends Component {
  state = {
    drivetrain: '',
  }

drivetrain = (e) => {
  this.setState({
    drivetrain: e.target.value,
  },()=>console.log(this.state.drivetrain));
}

  render() {
    return (
      <div
      className="header">
      <h1>Performance Calculator</h1>
      <button onClick={this.drivetrain} value="RWD">RWD</button>
      <button onClick={this.drivetrain} value="FWD">FWD</button>
      <button onClick={this.drivetrain} value="AWD">AWD</button>

      <form onSubmit={this.handleSubmit}>
       <label htmlFor="weight"><font size="3">kerb weight</font> </label>
       <input id="weight" name="weight" type="text" />
       <button>enter</button>
     </form>

      </div>

    );
  }
}
export default App;
