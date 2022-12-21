import './App.css';
import React from 'react';

class App extends React.Component {

  stoperId;

  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    }

  }

  componentWillUnmount() {
    clearInterval(this.stoperId);
  }

  startStoper = () => {
    this.stoperId = setInterval(() => {
      this.setState((state, props) => {
        return {
          seconds: state.seconds + 1
        }
      })
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>Stoper</h1>
        <h3>{this.state.seconds}</h3>
        <button onClick={this.startStoper}>Start</button>
        
      </div>
    );
  }

}

export default App;
