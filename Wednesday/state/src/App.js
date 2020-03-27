import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>State and Events with React</h1>
      <Counter />
      <br />
      <Timer />
      <br />
      <DadJoke />
    </div>
  );
}

function Counter(props) {
  let [count, setCount] = useState(props.start);
  let increase = Number(props.increaseAmount) ? props.increaseAmount : 1;

  function countUp() {
    setCount(count + increase);
  }

  return (
    <p>
      <p>You clicked {count} times</p>
      <button onClick={countUp}>Click me to go up many times</button>
      <br />
      <button onClick={count + 1}>Count Up by 1</button>
      <button onClick={count - 1}>Count Down by 1</button>
    </p>
  );
}

function Timer() {
  let [time, setTime] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <p>The time is: {time}</p>;
}

function DadJoke() {}

export default App;
