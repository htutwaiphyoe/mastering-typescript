import { useReducer } from 'react';

type CounterState = {
  count: number;
  input: number;
};

type FormCounterAction = {
  type: 'ONSUBMIT' | 'ONCHANGE';
  payload: number;
};

type BaseCounterAction = {
  type: 'INCREMENT' | 'DECREMENT' | 'RESET';
};

type CounterAction = BaseCounterAction | FormCounterAction;

const counterReducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'RESET':
      return { ...state, count: 0 };
    case 'ONSUBMIT':
      return { ...state, count: action.payload };
    case 'ONCHANGE':
      return { ...state, input: action.payload };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  input: 0
};

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const increment = () => dispatch({ type: 'INCREMENT' });

  const reset = () => dispatch({ type: 'RESET' });

  const decrement = () => dispatch({ type: 'DECREMENT' });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'ONCHANGE', payload: +e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'ONSUBMIT', payload: state.input });
  };

  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{state.count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
      </section>
      <section className="controls">
        <form onSubmit={handleSubmit}>
          <label htmlFor="set-to">Set Count</label>
          <input
            id="set-to"
            value={state.input}
            type="number"
            onChange={handleOnChange}
          />
          <input type="submit" />
        </form>
      </section>
    </main>
  );
};

const Application = () => <Counter />;

export default Application;
