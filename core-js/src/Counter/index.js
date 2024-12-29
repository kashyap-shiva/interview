// Here is Implementation of a create Counter function using closures.
import React, { useState, useRef } from "react";

const Counter = () => {
  // Create closure-based counter
  const createCounter = () => {
    let count = 0;
    return {
      increment: () => ++count,
      decrement: () => --count,
      reset: () => (count = 0),
      getValue: () => count,
    };
  };

  const counterRef = useRef(createCounter()); // Create the counter instance and store it in a ref
  const [val, setVal] = useState(counterRef.current.getValue()); // Initialize the state with counter value

  // Update React state on action
  const handleIncrement = () => {
    counterRef.current.increment(); // Increment internal counter value
    setVal(counterRef.current.getValue()); // Update React state with new value
  };

  const handleDecrement = () => {
    counterRef.current.decrement(); // Decrement internal counter value
    setVal(counterRef.current.getValue()); // Update React state with new value
  };

  const handleReset = () => {
    counterRef.current.reset(); // Reset internal counter value
    setVal(counterRef.current.getValue()); // Update React state with new value
  };

  return (
    <div>
      <h2>Counter: {val}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
