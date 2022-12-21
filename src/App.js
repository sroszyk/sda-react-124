import './App.css';
import React, { useEffect, useState } from 'react';
import List from "./List";
import StoperToolbar from './StoperToolbar';

function App(props) {

  const [stoper, setStoper] = useState({
    seconds: 0,
    decySeconds: 0
  });

  const [isActive, setIsActive] = useState(false);
  const [rounds, setRounds] = useState([]);
  const [stoperId, setStoperId] = useState(undefined);

  // componentWillUnmount() {
  //   clearInterval(this.stoperId);
  // }

  const startStoper = () => {
    setIsActive(true);
    setStoperId(
      setInterval(() => {
        setStoper((prevStoper) => {
          if (prevStoper.decySeconds === 9) {
            return {
              decySeconds: 0,
              seconds: prevStoper.seconds + 1
            }
          }
          else {
            return {
              decySeconds: prevStoper.decySeconds + 1,
              seconds: prevStoper.seconds
            }
          }
        })
      }, 100));
  }

  const stopStoper = () => {
    setIsActive(false);
    clearInterval(stoperId);
  }

  const resetStoper = () => {
    setStoper({
      seconds: 0,
      decySeconds: 0
    });
  }

  const addRound = () => {
    setRounds([...rounds, {
      seconds: stoper.seconds,
      decySeconds: stoper.decySeconds
    }])
  }

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
      <StoperToolbar
        isActive={isActive}
        startStoper={startStoper}
        resetStoper={resetStoper}
        stopStoper={stopStoper}
        addRound={addRound}
      ></StoperToolbar>
      <List title="Rounds" rounds={rounds}></List>
      {/* <form onSubmit={this.handleSubmit}>
        <input value={this.state.inputValue} onChange={this.inputChange} />
        <input type="submit" value="Submit" />
      </form> */}
    </div>
  );


}

export default App;
