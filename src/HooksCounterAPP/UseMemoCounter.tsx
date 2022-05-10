import { memo, useState, VFC } from 'react';

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

export const UseMemoCounter = () => {
  const [countStateA, setCountStateA] = useState(0);
  const [countStateB, setCountStateB] = useState(0);

  const countUpA = () => setCountStateA((prevCountUpA) => prevCountUpA + 1);
  const countUpB = () => setCountStateB((prevCountUpB) => prevCountUpB + 1);
  return (
    <>
      <h2>useMemo カウンターアプリ</h2>
      <CountResult text='Aボタン' countState={countStateA} />
      <CountResult text='Bボタン' countState={countStateB} />
      <button onClick={countUpA}>Aボタン</button>
      <button onClick={countUpB}>Bボタン</button>
    </>
  );
};
