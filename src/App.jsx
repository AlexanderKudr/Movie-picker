import { useState, useEffect } from "react";
import "./App.scss";

// const Person = ({ name, lastName, age }) => {
//   return (
//     <>
//       <h1>Name: {name}</h1>
//       <h2>Last Name: {lastName}</h2>
//       <h2>Age: {age}</h2>
//     </>
//   );
// };

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("You changed the counter to " + count)
  }, [])
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  }
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  }
  return (
    <div className="App">
      <button onClick={increment}>+</button>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default App;
