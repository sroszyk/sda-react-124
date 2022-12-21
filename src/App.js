import './App.css';
import React from 'react';

class App extends React.Component {

  stoperId;

  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      decySeconds: 0
    }
  }

  componentWillUnmount() {
    clearInterval(this.stoperId);
  }

  startStoper = () => {
    this.stoperId = setInterval(() => {
      this.setState((state, props) => {
        if (state.decySeconds === 9) {
          return {
            decySeconds: 0,
            seconds: state.seconds + 1
          }
        }
        else {
          return {
            decySeconds: state.decySeconds + 1,
          }
        }
      })
    }, 100);
  }

  stopStoper = () => {
    clearInterval(this.stoperId);
  }

  render() {
    return (
      <div>
        <h1>Stoper</h1>
        <h3>{this.state.seconds} : {this.state.decySeconds}</h3>
        <button onClick={this.startStoper}>Start</button>
        <button onClick={this.stopStoper}>Stop</button>
      </div>
    );
  }

}

export default App;
