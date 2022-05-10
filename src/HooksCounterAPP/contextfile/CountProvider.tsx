import { createContext, ReactNode, useState, VFC } from 'react';

type Props = {
  children: ReactNode;
};

export const CountContext = createContext(
  {} as {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
  }
);

export const CountProvider: VFC<Props> = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};
