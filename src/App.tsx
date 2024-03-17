import { useState } from 'react';
import './App.css';

// make counter state persistent during toggling
// without using context, lifting state up, or using a global state management library

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
