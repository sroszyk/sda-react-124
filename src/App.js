import './App.css';
import React from 'react';
import List from "./List";

class App extends React.Component {

  stoperId;

  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      decySeconds: 0,
      isActive: false,
      rounds: []
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
        decySeconds: 0,
        rounds: []
      }
    })
  }

  addRound = () => {
    this.setState((state, props) => {

      return {
        rounds: [...state.rounds, {
          seconds: state.seconds,
          decySeconds: state.decySeconds
        }]
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
        {this.state.isActive && <button onClick={this.addRound}>Round</button>}
        <List title="Rounds" rounds={this.state.rounds}></List>
      </div>
    );
  }

}

export default App;
