import { useReducer } from 'react';

type counterState = {
  count: number;
  draftCount: number;
};

type counterAction = {
  type: 'INC' | 'DEC' | 'RESET';
  payload?: number;
};

type draftCounterAction = {
  type: 'ONCHANGE' | 'UPDATE';
  payload: number;
};

const initialCounterState: counterState = {
  count: 0,
  draftCount: 0,
};

const counterReducer = (
  state = initialCounterState,
  action: counterAction | draftCounterAction,
): counterState => {
  switch (action.type) {
    case 'INC':
      const incCount = state.count + 1;
      return { count: incCount, draftCount: incCount };
    case 'DEC':
      const decCount = state.count - 1;
      return { count: decCount, draftCount: decCount };
    case 'RESET':
      return { count: 0, draftCount: 0 };
    case 'ONCHANGE':
      return { ...state, draftCount: action.payload };
    case 'UPDATE':
      return { count: action.payload, draftCount: action.payload };
    default:
      return state;
  }
};

const Counter = () => {
  const [counterState, dispatchCounterState] = useReducer(
    counterReducer,
    initialCounterState,
  );

  return (
    <section className="flex w-2/3 flex-col items-center gap-8 border-4 border-primary-500 bg-white p-8 shadow-lg">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{counterState.count}</p>
      <div className="flex gap-2">
        <button onClick={() => dispatchCounterState({ type: 'DEC' })}>
          ➖ Decrement
        </button>
        <button onClick={() => dispatchCounterState({ type: 'RESET' })}>
          🔁 Reset
        </button>
        <button onClick={() => dispatchCounterState({ type: 'INC' })}>
          ➕ Increment
        </button>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatchCounterState({
              type: 'UPDATE',
              payload: +e.currentTarget['draftCount'].value,
            });
          }}
        >
          <input
            type="number"
            id="draftCount"
            name="draftCount"
            value={counterState.draftCount}
            onChange={(e) =>
              dispatchCounterState({
                type: 'ONCHANGE',
                payload: e.target.valueAsNumber,
              })
            }
          />
          <button type="submit">Update Counter</button>
        </form>
      </div>
    </section>
  );
};

export default Counter;
