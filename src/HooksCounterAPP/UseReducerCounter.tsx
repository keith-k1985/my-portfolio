import { useReducer } from 'react';

type STORE = { count: number };
type ACTION = { type: 'increment' } | { type: 'decrement' };

const reducer = (state: STORE, action: ACTION) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const initialState = { count: 0 };
export const UseReducerCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <h2>useReducer カウンターアプリ</h2>
        <p>カウント: {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      </div>
    </>
  );
};
