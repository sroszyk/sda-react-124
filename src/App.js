import './App.css';
import React, { useState } from 'react';
import List from "./List";
import StoperToolbar from './StoperToolbar';
import userEvent from '@testing-library/user-event';

function App(props) {

  const [stoper, setStoper] = useState({
    seconds: 0,
    decySeconds: 0
  });

  const [isActive, setIsActive] = userEvent(false);

  let stoperId;

  // componentWillUnmount() {
  //   clearInterval(this.stoperId);
  // }

  const startStoper = () => {
    setIsActive(true);

    stoperId = setInterval(() => {
      if (stoper.decySeconds === 9) {
        setStoper({
          decySeconds: 0,
          seconds: stoper.seconds + 1
        })
      }
      else {
        setStoper({
          decySeconds: stoper.decySeconds + 1,
        })
      }
    }, 100);
  }

  // stopStoper = () => {
  //   this.setState((state, props) => {
  //     return {
  //       isActive: false
  //     }
  //   });

  //   clearInterval(this.stoperId);
  // }

  // resetStoper = () => {
  //   this.setState((state, props) => {
  //     return {
  //       seconds: 0,
  //       decySeconds: 0,
  //       rounds: []
  //     }
  //   })
  // }

  // addRound = () => {
  //   this.setState((state, props) => {

  //     return {
  //       rounds: [...state.rounds, {
  //         seconds: state.seconds,
  //         decySeconds: state.decySeconds
  //       }]
  //     }
  //   })
  // }

  // handleSubmit = (event) => {
  //   console.log(this.state.inputValue)
  //   event.preventDefault();
  // }

  // inputChange = (event) => {
  //   this.setState((state, props) => {
  //     return {
  //       inputValue: event.target.value
  //     }
  //   })
  // }


  return (
    <div>
      <h1>Stoper</h1>
      <h3>{stoper.seconds} : {stoper.decySeconds}</h3>
      {/* <StoperToolbar
        isActive={this.state.isActive}
        startStoper={this.startStoper}
        resetStoper={this.resetStoper}
        stopStoper={this.stopStoper}
        addRound={this.addRound}
      ></StoperToolbar>
      <List title="Rounds" rounds={this.state.rounds}></List>
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.inputValue} onChange={this.inputChange} />
        <input type="submit" value="Submit" />
      </form> */}
    </div>
  );


}

export default App;
