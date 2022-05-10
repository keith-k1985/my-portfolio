/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useCallback, useState, VFC } from 'react';

type Props = {
  text: string;
  countState: number;
};

const CountResult: VFC<Props> = memo(({ text, countState }) => {
  console.log(`${text}がクリックされました`);
  return (
    <p>
      {text}: {countState}
    </p>
  );
});

export const UseCallbackCounter = () => {
  const [countStateA, setCountStateA] = useState(0);
  const [countStateB, setCountStateB] = useState(0);

  const countUpA = useCallback(
    () => setCountStateA((prevCountUpA) => prevCountUpA + 1),
    [countStateA]
  );
  const countUpB = useCallback(
    () => setCountStateB((prevCountUpB) => prevCountUpB + 1),
    [countStateB]
  );
  return (
    <>
      <h2>useCallback カウンターアプリ</h2>
      <CountResult text='Aボタン' countState={countStateA} />
      <CountResult text='Bボタン' countState={countStateB} />
      <button onClick={countUpA}>Aボタン</button>
      <button onClick={countUpB}>Bボタン</button>
    </>
  );
};
