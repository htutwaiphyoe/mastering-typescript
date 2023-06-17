import { useEffect, useState } from 'react';

const inc = (count: number) => count + 1;
const dec = (count: number) => count - 1;
const reset = () => 0;

const Counter = () => {
  const [count, setCount] = useState(0);
  const [draftCount, setDraftCount] = useState(count);

  useEffect(() => setDraftCount(count), [count]);

  return (
    <section className="flex w-2/3 flex-col items-center gap-8 border-4 border-primary-500 bg-white p-8 shadow-lg">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{count}</p>
      <div className="flex gap-2">
        <button onClick={() => setCount(dec)}>➖ Decrement</button>
        <button onClick={() => setCount(reset)}>🔁 Reset</button>
        <button onClick={() => setCount(inc)}>➕ Increment</button>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCount(draftCount);
          }}
        >
          <input
            type="number"
            value={draftCount}
            onChange={(e) => setDraftCount(e.target.valueAsNumber)}
          />
          <button type="submit">Update Counter</button>
        </form>
      </div>
    </section>
  );
};

export default Counter;
