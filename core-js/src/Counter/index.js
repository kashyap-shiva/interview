// Here is Implementation of a create Counter function using closures.
import React , {useState} from "react"

const Counter = () => {
  const createCounter = () => {
    let count = 0;
    console.log("count", count);
    
    return {
      increment: () => ++count,
      decrement: () => --count,
      reset: () => (count = 0),
      getValue: () => count,
    };
  };

  const counter = createCounter()
  const [val, setVal] = useState(counter.getValue())
  console.log("val", val);
  
  return (
    <div>
      <h2>Counter : {val}</h2>
      <button onClick = {()=> setVal(counter.increment())}>Increment</button>
      <button onClick = {()=> setVal(counter.decrement())}>Decrement</button>
      <button onClick = {()=> setVal(counter.reset())}>Reset</button>
    </div>
  );
};

export default Counter;
