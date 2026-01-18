import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="text-center h-dvh  bg-indigo-950 text-white rounded-lg shadow-lg">
      <h1 className="text-5xl font-bold pt-10">Counter App</h1>
      <h2 className="text-4xl font-extrabold p-7 bg-gray-800">{count}</h2>
      <div className="flex justify-center gap-10">
        <button
          className="p-5 border-1-white rounded-lg"
          onClick={increaseCount}
        >
          Increment
        </button>
        <button
          className="p-5 border-white-1 rounded-lg"
          onClick={decreaseCount}
        >
          Decrement
        </button>
        <button className="p-5 border-white-1 rounded-lg" onClick={resetCount}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
