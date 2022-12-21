import './App.css';
import React from 'react';

class App extends React.Component {

  stoperId;

  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      decySeconds: 0,
      isActive: false
    }
  }

  componentWillUnmount() {
    clearInterval(this.stoperId);
  }

  startStoper = () => {
    this.setState((state, props) => {
      return {
        isActive: true
      }
    });

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
    this.setState((state, props) => {
      return {
        isActive: false
      }
    });

    clearInterval(this.stoperId);
  }

  resetStoper = () => {
    this.setState((state, props) => {
      return {
        seconds: 0,
        decySeconds: 0
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Stoper</h1>
        <h3>{this.state.seconds} : {this.state.decySeconds}</h3>
        {!this.state.isActive && <button onClick={this.startStoper}>Start</button>}
        {!this.state.isActive && <button onClick={this.resetStoper}>Reset</button>}
        {this.state.isActive && <button onClick={this.stopStoper}>Stop</button>}
      </div>
    );
  }

}

export default App;
