import { useState } from 'react';
import './App.css';

function App() {
  const [isAbove, setIsAbove] = useState(false);

  return (
    <>
      {isAbove && <Counter />}
      <div>hi</div>
      {!isAbove && <Counter />}

      <button
        onClick={() => setIsAbove(!isAbove)}
        style={{ marginTop: '24px' }}
      >
        toggle is above
      </button>
    </>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default App;
