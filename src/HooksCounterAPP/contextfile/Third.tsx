import { useContext, VFC } from 'react';
import { CountContext } from './CountProvider';

export const Third: VFC = () => {
  const { count, setCount } = useContext(CountContext);
  console.log(`現在のカウント: ${count}`);

  const handleClick = () => {
    setCount((prevCount: number) => prevCount + 1);
  };

  return (
    <>
      <p>Thirdコンポーネント:現在のカウント:{count}</p>
      <button onClick={handleClick}>+ボタン</button>
    </>
  );
};
