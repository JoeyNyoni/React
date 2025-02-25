import { useState } from "react"; //Hooks that can be used in functional components

const Counter = () => {
  // Can use multiple useState() hooks but not in loops or conditions
  // const [count, setCount] = useState(0);

  // All hooks should be called at the top level of the functional component

  // useState() returns an array with two elements:
  const [counter, setCounter] = useState(10); // Initial value of the state variable
  
  //complex state
  const [counterState, setCounterState] = useState(() => {
    return {
      counter: 10,
      title: "Fun"
    }
  });


  function increment() {
    setCounterState((prevState) => {
      // remember to return the new state and keep the old state to avoid overwriting
      return { ...prevState, counter: prevState.counter + 1 } 
    });
  }

  function decrement() {
    setCounterState((prevState) => {
      return { ...prevState, counter: prevState.counter - 1 }
    });
  }

  return (
    <div className="col-12 col-md-4 offset-md-4 border text-white">
      <span className="h2 pt-4 m-2 text-white-50">{counterState.title} Counter</span> <br />
      <button className="btn btn-success m-1" onClick={increment}>+1</button> 
      <button className="btn btn-danger m-1" onClick={decrement}>-1</button> <br />

      <span className="h4">
        Counter: &nbsp;
        <span className="text-success">{counterState.counter}</span>
      </span>
    </div>
  );
}

export default Counter;