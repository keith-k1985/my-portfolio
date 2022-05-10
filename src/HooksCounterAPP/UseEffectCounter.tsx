import { useEffect, useState, VFC } from 'react';
const INITIAL_COUNT = 0;

export const UseEffectCounter: VFC = () => {
  const [count, setCount] = useState(INITIAL_COUNT);
  const countUp = () => setCount((prevCount) => prevCount + 1);

  const callbackFunction = () => {
    console.log(`${count}回クリックされました`);
  };

  useEffect(callbackFunction, [count]);

  return (
    <>
      <h2>useEffect カウンターアプリ</h2>
      <p>
        現在のカウント: {count}
        <br />
        count初期値: {INITIAL_COUNT}
      </p>
      <button onClick={countUp}>+</button>
    </>
  );
};
