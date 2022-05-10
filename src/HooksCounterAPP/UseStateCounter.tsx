import { useState, VFC } from 'react';
const INITIAL_COUNT = 0;

export const UseStateCounter: VFC = () => {
  const [count, setCount] = useState(INITIAL_COUNT);
  const countUp = () => setCount((prevCount) => prevCount + 1);
  const countDown = () => setCount((prevCount) => prevCount - 1);
  const countReset = () => setCount(INITIAL_COUNT);
  return (
    <>
      <h2>useState カウンターアプリ</h2>
      <p>
        現在のカウント: {count}
        <br />
        count初期値: {INITIAL_COUNT}
      </p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
      <br />
      <button onClick={countReset}>リセット</button>
    </>
  );
};
