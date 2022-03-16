import React, { useState } from 'react';

type CounterProps = {
  incident: string;
};

const Counter = ({ incident }: CounterProps) => {
  const [count, setCount] = useState<number>(0);
  const [input, setInput] = useState<number>(0);

  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
      </section>
      <section className="controls">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCount(input);
          }}
        >
          <label htmlFor="set-to">Set Count</label>
          <input
            id="set-to"
            type="number"
            onChange={(e) => setInput(+e.target.value)}
          />
          <input type="submit" />
        </form>
      </section>
    </main>
  );
};

const Application = () => <Counter incident="Sick" />;

export default Application;
