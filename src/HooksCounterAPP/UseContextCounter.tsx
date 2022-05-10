import { CountProvider } from './contextfile/CountProvider';
import { First } from './contextfile/First';

export const UseContextCounter = () => {
  return (
    <>
      <h2>useContext カウンターアプリ</h2>
      <CountProvider>
        <First />
      </CountProvider>
    </>
  );
};
